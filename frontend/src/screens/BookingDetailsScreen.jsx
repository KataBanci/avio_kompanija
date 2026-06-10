import { useParams, useNavigate } from 'react-router-dom'
import { useGetBookingDetailsQuery } from '../slices/BookingApiSlice'

const BookingDetailsScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: booking, isLoading, error } = useGetBookingDetailsQuery(id)

  if (isLoading) {
    return <h2>Loading booking...</h2>
  }

  if (error || !booking) {
    return <h2>Booking not found</h2>
  }

  return (
    <section className='booking-details-page'>
      <div className='booking-details-container'>
        <button
          className='back-btn'
          onClick={() => navigate('/profile')}
        >
          Back to profile
        </button>

        <div className='booking-details-card'>
          <h1>Flight Details</h1>

          <p><strong>Booking ID:</strong> {booking._id}</p>
          <p><strong>Customer:</strong> {booking.user?.name || booking.passengerName}</p>
          <p><strong>Email:</strong> {booking.user?.email || booking.passengerEmail}</p>
          <p><strong>Route:</strong> {booking.flight?.from} to {booking.flight?.to}</p>
          <p><strong>Date:</strong> {booking.flight?.departureDate?.slice(0, 10)}</p>
          <p><strong>Passengers:</strong> {booking.numberOfTickets}</p>
          <p><strong>Airline:</strong> {booking.flight?.airline}</p>
          <p><strong>Departure:</strong> {booking.flight?.departureTime}</p>
          <p><strong>Arrival:</strong> {booking.flight?.arrivalTime}</p>
          <p><strong>Class:</strong> {booking.travelClass}</p>
          <p><strong>Seats:</strong> {booking.seats?.join(', ') || '-'}</p>
          <p><strong>Payment:</strong> {booking.paymentMethod || 'Unknown'}</p>
          <p><strong>Status:</strong> {booking.status}</p>

          <h2>Total: ${booking.totalPrice}</h2>
        </div>
      </div>
    </section>
  )
}

export default BookingDetailsScreen
