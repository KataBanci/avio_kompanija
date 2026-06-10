import { FLIGHTS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const flightsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFlights: builder.query({
      query: () => ({
        url: FLIGHTS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Flight'],
    }),

    getFlightDetails: builder.query({
      query: (flightId) => ({
        url: `${FLIGHTS_URL}/${flightId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createFlight: builder.mutation({
      query: (flight) => ({
        url: FLIGHTS_URL,
        method: 'POST',
        body: flight,
      }),
      invalidatesTags: ['Flight'],
    }),
  }),
})

export const {
  useGetFlightsQuery,
  useGetFlightDetailsQuery,
  useCreateFlightMutation,
} = flightsApiSlice
