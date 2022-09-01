import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import AnimatedRoutes from './components/AnimatedRoutes';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const cartCount = useSelector((state) => state.cartNum.value);
  const [products, setProducts] = useState([]);
  const productCollectionRef = collection(db, 'products');
  useEffect(() => {

    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({...doc.data()})));
      console.log(products);
    }

    getProducts();
  }, [])

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
