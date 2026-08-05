import express from 'express'
import { createReservation } from '../controller/reserveController.js';

const reserveRouter = express.Router();

reserveRouter.post("/create", createReservation)

export default reserveRouter