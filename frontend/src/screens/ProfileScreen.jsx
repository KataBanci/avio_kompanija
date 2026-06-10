import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  FaCalendarAlt,
  FaPlaneDeparture,
  FaSyncAlt,
  FaTicketAlt,
  FaUserEdit,
} from 'react-icons/fa'
import { logout } from '../slices/authSlice'
import EditProfile from '../components/EditProfile'
import { useGetMyBookingsQuery } from '../slices/BookingApiSlice'
import AdminPanelScreen from './AdminPanelScreen'

const ProfileScreen = () => {
  const [showEditProfile, setShowEditProfile] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)
  const {
    data: bookings = [],
    isLoading,
    error,
    refetch,
  } = useGetMyBookingsQuery(undefined, { skip: !userInfo })

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin')
    }
  }, [userInfo, navigate])

  const signOutHandler = () => {
    dispatch(logout())
    navigate('/signin')
  }

  const userInitials =
    userInfo?.name
      ?.split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'AV'

  const activeBookings = bookings.filter(
    (booking) => booking.status !== 'cancelled'
  ).length

  return (
    <section className='profile-page'>
      <div
        className={
          userInfo?.isAdmin
            ? 'profile-container admin-profile-container'
            : 'profile-container'
        }
      >
        <div className='profile-header'>
          <div>
            <h1>{userInfo?.isAdmin ? 'Administrator Dashboard' : 'My Account'}</h1>
            <p>
              {userInfo?.isAdmin
                ? 'Manage flights, bookings, and your profile'
                : 'Manage your bookings and profile'}
            </p>
          </div>

          <span className='profile-role-badge'>
            {userInfo?.isAdmin ? 'Administrator' : 'Passenger'}
          </span>
        </div>

        <div
          className={
            userInfo?.isAdmin
              ? 'profile-layout admin-profile-layout'
              : 'profile-layout'
          }
        >
          <div className='profile-card'>
            <div className='profile-user'>
              <div className='profile-avatar'>{userInitials}</div>

              <div>
                <h3>{userInfo?.name || 'John Doe'}</h3>
                <p>{userInfo?.email || 'john@example.com'}</p>
              </div>
            </div>

            <div className='profile-stats'>
              <div>
                <span>Total trips</span>
                <strong>{bookings.length}</strong>
              </div>

              <div>
                <span>Active</span>
                <strong>{activeBookings}</strong>
              </div>
            </div>

            <button
              className='edit-profile-btn'
              onClick={() => setShowEditProfile(true)}
            >
              <FaUserEdit />
              Edit Profile
            </button>

            <button className='signout-btn' onClick={signOutHandler}>
              Sign Out
            </button>

            {showEditProfile && (
              <EditProfile
                userInfo={userInfo}
                onClose={() => setShowEditProfile(false)}
              />
            )}
          </div>

          {userInfo?.isAdmin ? (
            <div className='bookings-section admin-profile-section'>
              <AdminPanelScreen embedded />
            </div>
          ) : (
          <div className='bookings-section'>
            <div className='bookings-section-top'>
              <div>
                <span className='section-kicker'>Trips</span>
                <h2>My Bookings</h2>
              </div>

              <button className='refresh-bookings-btn' onClick={refetch}>
                <FaSyncAlt />
                Refresh
              </button>
            </div>

            {isLoading ? (
              <div className='profile-empty-state'>
                <FaTicketAlt />
                <h3>Loading bookings...</h3>
              </div>
            ) : error ? (
              <div className='profile-empty-state'>
                <FaTicketAlt />
                <h3>Bookings could not be loaded.</h3>
                <p>Please refresh the page or try again later.</p>
              </div>
            ) : bookings.length === 0 ? (
              <div className='profile-empty-state'>
                <FaPlaneDeparture />
                <h3>No bookings yet</h3>
                <p>Your next flight reservation will appear here.</p>
                <button onClick={() => navigate('/flights')}>Find Flights</button>
              </div>
            ) : (
              bookings.map((booking) => (
                <div className='booking-card' key={booking._id}>
                  <div className='booking-top'>
                    <span>Booking #{booking._id}</span>

                    <span className={`confirmed-badge ${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>

                  <h3>
                    {booking.flight?.from} to {booking.flight?.to}
                  </h3>

                  <div className='booking-info'>
                    <span>
                      <FaCalendarAlt />
                      Date: {booking.flight?.departureDate?.slice(0, 10)}
                    </span>
                    <span>
                      <FaTicketAlt />
                      {booking.numberOfTickets} passenger(s)
                    </span>
                    <strong>${booking.totalPrice}</strong>
                  </div>

                  <div className='booking-actions'>
                    <button onClick={() => navigate(`/booking/${booking._id}`)}>
                      Flight Details
                    </button>

                    <button className='delete-btn' onClick={refetch}>
                      Refresh status
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProfileScreen
