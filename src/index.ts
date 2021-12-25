import express from "express";
import * as dotenv from "dotenv"
import mongoose from "mongoose";
import cors from 'cors';
import helmet from 'helmet';
import messageRoute from "./routes/MessageRoute";
import errorHandler from "./middleware/errorHandler";
import userReviewRoutes from "./routes/UserReviewRoute";
import serviceSupplierRoute from "./routes/ServiceSupplierRoute";
import serviceCategoryRoute from "./routes/ServiceCategoryRoute";

const app = express();

dotenv.config();

const dbURL: string = process.env.MONGO_DB || '';

const initDB = async () => {
    let client;
    try {
        client = await mongoose.connect(dbURL);
    } catch (error) {
        console.log("Can't connect to MongoDB.");
        console.log(error);
    }
    if (client) {
        console.log("Connected")
    }
}
initDB().catch(error => console.log(error));

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// -standard middleware-
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

app.use('/messages', messageRoute);
app.use('/user-reviews', userReviewRoutes);
app.use('/service-suppliers', serviceSupplierRoute);
app.use('/service-categories', serviceCategoryRoute);
app.get('/test', (req, res) => {
    res.send('Homepedia backend is running');
});

//  error handler
app.use(errorHandler());

// Catch unhandled rejections
process.on('unhandledRejection', (err) => {
    process.exit(1);
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
    process.exit(1);
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on PORT ${port}`));

