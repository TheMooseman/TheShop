import React from 'react';
import {Grid} from '@material-ui/core';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1, 
        name: 'apple',
        imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg',
        description: 'running shoes',
        price: 5
    },
    {
        id: 2, 
        name: 'shoes',
        imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg',
        description: 'running shoes',
        price: 5
    },
    {
        id: 3, 
        name: 'purple',
        imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg',
        description: 'running shoes',
        price: 5
    }
]

const ProductLayout = ({onAddToCart}) => {

  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                    title={product.name}
                    desc={product.description}
                    image={product.imageUrl}
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