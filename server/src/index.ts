// Description: Entry point for the MLF Backend API server using Express and TypeScript
import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios'; 
import 'dotenv/config'; // Loads environment variables from .env

// Initialization Express app
const app = express();
// Use the port defined in the .env (or 4000 as fallback)
const PORT = process.env.PORT || 4000; 

// --- Middleware Configuration ---

// Enable CORS for all routes (allows Frontend to talk to Backend)
app.use(cors()); 

// Middleware to analyze JSON bodies
app.use(express.json());

// --- Endpoint Definitions ---

// 1. Root Endpoint: Basic server check
app.get('/', (req: Request, res: Response) => {
    res.json({ 
        message: 'MLF Backend API is running successfully!', 
        status: 'OK'
    });
});

// 2. Financial Data Endpoint: The core of Phase 2 📈
// This route takes a ticker (e.g., AAPL, IBM) and fetches real-time data
app.get('/api/stock/:ticker', async (req: Request, res: Response) => {
    const { ticker } = req.params;
    const apiKey = process.env.FINANCIAL_API_KEY;

    try {
        console.log(`Fetching data for: ${ticker}...`);
        
        const response = await axios.get(`https://www.alphavantage.co/query`, {
            params: {
                function: 'GLOBAL_QUOTE',
                symbol: ticker,
                apikey: apiKey
            }
        });

        const data = response.data['Global Quote'];

        // Check if the API returned valid data
        if (!data || Object.keys(data).length === 0) {
            return res.status(404).json({ 
                message: "Stock not found or API limit reached (5 requests per minute for free tier)" 
            });
        }

        // Clean response for the Frontend
        res.json({
            symbol: data['01. symbol'],
            price: data['05. price'],
            change: data['09. change'],
            percentChange: data['10. change percent'],
            lastUpdated: new Date()
        });

    } catch (error: any) {
        console.error("Axios Error:", error.message);
        res.status(500).json({ message: "Error fetching data from Alpha Vantage" });
    }
});

// --- Server Startup ---

app.listen(PORT, () => {
    console.log(`🚀 MLF Server is alive on http://localhost:${PORT}`);
    console.log(`📈 Test the Finance API: http://localhost:${PORT}/api/stock/IBM`);
});