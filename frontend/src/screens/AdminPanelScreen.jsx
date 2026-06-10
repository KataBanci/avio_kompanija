import { useMemo, useState } from 'react'
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaPlus,
  FaPlaneDeparture,
  FaTimesCircle,
  FaTrash,
} from 'react-icons/fa'
import {
  useDeleteBookingMutation,
  useGetBookingsQuery,
  useUpdateBookingStatusMutation,
} from '../slices/BookingApiSlice'
import { useCreateFlightMutation } from '../slices/FlightApiSlice'

const bookingStatuses = ['pending', 'confirmed', 'completed', 'cancelled']
const initialFlightForm = {
  airline: 'Sky Serbia',
  flightNumber: '',
  from: '',
  to: '',
  departureDate: '',
  returnDate: '',
  departureTime: '',
  arrivalTime: '',
  travelClass: 'Economy',
  price: '',
  countInStock: '',
  image: '/images/plane.jpg',
  description: '',
}

const AdminPanelScreen = ({ embedded = false }) => {
  const { data: bookings = [], isLoading, error, refetch } = useGetBookingsQuery()
  const [updateBookingStatus] = useUpdateBookingStatusMutation()
  const [deleteBooking] = useDeleteBookingMutation()
  const [createFlight, { isLoading: isCreatingFlight }] = useCreateFlightMutation()
  const [actionError, setActionError] = useState('')
  const [flightSuccess, setFlightSuccess] = useState('')
  const [flightForm, setFlightForm] = useState(initialFlightForm)

  const bookingStats = useMemo(() => {
    const activeBookings = bookings.filter(
      (booking) => booking.status !== 'cancelled'
    )
    const cancelledBookings = bookings.filter(
      (booking) => booking.status === 'cancelled'
    )

    return {
      total: bookings.length,
      active: activeBookings.length,
      cancelled: cancelledBookings.length,
    }
  }, [bookings])

  const statusChangeHandler = async (id, status) => {
    try {
      setActionError('')
      await updateBookingStatus({ bookingId: id, status }).unwrap()
      refetch()
    } catch (error) {
      setActionError(
        error?.data?.message || 'Booking status could not be updated.'
      )
    }
  }

  const deleteHandler = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this booking?'
    )

    if (confirmed) {
      try {
        setActionError('')
        await deleteBooking(id).unwrap()
        refetch()
      } catch (error) {
        setActionError(error?.data?.message || 'Booking could not be deleted.')
      }
    }
  }

  const flightInputChangeHandler = (e) => {
    const { name, value } = e.target
    setFlightForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const createFlightHandler = async (e) => {
    e.preventDefault()

    try {
      setActionError('')
      setFlightSuccess('')

      await createFlight({
        ...flightForm,
        price: Number(flightForm.price),
        countInStock: Number(flightForm.countInStock),
      }).unwrap()

      setFlightForm(initialFlightForm)
      setFlightSuccess('Flight has been added successfully.')
    } catch (error) {
      setActionError(error?.data?.message || 'Flight could not be added.')
    }
  }

  return (
    <section className={embedded ? 'admin-page admin-page-embedded' : 'admin-page'}>
      <div className={embedded ? 'admin-container admin-container-embedded' : 'admin-container'}>
        {!embedded && (
          <div className='admin-header'>
            <div>
              <p>Administrator</p>
              <h1>Booking Management</h1>
            </div>
          </div>
        )}

        <div className='admin-stats'>
          <div className='admin-stat-card'>
            <div className='admin-stat-icon'>
              <FaPlaneDeparture />
            </div>
            <div>
              <span>Total bookings</span>
              <strong>{bookingStats.total}</strong>
            </div>
          </div>

          <div className='admin-stat-card'>
            <div className='admin-stat-icon active'>
              <FaCheckCircle />
            </div>
            <div>
              <span>Active bookings</span>
              <strong>{bookingStats.active}</strong>
            </div>
          </div>

          <div className='admin-stat-card'>
            <div className='admin-stat-icon cancelled'>
              <FaTimesCircle />
            </div>
            <div>
              <span>Cancelled</span>
              <strong>{bookingStats.cancelled}</strong>
            </div>
          </div>
        </div>

        {actionError && <p className='admin-action-error'>{actionError}</p>}

        <div className='admin-bookings-panel admin-flight-panel'>
          <div className='admin-panel-top'>
            <div>
              <h2>Add New Flight</h2>
              <p>Create a new route that customers can book.</p>
            </div>
          </div>

          {flightSuccess && (
            <p className='admin-action-success'>{flightSuccess}</p>
          )}

          <form className='admin-flight-form' onSubmit={createFlightHandler}>
            <div className='admin-form-grid'>
              <label>
                Airline
                <input
                  type='text'
                  name='airline'
                  value={flightForm.airline}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                Flight number
                <input
                  type='text'
                  name='flightNumber'
                  value={flightForm.flightNumber}
                  onChange={flightInputChangeHandler}
                  placeholder='SKY-101'
                  required
                />
              </label>

              <label>
                From
                <input
                  type='text'
                  name='from'
                  value={flightForm.from}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                To
                <input
                  type='text'
                  name='to'
                  value={flightForm.to}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                Departure date
                <input
                  type='date'
                  name='departureDate'
                  value={flightForm.departureDate}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                Return date
                <input
                  type='date'
                  name='returnDate'
                  value={flightForm.returnDate}
                  onChange={flightInputChangeHandler}
                />
              </label>

              <label>
                Departure time
                <input
                  type='time'
                  name='departureTime'
                  value={flightForm.departureTime}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                Arrival time
                <input
                  type='time'
                  name='arrivalTime'
                  value={flightForm.arrivalTime}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                Class
                <select
                  name='travelClass'
                  value={flightForm.travelClass}
                  onChange={flightInputChangeHandler}
                  required
                >
                  <option value='Economy'>Economy</option>
                  <option value='Business'>Business</option>
                  <option value='First'>First</option>
                </select>
              </label>

              <label>
                Price
                <input
                  type='number'
                  name='price'
                  min='0'
                  step='0.01'
                  value={flightForm.price}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                Seats in stock
                <input
                  type='number'
                  name='countInStock'
                  min='0'
                  value={flightForm.countInStock}
                  onChange={flightInputChangeHandler}
                  required
                />
              </label>

              <label>
                Image path
                <input
                  type='text'
                  name='image'
                  value={flightForm.image}
                  onChange={flightInputChangeHandler}
                />
              </label>
            </div>

            <label className='admin-form-wide'>
              Description
              <textarea
                name='description'
                value={flightForm.description}
                onChange={flightInputChangeHandler}
                rows='3'
              />
            </label>

            <button
              className='admin-create-flight-btn'
              type='submit'
              disabled={isCreatingFlight}
            >
              <FaPlus />
              {isCreatingFlight ? 'Adding Flight...' : 'Add Flight'}
            </button>
          </form>
        </div>

        <div className='admin-bookings-panel'>
          <div className='admin-panel-top'>
            <div>
              <h2>All Bookings</h2>
              <p>Edit booking status and see which customer bought each ticket.</p>
            </div>
          </div>

          {isLoading ? (
            <div className='admin-empty'>
              <h3>Loading bookings...</h3>
            </div>
          ) : error ? (
            <div className='admin-empty'>
              <h3>Bookings could not be loaded</h3>
            </div>
          ) : bookings.length === 0 ? (
            <div className='admin-empty'>
              <h3>No bookings found</h3>
              <p>New customer bookings will appear here after checkout.</p>
            </div>
          ) : (
            <div className='admin-booking-list'>
              {bookings.map((booking) => (
                <div className='admin-booking-card' key={booking._id}>
                  <div className='admin-booking-main'>
                    <div>
                      <span className='admin-booking-id'>
                        Booking #{booking._id}
                      </span>
                      <h3>
                        {booking.flight?.from} to {booking.flight?.to}
                      </h3>
                      <p>
                        {booking.user?.name || booking.passengerName} -{' '}
                        {booking.user?.email || booking.passengerEmail}
                      </p>
                    </div>

                    <span className={`admin-status ${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className='admin-booking-details'>
                    <span>
                      <FaCalendarAlt />
                      Date: {booking.flight?.departureDate?.slice(0, 10)}
                    </span>
                    <span>
                      <FaPlaneDeparture />
                      Airline: {booking.flight?.airline}
                    </span>
                    <span>Class: {booking.travelClass}</span>
                    <span>Seats: {booking.seats?.join(', ') || '-'}</span>
                    <span>
                      <FaClock />
                      Payment: {booking.paymentMethod || 'Unknown'}
                    </span>
                    <strong>Total: ${booking.totalPrice}</strong>
                  </div>

                  <div className='admin-booking-actions'>
                    <label>
                      Status
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          statusChangeHandler(booking._id, e.target.value)
                        }
                      >
                        {bookingStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </label>

                    <button
                      className='admin-delete-btn'
                      onClick={() => deleteHandler(booking._id)}
                    >
                      <FaTrash />
                      Delete Booking
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AdminPanelScreen
