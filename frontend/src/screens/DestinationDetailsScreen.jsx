import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Rating from '../components/Rating'
import destinations from '../data/destinations'

const DestinationDetailsScreen = () => {
  const { city } = useParams()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)

  const destination = destinations[city]

  if (!destination) {
    return <h2>Destination not found</h2>
  }

  const bookNowHandler = () => {
    if (!userInfo) {
      navigate(
        `/signin?redirect=${encodeURIComponent(
          `/flights?to=${destination.city}`
        )}`
      )
    } else {
      navigate(`/flights?to=${destination.city}`)
    }
  }

  return (
    <section className='destination-details-page'>
      <div className='destination-details-container'>
        <button
          className='back-link-btn'
          onClick={() => navigate('/destinations')}
        >
          ‹ Back to destinations
        </button>

        <img
          src={destination.image}
          alt={destination.city}
          className='destination-detail-image'
        />

        <div className='destination-detail-layout'>
          <div>
            <h1>{destination.city}</h1>
            <p>⌖ {destination.country}</p>

            <div className='detail-card'>
              <h3>About {destination.city}</h3>
              <p>{destination.description}</p>

              <h4>Top Attractions</h4>

              <ul>
                {destination.attractions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='detail-card'>
              <h3>Visitor Reviews</h3>

              <p>{destination.reviewName}</p>
              <p>April 2026</p>

              <Rating
                value={destination.rating}
                text={destination.reviewText}
              />

              <p>{destination.review}</p>
            </div>
          </div>

          <div className='travel-info-card'>
            <h3>Travel Information</h3>

            <p>
              <strong>Best Time to Visit</strong>
              <br />
              {destination.bestTime}
            </p>

            <p>
              <strong>Currency</strong>
              <br />
              {destination.currency}
            </p>

            <p>
              <strong>Language</strong>
              <br />
              {destination.language}
            </p>

            <hr />

            <p>Flights starting from</p>

            <h2>from {destination.price}</h2>

            <button onClick={bookNowHandler}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationDetailsScreen