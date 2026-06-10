import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    setSuccess(true)
  }

  return (
    <div className='forgot-modal'>
      <div className='forgot-box'>
        <h2>Reset Password</h2>

        {!success ? (
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3'>
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <div className='forgot-buttons'>
              <Button type='submit' className='signin-btn-large'>
                Send Reset Link
              </Button>

              <Button
                type='button'
                className='cancel-profile-btn'
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </Form>
        ) : (
          <>
            <p className='success-text'>
              Password reset link has been sent to your email.
            </p>

            <Button onClick={onClose} className='signin-btn-large'>
              Close
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default ForgotPasswordModal