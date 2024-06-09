import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import Page from '../components/Page';

function ProductDetilaPage() {
    const params = useParams();
    const productId = params.productId;

    const {
        data: product,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['product', { id: productId }], // { id: productId } = metadata
        queryFn: () => api.products.getProduct(productId),
        // refetchOnWindowFocus: true, // 탭 이동 시 마다 refetch
        // refetchInterval: 1000, // 1초마다 refetch
    });

    if (isLoading) return <Page>loading...</Page>;
    if (isError) return <Page>error...</Page>;
    return <Page>{product.name}</Page>;
}

export default ProductDetilaPage;
