import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ticker, setTicker] = useState('')
  const [stockData, setStockData] = useState<any>(null)
  const [error, setError] = useState('')

  const fetchStock = async () => {
    try {
      setError('')
      // Calling YOUR server on port 4000
      const response = await axios.get(`http://localhost:4000/api/stock/${ticker}`)
      setStockData(response.data)
    } catch (err) {
      setError('Stock not found or API limit reached')
      setStockData(null)
    }
  }

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

      {error && <p style={{color: 'red'}}>{error}</p>}

      {stockData && (
        <div className="stock-card">
          <h2>{stockData.symbol}</h2>
          <p>Price: ${stockData.price}</p>
          <p style={{ color: stockData.change.startsWith('-') ? 'red' : 'green' }}>
            Change: {stockData.change} ({stockData.changePercent})
          </p>
        </div>
      )}
    </div>
  )
}

export default App