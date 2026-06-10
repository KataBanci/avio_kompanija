import express from 'express';

import {
  addBookingItems,
  getMyBookings,
  getBookingById,
  updateBookingToPaid,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} from '../controllers/bookingController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addBookingItems).get(protect, admin, getBookings);

router.route('/mybookings').get(protect, getMyBookings);

router
  .route('/:id')
  .get(protect, getBookingById)
  .delete(protect, admin, deleteBooking);

router.route('/:id/pay').put(protect, updateBookingToPaid);

router.route('/:id/status').put(protect, admin, updateBookingStatus);

export default router;
