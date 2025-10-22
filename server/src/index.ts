// Description: Entry point for the MLF Backend API server using Express and TypeScript
import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'; // It loads environment variables from a .env file

// Inializatione Express app
const app = express();
// Use the port defined in the .env (or 4000 as fallback)
const PORT = process.env.PORT || 4000; 

// --- Middleware Configuration---

// Enable CORS for all routes
app.use(cors()); 

// Middleware to analyze the JSON bodies (necessary for POST requests)
app.use(express.json());

// --- Endpoint Definitions ---

// Define an endpoint at the root URL
app.get('/', (req: Request, res: Response) => {
    res.json({ 
        message: 'MLF Backend API is running successfully!', 
        status: 'OK'
    });
});

// --- Server Startup ---

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser to test the API.`);
});