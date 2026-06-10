const BOOKINGS_KEY = 'bookings'

export const initialBookings = [
  {
    id: 'BK001',
    userName: 'John Doe',
    userEmail: 'john@gmail.com',
    route: 'New York (JFK) - London (LHR)',
    date: 'May 15, 2026',
    passengers: '2 passengers',
    price: '$1084',
    airline: 'British Airways BA 178',
    departure: '19:30',
    arrival: '07:15',
    duration: '6h 45m',
    classType: 'Economy',
    seats: '10E, 10F',
    paymentMethod: 'Credit Card',
    status: 'confirmed',
    createdAt: '2026-05-27',
  },
  {
    id: 'BK002',
    userName: 'Sarah Smith',
    userEmail: 'sarah@gmail.com',
    route: 'Paris (CDG) - Dubai (DXB)',
    date: 'Jun 20, 2026',
    passengers: '1 passenger',
    price: '$712',
    airline: 'Emirates EK 72',
    departure: '14:20',
    arrival: '23:10',
    duration: '6h 50m',
    classType: 'Business',
    seats: '4A',
    paymentMethod: 'PayPal',
    status: 'confirmed',
    createdAt: '2026-05-27',
  },
]

export const getBookings = () => {
  const savedBookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY))

  if (!savedBookings) {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(initialBookings))
    return initialBookings
  }

  return savedBookings
}

export const saveBookings = (bookings) => {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
}

export const addBooking = (booking) => {
  const bookings = getBookings()
  const updatedBookings = [...bookings, booking]

  saveBookings(updatedBookings)

  return updatedBookings
}

export const updateBooking = (id, updates) => {
  const bookings = getBookings()
  const updatedBookings = bookings.map((booking) =>
    booking.id === id ? { ...booking, ...updates } : booking
  )

  saveBookings(updatedBookings)

  return updatedBookings
}

export const deleteBooking = (id) => {
  const bookings = getBookings()
  const updatedBookings = bookings.filter((booking) => booking.id !== id)

  saveBookings(updatedBookings)

  return updatedBookings
}

export const getBookingById = (id) =>
  getBookings().find((booking) => booking.id === id)
