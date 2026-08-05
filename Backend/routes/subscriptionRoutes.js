import express from 'express'
import { createSubscription } from '../controller/newsletterController.js';

const subscribeRouter = express.Router();

subscribeRouter.post("/subscribe", createSubscription)

export default subscribeRouter;