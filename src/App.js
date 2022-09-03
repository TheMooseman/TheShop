import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import AnimatedRoutes from './components/AnimatedRoutes';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';

function App() {
  const cartCount = useSelector((state) => state.cartNum.value);
  
  return (
    <div className='App-bg'>
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
          <Route path='/' element={<Navigate to={'/pages/Home'} />} />
          </Routes>
          <Link to={Home} />
          <Link to={Cart} />
          <AnimatedRoutes/>
        </Router>
    </div>
    </div>
  );
}

export default App;
