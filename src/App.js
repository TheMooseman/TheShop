import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import AnimatedRoutes from './components/AnimatedRoutes';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';

function App() {
  const cartCount = useSelector((state) => state.cartNum.value);
  
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Link to={Home} />
          <Link to={Cart} />
          <AnimatedRoutes/>
        </Router>
    </div>
  );
}

export default App;
