import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { addToCart, savePaymentMethod } from '../slices/BookingCartSlice'
import { useCreateBookingMutation } from '../slices/BookingApiSlice'

const Payment = ({
  selectedFlight,
  travelClass,
  selectedSeats,
  departure,
  from,
  to,
  airportCodes,
  onBack,
}) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)

  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const [isPaid, setIsPaid] = useState(false)
  const [bookingError, setBookingError] = useState('')
  const [createBooking, { isLoading }] = useCreateBookingMutation()

  const price =
    travelClass === 'economy'
      ? selectedFlight.economyPrice
      : selectedFlight.businessPrice

  const ticketsTotal = price * selectedSeats.length
  const service = ticketsTotal > 500 ? 0 : 20
  const tax = ticketsTotal * 0.15
  const finalTotal = ticketsTotal + service + tax

  const changePaymentMethod = (method) => {
    setPaymentMethod(method)
    dispatch(savePaymentMethod(method))
  }

  const saveBookingHandler = async () => {
    const cartItem = {
      _id: `${selectedFlight.airline}-${from}-${to}-${departure}-${travelClass}`,
      name: `${from} to ${to}`,
      price,
      qty: selectedSeats.length,
      airline: selectedFlight.airline,
      travelClass,
      seats: selectedSeats,
      departureDate: departure,
      from,
      to,
    }

    dispatch(addToCart(cartItem))

    await createBooking({
      flight: selectedFlight._id,
      passengerName: userInfo?.name,
      passengerEmail: userInfo?.email,
      passengerPhone: 'N/A',
      numberOfTickets: selectedSeats.length,
      seats: selectedSeats,
      travelClass: travelClass === 'economy' ? 'Economy' : 'Business',
      totalPrice: Number(finalTotal.toFixed(2)),
      paymentMethod,
    }).unwrap()

    setIsPaid(true)
  }

  if (isPaid) {
    return (
      <section className='confirmation-page'>
        <div className='confirmation-box'>
          <div className='success-icon'>✓</div>
          <h1>Booking Confirmed!</h1>
          <p>Your flight has been successfully booked.</p>

          <div className='confirmation-details'>
            <h2>Booking Details</h2>

            <div>
              <span>Route</span>
              <strong>{airportCodes[from]} → {airportCodes[to]}</strong>
            </div>

            <div>
              <span>Date</span>
              <strong>{departure}</strong>
            </div>

            <div>
              <span>Class</span>
              <strong>{travelClass === 'economy' ? 'Economy' : 'Business'}</strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>{selectedSeats.join(', ')}</strong>
            </div>

            <div>
              <span>Passengers</span>
              <strong>{selectedSeats.length}</strong>
            </div>

            <div>
              <span>Payment method</span>
              <strong>{paymentMethod}</strong>
            </div>

            <hr />

            <div className='confirmation-total'>
              <span>Total</span>
              <strong>${finalTotal.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='payment-page'>
      <div className='payment-container'>
        <button className='new-search-btn' onClick={onBack}>
          ‹ Back to seat selection
        </button>

        <h1>Payment</h1>
        <p>Complete your booking</p>

        <div className='payment-content'>
          <div className='payment-left'>
            <div className='payment-methods'>
              <button
                className={paymentMethod === 'PayPal' ? 'payment-active' : ''}
                onClick={() => changePaymentMethod('PayPal')}
              >
                <strong>PayPal</strong>
                <span>PayPal</span>
              </button>

              <button
                className={paymentMethod === 'Credit Card' ? 'payment-active' : ''}
                onClick={() => changePaymentMethod('Credit Card')}
              >
                <strong>▭</strong>
                <span>Credit Card</span>
              </button>
            </div>

            {paymentMethod === 'PayPal' ? (
              <div className='payment-box'>
                <p>Click the PayPal button to complete payment.</p>

                {bookingError && <p>{bookingError}</p>}

                <PayPalScriptProvider
                  options={{
                    clientId: 'AXQCcE_jUK677wXCRSk2UqWNJGwUDw_gIiQsux4FP28-xYDHWP9xoSvQMai4MnKDoYF0g5DnX2M7Atez',
                    currency: 'USD',
                  }}
                >
                  <PayPalButtons
                    style={{ layout: 'vertical' }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: finalTotal.toFixed(2),
                            },
                          },
                        ],
                      })
                    }}
                    onApprove={async (data, actions) => {
                      try {
                        await actions.order.capture()
                        setBookingError('')
                        await saveBookingHandler()
                      } catch (error) {
                        setBookingError('PayPal payment failed.')
                      }
                    }}
                    onError={() => {
                      setBookingError('PayPal error occurred.')
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            ) : (
              <div className='payment-box'>
                <label>Card Number</label>
                <input type='text' placeholder='1234 5678 9012 3456' />

                <div className='payment-row'>
                  <div>
                    <label>Expiry Date</label>
                    <input type='text' placeholder='MM/YY' />
                  </div>

                  <div>
                    <label>CVV</label>
                    <input type='text' placeholder='123' />
                  </div>
                </div>

                <label>Cardholder Name</label>
                <input type='text' placeholder='John Doe' />

                {bookingError && <p>{bookingError}</p>}

                <button
                  className='pay-btn'
                  onClick={saveBookingHandler}
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving booking...' : `Pay $${finalTotal.toFixed(2)}`}
                </button>
              </div>
            )}
          </div>

          <div className='booking-summary'>
            <h2>Booking Summary</h2>

            <div>
              <span>Route</span>
              <strong>{airportCodes[from]} → {airportCodes[to]}</strong>
            </div>

            <div>
              <span>Date</span>
              <strong>{departure}</strong>
            </div>

            <div>
              <span>Class</span>
              <strong>{travelClass === 'economy' ? 'Economy' : 'Business'}</strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>{selectedSeats.join(', ')}</strong>
            </div>

            <div>
              <span>Passengers</span>
              <strong>{selectedSeats.length}</strong>
            </div>

            <hr />

            <div>
              <span>Price per ticket</span>
              <strong>${price}</strong>
            </div>

            <div>
              <span>Tickets price</span>
              <strong>${ticketsTotal.toFixed(2)}</strong>
            </div>

            <div>
              <span>Service fee</span>
              <strong>${service.toFixed(2)}</strong>
            </div>

            <div>
              <span>Tax</span>
              <strong>${tax.toFixed(2)}</strong>
            </div>

            <div className='total-row'>
              <span>Total</span>
              <strong>${finalTotal.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment