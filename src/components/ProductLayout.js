import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { db } from '../firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const ProductLayout = ({onAddToCart}) => {

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
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                    title={product.title}
                    desc={product.description}
                    image={product.image}
                    price={product.price}
                    onAddToCart={onAddToCart}
                    />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default ProductLayout