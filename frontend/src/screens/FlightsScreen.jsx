import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FlightCard from '../components/FlightCard'
import SeatSelection from '../components/SeatSelection'
import FlightSearchForm from '../components/FlightSearchForm'
import { useGetFlightsQuery } from '../slices/FlightApiSlice'

const airportCodes = {
  'New York': 'JFK',
  London: 'LHR',
  Paris: 'CDG',
  Rome: 'FCO',
  Barcelona: 'BCN',
  Dubai: 'DXB',
  Tokyo: 'NRT',
  Amsterdam: 'AMS',
  Singapore: 'SIN',
  Istanbul: 'IST',
  Belgrade: 'BEG',
  Budapest: 'BUD',
  Milan: 'MXP',
  'Los Angeles': 'LAX',
  Miami: 'MIA',
}

const getAirportCode = (city) =>
  airportCodes[city] || city?.slice(0, 3).toUpperCase() || ''

const getFlightDate = (date) => {
  if (!date) {
    return ''
  }

  return date.slice(0, 10)
}

const formatDateInputValue = (date) => {
  const timezoneOffset = date.getTimezoneOffset() * 60000
  return new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 10)
}

const addDays = (date, days) => {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

const FlightsScreen = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)

  const { data: flights = [], isLoading, error, refetch } = useGetFlightsQuery()

  const params = new URLSearchParams(location.search)

  const fromFromUrl = params.get('from') || 'Belgrade'
  const destinationFromUrl = params.get('to') || 'Paris'

  const [from, setFrom] = useState(fromFromUrl)
  const [to, setTo] = useState(destinationFromUrl)

  const [tripType, setTripType] = useState('round')
  const [departure, setDeparture] = useState(() =>
    formatDateInputValue(new Date())
  )
  const [returnDate, setReturnDate] = useState(() =>
    formatDateInputValue(addDays(new Date(), 7))
  )
  const [passengers, setPassengers] = useState('1 Passenger')

  const [showResults, setShowResults] = useState(false)
  const [showSeats, setShowSeats] = useState(false)

  const [travelClass, setTravelClass] = useState('economy')
  const [selectedFlight, setSelectedFlight] = useState(null)

  const cities = useMemo(() => {
    const cityNames = flights.flatMap((flight) => [flight.from, flight.to])
    const uniqueCities = Array.from(new Set(cityNames.filter(Boolean)))

    return uniqueCities.length > 0 ? uniqueCities.sort() : Object.keys(airportCodes)
  }, [flights])

  useEffect(() => {
    if (!userInfo) {
      navigate(
        `/signin?redirect=${encodeURIComponent(
          location.pathname + location.search
        )}`
      )
    }
  }, [userInfo, navigate, location.pathname, location.search])

  const searchHandler = async () => {
    if (from === to) {
      alert('From and To cannot be the same city')
      return
    }

    await refetch()
    setSelectedFlight(null)
    setShowResults(true)
  }

  const newSearchHandler = () => {
    setShowResults(false)
    setShowSeats(false)
    setSelectedFlight(null)
  }

  const continueHandler = () => {
    if (!selectedFlight) {
      alert('Please select a flight first')
      return
    }

    setShowSeats(true)
  }

  const searchedFlights = flights
    .filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase()
    )
    .sort((firstFlight, secondFlight) => {
      const firstFlightMatchesDate =
        getFlightDate(firstFlight.departureDate) === departure
      const secondFlightMatchesDate =
        getFlightDate(secondFlight.departureDate) === departure

      if (firstFlightMatchesDate === secondFlightMatchesDate) {
        return 0
      }

      return firstFlightMatchesDate ? -1 : 1
    })

  if (showSeats) {
    return (
      <SeatSelection
        selectedFlight={selectedFlight}
        travelClass={travelClass}
        tripType={tripType}
        departure={departure}
        returnDate={tripType === 'round' ? returnDate : ''}
        from={from}
        to={to}
        airportCodes={airportCodes}
        onBack={() => setShowSeats(false)}
      />
    )
  }

  if (showResults) {
    return (
      <section className='flight-results-page'>
        <div className='flight-results-container'>
          <button className='new-search-btn' onClick={newSearchHandler}>
            ‹ New search
          </button>

          <h2>
            ✈ {from} → {to}
          </h2>

          <p>
            {tripType === 'round'
              ? `${departure} – ${returnDate} • ${passengers}`
              : `${departure} • One way • ${passengers}`}
          </p>

          <div className='travel-class-box'>
            <span>Select travel class:</span>

            <div className='travel-class-grid'>
              <button
                className={travelClass === 'economy' ? 'class-active' : ''}
                onClick={() => setTravelClass('economy')}
              >
                <strong>Economy</strong>
                <small>Standard seating</small>
              </button>

              <button
                className={travelClass === 'business' ? 'class-active' : ''}
                onClick={() => setTravelClass('business')}
              >
                <strong>Business</strong>
                <small>Premium experience</small>
              </button>
            </div>
          </div>

          {isLoading ? (
            <h3>Loading flights...</h3>
          ) : error ? (
            <h3>Error loading flights</h3>
          ) : (
            <>
              <div className='results-top'>
                <p>{searchedFlights.length} flights available</p>

                <div>
                  <button>Price</button>
                  <button>Duration</button>
                  <button>Departure</button>
                </div>
              </div>

              {searchedFlights.length === 0 ? (
                <div className='no-flight-results'>
                  <h3>No flights found</h3>
                  <p>
                    Check that the route and departure date match the flight
                    created by the administrator.
                  </p>
                </div>
              ) : (
                <>
                  <div className='flights-list'>
                    {searchedFlights.map((flight) => (
                      <FlightCard
                        key={flight._id}
                        flight={{
                          ...flight,
                          fromTime: flight.departureTime,
                          toTime: flight.arrivalTime,
                          duration: '2h 30m',
                          economyPrice: flight.price,
                          businessPrice: flight.price + 150,
                        }}
                        fromCode={getAirportCode(from)}
                        toCode={getAirportCode(to)}
                        travelClass={travelClass}
                        selectedFlight={selectedFlight}
                        setSelectedFlight={setSelectedFlight}
                      />
                    ))}
                  </div>

                  <button className='continue-seat-btn' onClick={continueHandler}>
                    Continue to seat selection
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </section>
    )
  }

  return (
    <FlightSearchForm
      tripType={tripType}
      setTripType={setTripType}
      from={from}
      setFrom={setFrom}
      to={to}
      setTo={setTo}
      departure={departure}
      setDeparture={setDeparture}
      returnDate={returnDate}
      setReturnDate={setReturnDate}
      passengers={passengers}
      setPassengers={setPassengers}
      cities={cities}
      searchHandler={searchHandler}
    />
  )
}

export default FlightsScreen
