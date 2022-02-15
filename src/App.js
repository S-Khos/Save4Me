/* eslint-disable react/jsx-no-duplicate-props */
import './App.css';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from './pages/index.js';
import Radar from './pages/radar.js';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/radar" element={<Radar />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
