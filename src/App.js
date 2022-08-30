import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import AnimatedRoutes from './components/AnimatedRoutes';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="App">
      <Router>
          <Navbar totalItems={localStorage.length}/>
          <Link to={Home} />
          <Link to={Cart} />
          <AnimatedRoutes/>
        </Router>
    </div>
  );
}

export default App;
