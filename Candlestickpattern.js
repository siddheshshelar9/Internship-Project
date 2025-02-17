import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function CandlestickPattern() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetchRandomStockData();
  }, []);

  const fetchRandomStockData = () => {
    const data = Array.from({ length: 50 }, (_, index) => ({
      date: `Day ${index + 1}`,
      open: Math.random() * 100 + 100,
      close: Math.random() * 100 + 100,
      high: Math.random() * 100 + 100,
      low: Math.random() * 100 + 100,
    }));
    setStockData(data);
  };

  const chartData = {
    labels: stockData.map((d) => d.date),
    datasets: [
      {
        label: "Stock Prices",
        data: stockData.map((d) => d.close),
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Candlestick Pattern Recognition</h2>
      <Line data={chartData} />
    </div>
  );
}

export default CandlestickPattern;
