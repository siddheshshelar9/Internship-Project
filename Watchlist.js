import { useState, useEffect } from "react";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const addToWatchlist = (stock) => {
    const updatedWatchlist = [...watchlist, stock];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchlist = (stockToRemove) => {
    const updatedWatchlist = watchlist.filter(stock => stock.id !== stockToRemove.id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map(stock => (
          <li key={stock.id}>
            {stock.name} - ${stock.price}
            <button onClick={() => removeFromWatchlist(stock)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Stock List</h2>
      <ul>
        {["AAPL", "GOOGL", "AMZN"].map(stock => (
          <li key={stock}>
            {stock}
            <button onClick={() => addToWatchlist({ id: stock, name: stock, price: Math.random() * 1000 })}>Add to Watchlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
