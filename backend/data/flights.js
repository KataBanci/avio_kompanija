const cities = [
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

const cityImages = {
  Paris: '/images/destinations/paris.avif',
  Rome: '/images/destinations/rome.avif',
  London: '/images/destinations/london.avif',
  Barcelona: '/images/destinations/barcelona.avif',
  Dubai: '/images/destinations/dubai.avif',
  Milan: '/images/destinations/milan.avif',
  'New York': '/images/destinations/newyork.avif',
  Budapest: '/images/destinations/budapest.jpg',
  Tokyo: '/images/destinations/tokyo.avif',
  Amsterdam: '/images/destinations/amsterdam.avif',
  Singapore: '/images/destinations/singapore.avif',
  Istanbul: '/images/destinations/istanbul.avif',
  Sydney: '/images/destinations/sydney.avif',
  Prague: '/images/destinations/prague.avif',
  Vienna: '/images/destinations/vienna.avif',
  Athens: '/images/destinations/athens.avif',
  Lisbon: '/images/destinations/lisbon.avif',
  Berlin: '/images/destinations/berlin.avif',
  Bangkok: '/images/destinations/bangkok.avif',
  Venice: '/images/destinations/venice.avif',
  'Hong Kong': '/images/destinations/hongkong.avif',
  Stockholm: '/images/destinations/stockholm.avif',
  Copenhagen: '/images/destinations/copenhagen.avif',
  Dublin: '/images/destinations/dublin.avif',
  Edinburgh: '/images/destinations/edinburgh.avif',
  Reykjavik: '/images/destinations/reykjavik.avif',
  Oslo: '/images/destinations/oslo.avif',
  Helsinki: '/images/destinations/helsinki.avif',
  Brussels: '/images/destinations/brussels.avif',
  Zurich: '/images/destinations/zurich.avif',
  Madrid: '/images/destinations/madrid.avif',
  'San Francisco': '/images/destinations/sanfrancisco.avif',
}

const departureTimes = [
  '06:30',
  '07:45',
  '08:20',
  '09:15',
  '10:00',
  '11:25',
  '12:40',
  '14:10',
  '16:30',
  '19:05',
]

const flightsPerRoute = 4

const addMinutes = (time, minutesToAdd) => {
  const [hours, minutes] = time.split(':').map(Number)
  const totalMinutes = hours * 60 + minutes + minutesToAdd
  const normalizedMinutes = totalMinutes % (24 * 60)
  const nextHours = Math.floor(normalizedMinutes / 60)
  const nextMinutes = normalizedMinutes % 60

  return `${String(nextHours).padStart(2, '0')}:${String(nextMinutes).padStart(
    2,
    '0'
  )}`
}

const getDepartureDate = (index) => {
  const date = new Date('2026-07-01T00:00:00.000Z')
  date.setUTCDate(date.getUTCDate() + (index % 60))
  return date.toISOString().slice(0, 10)
}

const getReturnDate = (departureDate) => {
  const date = new Date(`${departureDate}T00:00:00.000Z`)
  date.setUTCDate(date.getUTCDate() + 7)
  return date.toISOString().slice(0, 10)
}

const flights = cities.flatMap((fromCity, fromIndex) =>
  cities
    .filter((toCity) => toCity !== fromCity)
    .flatMap((toCity, toIndex) =>
      Array.from({ length: flightsPerRoute }, (_, flightIndex) => {
        const routeIndex = fromIndex * (cities.length - 1) + toIndex
        const sequence = routeIndex * flightsPerRoute + flightIndex + 1
        const departureTime =
          departureTimes[
            (fromIndex + toIndex + flightIndex * 2) % departureTimes.length
          ]
        const flightDuration =
          80 + ((fromIndex + toIndex + flightIndex) % 9) * 35
        const departureDate = getDepartureDate(sequence + flightIndex * 3)
        const basePrice =
          95 + ((fromIndex * 17 + toIndex * 23 + flightIndex * 41) % 700)
        const isLongHaul = flightDuration >= 255

        return {
          airline: 'Sky Serbia',
          flightNumber: `SS${String(sequence).padStart(4, '0')}`,
          from: fromCity,
          to: toCity,
          departureDate,
          returnDate: getReturnDate(departureDate),
          departureTime,
          arrivalTime: addMinutes(departureTime, flightDuration),
          travelClass: isLongHaul ? 'Business' : 'Economy',
          price: basePrice,
          countInStock: 12 + ((fromIndex + toIndex + flightIndex) % 39),
          image: cityImages[toCity] || '/images/plane.jpg',
          description: `Flight from ${fromCity} to ${toCity}.`,
        }
      })
    )
)

export default flights
