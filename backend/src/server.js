import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => res.send("Hello From server"))
const startServer  = async () => {
    try {
        await connectDB()

        app.listen(ENV.PORT, () => console.log("Server is Up and Running on Port:✅", ENV.PORT))
    } catch (error) {
        console.error("Failed to start server: ", error.message)
        process.exit(1);
    }
};

startServer();