import mongoose, { ConnectOptions } from 'mongoose';

interface connectedOptions extends ConnectOptions {
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean,
}

const options: connectedOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDB = async () => {

    // const connectionUrl: string = process.env.DB_URI as string;
    const connectionUrl: string = "mongodb+srv://shiva:123shiva@cluster0.8vzujux.mongodb.net/ecommerce?retryWrites=true&w=majority";

    console.log("connectionUrl", connectionUrl);
    mongoose.connect(connectionUrl, options)
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default connectDB;   