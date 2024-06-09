import { BASE_URL } from './api';
export async function getProduct(productId) {
    const endpoint = `${BASE_URL}/products/${productId}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
}
export async function getProducts() {
    const endpoint = `${BASE_URL}/products`;
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
}
