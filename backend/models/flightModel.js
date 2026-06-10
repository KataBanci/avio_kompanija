import mongoose from 'mongoose';

const flightSchema = mongoose.Schema(
  {
    airline: {
      type: String,
      required: true,
      default: 'Avio Kompanija',
    },

    flightNumber: {
      type: String,
      required: true,
    },

    from: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    returnDate: {
      type: Date,
    },

    departureTime: {
      type: String,
      required: true,
    },

    arrivalTime: {
      type: String,
      required: true,
    },

    travelClass: {
      type: String,
      required: true,
      enum: ['Economy', 'Business', 'First'],
      default: 'Economy',
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      default: '/images/plane.jpg',
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;