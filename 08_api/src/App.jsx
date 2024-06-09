import { useEffect } from 'react';
import './App.css';
import { getBrand, getBrands } from './api/api.brand';
import { getProduct, getProducts } from './api/api.product';

function App() {
    useEffect(() => {
        // (async () => await fetch(GET_PRODUCT_ENDPOINT))();
        // fetch(GET_PRODUCT_ENDPOINT).then((response) => console.log(response));
        const productId = 9587059;
        const brandId = 115;
        getProducts();
        getProduct(productId);
        getBrands();
        getBrand(brandId);
    }, []);

    return <>hello world</>;
}

export default App;
