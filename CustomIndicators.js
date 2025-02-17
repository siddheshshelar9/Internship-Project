import { useState, useEffect } from "react";

function CustomIndicators() {
  const [stockData, setStockData] = useState([]);
  const [indicatorData, setIndicatorData] = useState([]);

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = () => {
    const data = Array.from({ length: 50 }, (_, index) => ({
      date: `Day ${index + 1}`,
      price: Math.random() * 100 + 100,
    }));
    setStockData(data);
  };

  const calculateMovingAverage = () => {
    const period = 10;
    const movingAvg = stockData.map((_, index) => {
      if (index < period) return null;
      const avg = stockData.slice(index - period, index).reduce((acc, curr) => acc + curr.price, 0) / period;
      return avg;
    });
    setIndicatorData(movingAvg);
  };

  return (
    <div>
      <h2>Custom Indicators</h2>
      <button onClick={calculateMovingAverage}>Calculate Moving Average</button>
      <ul>
        {indicatorData.map((value, index) => (
          <li key={index}>{value !== null ? value.toFixed(2) : "N/A"}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomIndicators;
