import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ArtistList from "./components/ArtistList";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>

        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/primary-artists" element={<ArtistList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
