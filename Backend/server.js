import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import reserveRouter from './routes/reserveRoutes.js';
import subscribeRouter from './routes/subscriptionRoutes.js';
import contactRouter from './routes/contactRoutes.js';

const port = process.env.PORT || 4000;
connectDb();
let app = express();

app.use(express.json());
app.use(cors({
    origin: "https://golden-plate-restaurant.netlify.app",
    credentials: true
}));


app.get("/", (req, res) => {
    res.send("API Working")
})

app.use("/api/reservation", reserveRouter)
app.use("/api/create", subscribeRouter)
app.use("/api/gp", contactRouter)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})


