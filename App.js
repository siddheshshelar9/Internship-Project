import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import CandlestickPattern from "./components/CandlestickPattern";
import CustomIndicators from "./components/CustomIndicators";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h2>Welcome to Stock Tracking App</h2>
        </Route>
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/candlestick" component={CandlestickPattern} />
        <Route path="/indicators" component={CustomIndicators} />
      </Switch>
    </Router>
  );
}

export default App;
