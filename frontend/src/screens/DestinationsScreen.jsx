import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import destinations from '../data/destinations'

const DestinationsScreen = () => {
  return (
    <Container className='py-5'>
      <div className='mb-5'>
        <h1 className='fw-bold'>Our destinations</h1>

        <p className='text-muted'>
          Explore amazing cities around the world
        </p>
      </div>

      <Row>
        {Object.values(destinations).map((destination, index) => (
          <Col
            key={index}
            sm={12}
            md={6}
            lg={3}
            className='mb-4'
          >
            <Card className='destination-card border-0 shadow-sm h-100'>

              <Card.Img
                variant='top'
                src={destination.image}
                className='destination-image'
              />

              <Card.Body className='d-flex flex-column'>

                <h4 className='fw-bold'>
                  {destination.city}
                </h4>

                <p className='text-muted mb-2'>
                  {destination.country}
                </p>

                <p className='small text-muted flex-grow-1'>
                  {destination.description}
                </p>

                <div className='d-flex justify-content-between align-items-center mt-3'>

                  <strong>
                    from {destination.price}
                  </strong>

                  <Button
                    className='explore-btn'
                    onClick={() =>
                      window.location.href = `/destinations/${destination.city
                        .toLowerCase()
                        .replaceAll(' ', '')}`
                    }
                  >
                    Explore →
                  </Button>

                </div>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default DestinationsScreen