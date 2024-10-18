import mongoose from  "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://emmanuelaganmwonyi581:emmanuel47@nodejs.waieq.mongodb.net/?retryWrites=true&w=majority&appName=Nodejs"
    );
    console.log("mongodb connected")
};