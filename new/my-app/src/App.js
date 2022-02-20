// ReactJs Default Imports
import logo from './logo.svg';
import centaurusLogo from './centaurus-logo.svg';
import './App.css';
// My imports
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={centaurusLogo} className="my-logo" />
        <div>
          Here
        </div>
      </header>
      <div className="App-body">
        Test React Body
      </div>
      <footer className="App-footer">
        Test React Footer
      </footer>
    </div>
  );
}

export default App;
