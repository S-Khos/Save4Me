/* eslint-disable react/jsx-no-duplicate-props */
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/index.js';
import Radar from './pages/radar.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Save4Me" element={<Home />} />
        <Route exact path="/radar" element={<Radar />}/>
      </Routes>
    </Router>
  );
}

export default App;
