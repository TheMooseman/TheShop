import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <AnimatedRoutes/>
        </Router>
    </div>
  );
}

export default App;
