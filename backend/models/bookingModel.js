import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    flight: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Flight',
    },

    passengerName: {
      type: String,
      required: true,
    },

    passengerEmail: {
      type: String,
      required: true,
    },

    passengerPhone: {
      type: String,
      required: true,
    },

    numberOfTickets: {
      type: Number,
      required: true,
      default: 1,
    },

    seats: {
      type: [String],
      default: [],
    },

    travelClass: {
      type: String,
      required: true,
      enum: ['Economy', 'Business', 'First'],
      default: 'Economy',
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },

    paymentMethod: {
      type: String,
      required: true,
      default: 'PayPal',
    },

    status: {
      type: String,
      required: true,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'confirmed',
    },

    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },

    paidAt: {
      type: Date,
    },

    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
