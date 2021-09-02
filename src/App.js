import './App.css';
import Body from './Body/Main/Main';
import Navbar from './Header/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Body></Body>

      <div className="footer-container">
        {/* footer goes here */}
        <a className="footer-link">footer link 1</a>
        <a className="footer-link">footer link 2</a>
        <a className="footer-link">footer link 3</a>
      </div>
    </div>
  );
}

export default App;
