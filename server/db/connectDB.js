import mongoose from "mongoose"


export const connectDB = async () => {

    try {
        const conn = await mongoose.connect('mongodb+srv://devanshkumar6298:q3GD91iVgopHFRSb@cluster0.ughtc0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}