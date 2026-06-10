import asyncHandler from 'express-async-handler';
import Flight from '../models/flightModel.js';

const getFlights = asyncHandler(async (req, res) => {
  const flights = await Flight.find({});
  res.json(flights);
});

const getFlightById = asyncHandler(async (req, res) => {
  const flight = await Flight.findById(req.params.id);

  if (flight) {
    res.json(flight);
  } else {
    res.status(404);
    throw new Error('Let nije pronađen');
  }
});

const createFlight = asyncHandler(async (req, res) => {
  const {
    airline,
    flightNumber,
    from,
    to,
    departureDate,
    returnDate,
    departureTime,
    arrivalTime,
    travelClass,
    price,
    countInStock,
    image,
    description,
  } = req.body;

  const flight = new Flight({
    airline: airline || 'Avio Kompanija',
    flightNumber,
    from,
    to,
    departureDate,
    ...(returnDate ? { returnDate } : {}),
    departureTime,
    arrivalTime,
    travelClass: travelClass || 'Economy',
    price,
    countInStock,
    image: image || '/images/plane.jpg',
    description,
  });

  const createdFlight = await flight.save();
  res.status(201).json(createdFlight);
});

const updateFlight = asyncHandler(async (req, res) => {
  const {
    airline,
    flightNumber,
    from,
    to,
    departureDate,
    returnDate,
    departureTime,
    arrivalTime,
    travelClass,
    price,
    countInStock,
    image,
    description,
  } = req.body;

  const flight = await Flight.findById(req.params.id);

  if (flight) {
    flight.airline = airline;
    flight.flightNumber = flightNumber;
    flight.from = from;
    flight.to = to;
    flight.departureDate = departureDate;
    flight.returnDate = returnDate;
    flight.departureTime = departureTime;
    flight.arrivalTime = arrivalTime;
    flight.travelClass = travelClass;
    flight.price = price;
    flight.countInStock = countInStock;
    flight.image = image;
    flight.description = description;

    const updatedFlight = await flight.save();
    res.json(updatedFlight);
  } else {
    res.status(404);
    throw new Error('Let nije pronađen');
  }
});

const deleteFlight = asyncHandler(async (req, res) => {
  const flight = await Flight.findById(req.params.id);

  if (flight) {
    await Flight.deleteOne({ _id: flight._id });
    res.json({ message: 'Let je obrisan' });
  } else {
    res.status(404);
    throw new Error('Let nije pronađen');
  }
});

export {
  getFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
};
