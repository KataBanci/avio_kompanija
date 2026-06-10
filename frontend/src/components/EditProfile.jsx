import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/authSlice'

const EditProfile = ({ userInfo, onClose }) => {
  const [name, setName] = useState(userInfo?.name || '')
  const [email, setEmail] = useState(userInfo?.email || '')
  const [phone, setPhone] = useState(userInfo?.phone || '')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    const updatedUser = {
      ...userInfo,
      name,
      email,
      phone,
      password,
    }

    dispatch(setCredentials(updatedUser))
    onClose()
  }

  return (
    <div className='edit-profile-box'>
      <h2>Edit Profile</h2>

      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            value={phone}
            placeholder='+381 60 123 4567'
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='New password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className='edit-profile-buttons'>
          <Button type='submit' className='save-profile-btn'>
            Save Changes
          </Button>

          <Button type='button' className='cancel-profile-btn' onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default EditProfile