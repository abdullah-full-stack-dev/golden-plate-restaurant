import express from 'express'
import { contactUs } from '../controller/contactController.js';

const contactRouter = express.Router();

contactRouter.post("/contact", contactUs)

export default contactRouter;