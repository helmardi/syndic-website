import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Offers from "./pages/Offers";
import Start from "./pages/Start";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}