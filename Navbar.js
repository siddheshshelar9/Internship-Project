import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/candlestick">Candlestick Patterns</Link>
        </li>
        <li>
          <Link to="/indicators">Custom Indicators</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
