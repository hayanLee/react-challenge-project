const BASE_URL = 'https://api.ballang.yoojinyoung.com';

export async function getProduct(productId) {
    const endpoint = `${BASE_URL}/products/${productId}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
}

export async function getBrands() {
    const endpoint = `${BASE_URL}/brands`;
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
}
