import { useState } from 'react'
import Payment from './Payment'

const occupiedSeats = [
  '1E', '1F', '2B', '2E', '3A', '3D', '3F',
  '4B', '4C', '4D', '7B', '10C', '10D',
  '11E', '11F', '12C', '12F', '13D', '13E',
]

const rows = Array.from({ length: 13 }, (_, index) => index + 1)
const columns = ['A', 'B', 'C', 'D', 'E', 'F']

const SeatSelection = ({
  selectedFlight,
  travelClass,
  departure,
  from,
  to,
  airportCodes,
  onBack,
}) => {
  const [selectedSeats, setSelectedSeats] = useState([])
  const [showPayment, setShowPayment] = useState(false)

  const toggleSeat = (seatNumber) => {
    if (occupiedSeats.includes(seatNumber)) return

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }

  const continueToPayment = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat')
      return
    }

    setShowPayment(true)
  }

  if (showPayment) {
    return (
      <Payment
        selectedFlight={selectedFlight}
        travelClass={travelClass}
        selectedSeats={selectedSeats}
        departure={departure}
        from={from}
        to={to}
        airportCodes={airportCodes}
        onBack={() => setShowPayment(false)}
      />
    )
  }

  return (
    <section className='seat-page'>
      <div className='seat-container'>
        <button className='new-search-btn' onClick={onBack}>
          ‹ Back to flights
        </button>

        <h1>Select your seats</h1>

        <p>
          {airportCodes[from]} → {airportCodes[to]} • {departure} •{' '}
          {travelClass === 'economy' ? 'Economy Class' : 'Business Class'}
        </p>

        <p>Selected flight: {selectedFlight.airline}</p>

        <div className='seat-box'>
          <div className='seat-legend'>
            <span><i className='legend available'></i> Available</span>
            <span><i className='legend selected'></i> Selected</span>
            <span><i className='legend occupied'></i> Occupied</span>
          </div>

          <p className='front-text'>Front of Aircraft</p>

          <div className='seat-columns'>
            {columns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>

          <div className='seat-grid'>
            {rows.map((row) =>
              columns.map((column) => {
                const seatNumber = `${row}${column}`
                const isOccupied = occupiedSeats.includes(seatNumber)
                const isSelected = selectedSeats.includes(seatNumber)

                return (
                  <button
                    key={seatNumber}
                    disabled={isOccupied}
                    onClick={() => toggleSeat(seatNumber)}
                    className={
                      isOccupied
                        ? 'seat occupied-seat'
                        : isSelected
                        ? 'seat selected-seat'
                        : 'seat available-seat'
                    }
                  >
                    {seatNumber}
                  </button>
                )
              })
            )}
          </div>

          <div className='seat-bottom'>
            <div>
              <p>Selected {selectedSeats.length} seats</p>
              <strong>
                Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : '-'}
              </strong>
            </div>

            <button onClick={continueToPayment}>
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeatSelection