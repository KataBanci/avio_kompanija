import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { FaSignInAlt, FaUserShield } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/authSlice'
import ForgotPasswordModal from '../components/ForgotPasswordModal'
import { useLoginMutation } from '../slices/usersApiSlice'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showForgot, setShowForgot] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/profile'

  const submitHandler = async (e) => {
    e.preventDefault()
    setError('')

    const enteredEmail = email.trim()

    if (!enteredEmail || !password) {
      setError('You must enter Gmail and password.')
      return
    }

    if (password.length < 6) {
      setError('Password must have at least 6 characters.')
      return
    }

    try {
      const user = await login({
        email: enteredEmail,
        password,
      }).unwrap()

      dispatch(setCredentials(user))

      if (user.isAdmin) {
        navigate('/admin')
      } else {
        navigate(redirect)
      }
    } catch (error) {
      setError(error?.data?.message || 'Invalid email or password.')
    }
  }

  return (
    <div className='signin-page'>
      <div className='signin-left'>
        <div className='signin-left-content'>
          <FaSignInAlt className='signin-icon' />

          <h1>Welcome Back</h1>

          <p>
            Sign in to access your bookings and exclusive offers
          </p>
        </div>
      </div>

      <div className='signin-right'>
        <div className='signin-box'>
          <h2>Sign In</h2>

          <p className='signin-subtitle'>
            Access your account to manage bookings and preferences
          </p>

          {error && (
            <Alert variant='danger'>
              {error}
            </Alert>
          )}

          <Form
            onSubmit={submitHandler}
            className='signin-form'
          >
            <Form.Group
              className='mb-3'
              controlId='email'
            >
              <Form.Label>
                Email Address
              </Form.Label>

              <Form.Control
                type='email'
                placeholder='your@email.com'
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='password'
            >
              <Form.Label>Password</Form.Label>

              <Form.Control
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                minLength='6'
              />
            </Form.Group>

            <div className='d-flex justify-content-between align-items-center mb-4'>
              <Form.Check
                type='checkbox'
                id='rememberMe'
                label='Remember me'
                className='remember-check'
              />

              <button
                type='button'
                className='forgot-link-btn'
                onClick={() =>
                  setShowForgot(true)
                }
              >
                Forgot password?
              </button>
            </div>

            <Button
              type='submit'
              className='signin-btn-large'
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </Form>

          <Row className='mt-4'>
            <Col className='text-center'>
              Don&apos;t have an account?{' '}

              <Link to='/register'>
                Create an account
              </Link>
            </Col>
          </Row>

          <div className='admin-login-box'>
            <p>
              Administrator access
            </p>

            <Button
              type='button'
              className='admin-login-btn'
              onClick={() => {
                setEmail('admin@example.com')
                setPassword('')
                setError('Enter the administrator password to continue.')
              }}
            >
              <FaUserShield />
              <span>Use Administrator Account</span>
            </Button>
          </div>
        </div>
      </div>

      {showForgot && (
        <ForgotPasswordModal
          onClose={() =>
            setShowForgot(false)
          }
        />
      )}
    </div>
  )
}

export default SignInScreen
