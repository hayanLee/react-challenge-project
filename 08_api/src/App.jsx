import { useEffect } from 'react';
import './App.css';
import { getBrands, getProduct } from './api/api';

function App() {
    useEffect(() => {
        // (async () => await fetch(GET_PRODUCT_ENDPOINT))();
        // fetch(GET_PRODUCT_ENDPOINT).then((response) => console.log(response));
        const productId = 9587059;
        getProduct(productId);
        getBrands();
    }, []);

    return <>hello world</>;
}

export default App;
