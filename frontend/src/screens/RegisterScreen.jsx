import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import { FaUserPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/authSlice'
import { useRegisterMutation } from '../slices/usersApiSlice'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [register, { isLoading }] = useRegisterMutation()

  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  const submitHandler = async (e) => {
    e.preventDefault()
    setError('')

    const enteredName = name.trim()
    const enteredEmail = email.trim()
    const enteredPhone = phone.trim()

    if (!enteredName || !enteredEmail || !enteredPhone || !password || !confirmPassword) {
      setError('All fields must be filled in.')
      return
    }

    if (password.length < 6) {
      setError('Password must have at least 6 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!termsAccepted) {
      setError('You must agree to the Terms and Conditions.')
      return
    }

    try {
      const user = await register({
        name: enteredName,
        email: enteredEmail,
        password,
      }).unwrap()

      dispatch(setCredentials(user))
      navigate(redirect)
    } catch (error) {
      setError(error?.data?.message || 'Account could not be created.')
    }
  }

  return (
    <div className='register-page'>
      <div className='register-left'>
        <div className='register-left-content'>
          <FaUserPlus className='register-icon' />

          <h1>Join Our Community</h1>

          <p>
            Start your journey with exclusive benefits and seamless travel
            experiences
          </p>
        </div>
      </div>

      <div className='register-right'>
        <div className='register-box'>
          <Link to='/signin' className='back-link'>
            ‹ Back
          </Link>

          <h2>Create an Account</h2>

          <p className='register-subtitle'>
            Join us today and enjoy faster booking, saved trips, and exclusive
            offers.
          </p>

          {error && <Alert variant='danger'>{error}</Alert>}

          <Form onSubmit={submitHandler} className='register-form'>
            <Form.Group controlId='name' className='mb-3'>
              <Form.Label>Full Name</Form.Label>

              <Form.Control
                type='text'
                placeholder='John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId='email' className='mb-3'>
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type='email'
                placeholder='your@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId='phone' className='mb-3'>
              <Form.Label>Phone Number</Form.Label>

              <Form.Control
                type='text'
                placeholder='+1 234 567 8900'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId='password' className='mb-3'>
              <Form.Label>Password</Form.Label>

              <Form.Control
                type='password'
                placeholder='Create a secure password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength='6'
              />
            </Form.Group>

            <Form.Group controlId='confirmPassword' className='mb-3'>
              <Form.Label>Confirm Password</Form.Label>

              <Form.Control
                type='password'
                placeholder='Confirm your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength='6'
              />
            </Form.Group>

            <Form.Check
              type='checkbox'
              id='terms'
              className='terms-check'
              label='I agree to the Terms and Conditions'
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />

            <Button type='submit' className='register-btn' disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </Form>

          <div className='register-bottom'>
            Already have an account?{' '}
            <Link to={redirect ? `/signin?redirect=${redirect}` : '/signin'}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
