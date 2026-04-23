import { useState } from "react"; // Importing the useState hook from React to manage state in our component
import axios from "axios"; // Importing axios for making HTTP requests to our backend API
import "./App.css"; // Importing the CSS file for styling our component

// This is the Interface for the Stock Data we expect to receive from the backend API.
interface StockData {
  symbol: string; 
  price: string; // API returns price as a string, we can convert it to a number if needed
  change: string; 
  changePercent: string; 
}

// Memory of the App component, which is the main component of our React application.
function App() {
  const [ticker, setTicker] = useState<string>(''); // State to hold the user input for the stock ticker symbol
  const [stockData, setStockData] = useState<StockData | null>(null); // State to hold the fetched stock data
  const [error, setError] = useState<string>(''); // State to hold any error messages that may occur during the API call

  // fetchStock Function
  const fetchStock = async () => {
    // If the ticker input is empty, we set an error message and return early
    if (!ticker) {
      setError('Please enter a stock ticker symbol.');
      return;
    }

    // Il blocco try/catch deve stare dentro fetchStock per usare 'await'
    try {
      setError(''); // Clear any previous error messages
      const response = await axios.get(`http://localhost:4000/api/stock/${ticker}`); // Make a GET request to our backend API with the ticker symbol

      setStockData(response.data); // Update the stockData state with the response from the API
    } catch { // If there's an error (e.g., stock not found, API limit reached), we catch it here
      setError('Stock not found or API limit reached. Try again in 1 minute.'); // Set an error message if the API call fails
      setStockData(null); // Clear any previous stock data
    }
  }; // <--- Qui chiudiamo correttamente la funzione fetchStock

  // The JSX returned by our component, which defines the structure of our UI
  return (
    <div className="App">
      <h1>MLF - Monitoring Live Finance</h1>
      
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Enter Ticker (e.g. AAPL)" 
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())} 
        />
        <button onClick={fetchStock}>Search</button>
      </div>

      {/* Se c'è un errore, mostralo */}
      {error && <p className="error-msg">{error}</p>}

      {/* Se stockData è pieno, mostra la Card */}
      {stockData && (
        <div className="stock-card">
          <h2>{stockData.symbol}</h2>
          <p className="price">Price: ${stockData.price}</p>
          <p className={stockData.change.startsWith('-') ? 'negative' : 'positive'}>
            Change: {stockData.change} ({stockData.changePercent})
          </p>
        </div>
      )}
    </div>
  );
} // <--- Questa chiude la funzione App()

export default App;