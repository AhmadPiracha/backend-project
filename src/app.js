import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
// Parse incoming requests with JSON payloads
app.use(express.json({ limit: "10kb"}));
// Enable CORS for all requests 
app.use(cors({
        origin:process.env.CORS_ORIGIN,
        credentials : true
    })); 
// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true,limit: "10kb"}));
// Serve static files
app.use(express.static("public"));
// Access and set cookies
app.use(cookieParser());


// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

export default app;