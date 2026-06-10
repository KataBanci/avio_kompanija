import asyncHandler from 'express-async-handler';
import Booking from '../models/bookingModel.js';
import Flight from '../models/flightModel.js';

const addBookingItems = asyncHandler(async (req, res) => {
  const {
    flight,
    passengerName,
    passengerEmail,
    passengerPhone,
    numberOfTickets,
    seats,
    travelClass,
    totalPrice,
    paymentMethod,
  } = req.body;

  const selectedFlight = await Flight.findById(flight);

  if (!selectedFlight) {
    res.status(404);
    throw new Error('Let nije pronađen');
  }

  const ticketsCount = numberOfTickets || seats?.length || 1;
  const bookingTotalPrice = totalPrice || selectedFlight.price * ticketsCount;

  const booking = new Booking({
    user: req.user._id,
    flight,
    passengerName: passengerName || req.user.name,
    passengerEmail: passengerEmail || req.user.email,
    passengerPhone: passengerPhone || 'N/A',
    numberOfTickets: ticketsCount,
    seats: seats || [],
    travelClass: travelClass || 'Economy',
    totalPrice: bookingTotalPrice,
    paymentMethod,
  });

  const createdBooking = await booking.save();

  res.status(201).json(createdBooking);
});

const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('flight');
  res.json(bookings);
});

const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id)
    .populate('user', 'name email')
    .populate('flight');

  if (booking) {
    res.json(booking);
  } else {
    res.status(404);
    throw new Error('Rezervacija nije pronađena');
  }
});

const updateBookingToPaid = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    booking.isPaid = true;
    booking.paidAt = Date.now();

    booking.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer?.email_address,
    };

    const updatedBooking = await booking.save();

    res.json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Rezervacija nije pronađena');
  }
});

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({})
    .populate('user', 'id name email')
    .populate('flight');

  res.json(bookings);
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    booking.status = req.body.status || booking.status;

    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Rezervacija nije pronađena');
  }
});

const deleteBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    await Booking.deleteOne({ _id: booking._id });
    res.json({ message: 'Rezervacija je obrisana' });
  } else {
    res.status(404);
    throw new Error('Rezervacija nije pronađena');
  }
});

export {
  addBookingItems,
  getMyBookings,
  getBookingById,
  updateBookingToPaid,
  getBookings,
  updateBookingStatus,
  deleteBooking,
};
