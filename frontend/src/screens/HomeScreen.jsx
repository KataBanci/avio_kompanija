import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)

  const bookNowHandler = (fromCity, toCity) => {
    if (!userInfo) {
      navigate(
        `/signin?redirect=${encodeURIComponent(
          `/flights?from=${fromCity}&to=${toCity}`
        )}`
      )
    } else {
      navigate(`/flights?from=${fromCity}&to=${toCity}`)
    }
  }

  return (
    <>
      <section className='hero-section'>
        <div className='hero-overlay'>
          <div className='hero-content'>
            <h1>Fly Smarter, Travel Better</h1>
            <p>
              Discover top destinations, book flights in seconds, and enjoy a
              seamless travel experience.
            </p>
          </div>
        </div>
      </section>

      <section className='deals-section'>
        <h2>Limited time deals</h2>
        <p>Book now before these offers are gone</p>

        <div className='deals-container'>
          <div className='deal-card'>
            <p className='seats-left'>ⓘ Only 2 seats left</p>
            <p className='airline'>✈ Air France</p>

            <div className='route'>
              <h3>New York <span>JFK</span></h3>
              <hr />
              <h3>Paris <span>CDG</span></h3>
            </div>

            <p className='date'>Apr 25 - May 2</p>

            <div className='price'>
              $299 <span>$549</span>
            </div>

           <button className='book-btn' onClick={() => bookNowHandler('New York', 'Paris')}>
  Book now
</button>
          </div>

          <div className='deal-card'>
            <p className='seats-placeholder'>‎</p>
            <p className='airline'>✈ Japan Airlines</p>

            <div className='route'>
              <h3>Los Angeles <span>LAX</span></h3>
              <hr />
              <h3>Tokyo <span>NRT</span></h3>
            </div>

            <p className='date'>May 10 - May 20</p>

            <div className='price'>
              $425 <span>$780</span>
            </div>

            <button className='book-btn' onClick={() => bookNowHandler('Los Angeles', 'Tokyo')}>
  Book now
</button>
          </div>

          <div className='deal-card'>
            <p className='seats-left'>ⓘ Only 3 seats left</p>
            <p className='airline'>✈ Emirates</p>

            <div className='route'>
              <h3>London <span>LHR</span></h3>
              <hr />
              <h3>Dubai <span>DXB</span></h3>
            </div>

            <p className='date'>Jun 5 - Jun 15</p>

            <div className='price'>
              $385 <span>$650</span>
            </div>

            <button className='book-btn' onClick={() => bookNowHandler('London', 'Dubai')}>
  Book now
</button>
          </div>

          <div className='deal-card'>
            <p className='seats-placeholder'>‎</p>
            <p className='airline'>✈ Iberia</p>

            <div className='route'>
              <h3>Miami <span>MIA</span></h3>
              <hr />
              <h3>Barcelona <span>BCN</span></h3>
            </div>

            <p className='date'>Apr 30 - May 8</p>

            <div className='price'>
              $315 <span>$590</span>
            </div>

           <button className='book-btn' onClick={() => bookNowHandler('Miami', 'Barcelona')}>
  Book now
</button>
          </div>
        </div>
      </section>

      <section className='destinations-section'>
        <div className='section-container'>
          <h2>Popular destinations</h2>
          <p>Explore top cities around the world</p>

          <div className='destinations-grid'>
            <div
              className='destination-card'
              style={{ backgroundImage: "url('/images/london.jpg')" }}
            >
              <div className='destination-overlay'>
                <h3>London</h3>
                <p>United Kingdom</p>

                <div className='destination-bottom'>
                  <span>from $542</span>
                 <button onClick={() => navigate('/destinations/london')}>
  Explore →
</button>
                </div>
              </div>
            </div>

            <div
              className='destination-card'
              style={{ backgroundImage: "url('/images/milan.jpg')" }}
            >
              <div className='destination-overlay'>
                <h3>Milan</h3>
                <p>Italy</p>

                <div className='destination-bottom'>
                  <span>from $628</span>
                 <button onClick={() => navigate('/destinations/milan')}>
  Explore →
</button>
                </div>
              </div>
            </div>

            <div
              className='destination-card'
              style={{ backgroundImage: "url('/images/newyork.jpg')" }}
            >
              <div className='destination-overlay'>
                <h3>New York</h3>
                <p>United States</p>

                <div className='destination-bottom'>
                  <span>from $389</span>
                <button onClick={() => navigate('/destinations/newyork')}>
  Explore →
</button>
                </div>
              </div>
            </div>

            <div
              className='destination-card'
              style={{ backgroundImage: "url('/images/budapest.jpg')" }}
            >
              <div className='destination-overlay'>
                <h3>Budapest</h3>
                <p>Hungary</p>

                <div className='destination-bottom'>
                  <span>from $456</span>
                 <button onClick={() => navigate('/destinations/budapest')}>
  Explore →
</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='community-section'>
        <div className='community-icon'>👤+</div>

        <h2>Join our community</h2>

        <p>
          If you haven't registered yet, sign up on our website to unlock
          exclusive deals, earn rewards, and get personalized travel
          recommendations.
        </p>

       <div className='community-buttons'>

  <button
    className='create-btn'
    onClick={() => navigate('/register')}
  >
    Create an account
  </button>

  <button
    className='learn-btn'
    onClick={() => navigate('/about')}
  >
    Learn more
  </button>

</div>
      </section>
    </>
  )
}

export default HomeScreen