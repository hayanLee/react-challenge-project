import { BASE_URL, client } from './api';

// axios 사용방법
// 1. axios.get(), axios.post() 처럼 바로 사용방법
// 2. axios.create()로 커스텀 인스턴스를 만들어 사용

export async function getBrands() {
    const endpoint = `/brands`;
    const res = await client.get(endpoint);
    const data = res.data;

    return data;
}
export async function getBrand(brandId) {
    const endpoint = `${BASE_URL}/brands/${brandId}`;
    const res = await client.get(endpoint);
    const data = res.data;

    return data;
}
