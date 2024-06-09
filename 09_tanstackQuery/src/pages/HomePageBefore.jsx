import { useEffect, useState } from 'react';
import api from '../api/api';
import Page from '../components/Page';

function HomePageBefore() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSucess] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        async function init() {
            try {
                const products = await api.products.getProducts();
                setProducts(products);
                setIsSucess(true);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        init();
    }, []);

    if (isLoading) return <Page>loading...</Page>;
    if (isError) return <Page>error...</Page>;

    return (
        <Page>
            <ol>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ol>
        </Page>
    );
}

export default HomePageBefore;
