import { Container } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <p>
          &copy; {currentYear} AirVista. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer