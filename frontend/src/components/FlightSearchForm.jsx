const defaultCities = [
  'Belgrade',
  'Paris',
  'Rome',
  'London',
  'Barcelona',
  'Dubai',
  'Milan',
  'New York',
  'Budapest',
  'Tokyo',
  'Amsterdam',
  'Singapore',
  'Istanbul',
  'Sydney',
  'Prague',
  'Vienna',
  'Athens',
  'Lisbon',
  'Berlin',
  'Bangkok',
  'Venice',
  'Hong Kong',
  'Stockholm',
  'Copenhagen',
  'Dublin',
  'Edinburgh',
  'Reykjavik',
  'Oslo',
  'Helsinki',
  'Brussels',
  'Zurich',
  'Madrid',
  'San Francisco',
  'Miami',
  'Los Angeles',
]

const FlightSearchForm = ({
  tripType,
  setTripType,
  from,
  setFrom,
  to,
  setTo,
  departure,
  setDeparture,
  returnDate,
  setReturnDate,
  passengers,
  setPassengers,
  cities = defaultCities,
  searchHandler,
}) => {
  return (
    <section className='flights-page'>
      <div className='flights-container'>
        <h1>Search flights</h1>

        <p>Enter your travel details to find the best flights</p>

        <div className='flight-search-box'>
          <div className='trip-buttons'>
            <button
              type='button'
              className={tripType === 'round' ? 'trip-active' : 'trip-btn'}
              onClick={() => setTripType('round')}
            >
              Round trip
            </button>

            <button
              type='button'
              className={tripType === 'oneway' ? 'trip-active' : 'trip-btn'}
              onClick={() => setTripType('oneway')}
            >
              One way
            </button>
          </div>

          <div className='flight-form-grid'>
            <div className='form-group'>
              <label>From</label>

              <div className='input-box'>
                <span>⌖</span>

                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label>To</label>

              <div className='input-box'>
                <span>⌖</span>

                <select value={to} onChange={(e) => setTo(e.target.value)}>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label>Departure</label>

              <div className='input-box'>
                <span>▣</span>

                <input
                  type='date'
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>
            </div>

            {tripType === 'round' && (
              <div className='form-group'>
                <label>Return</label>

                <div className='input-box'>
                  <span>▣</span>

                  <input
                    type='date'
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className='form-group'>
              <label>Passengers</label>

              <div className='input-box'>
                <span>♙</span>

                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4 Passengers</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type='button'
            className='search-flight-btn'
            onClick={searchHandler}
          >
            ⌕ Search flights
          </button>
        </div>
      </div>
    </section>
  )
}

export default FlightSearchForm
