import { AxiosInstance } from 'axios';
import { GetCartData } from './cart.type';

class CartAPI {
    private axios: AxiosInstance;
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    async getCart() {
        const path = '/cart';
        const response = await this.axios.get<GetCartData>(path);
        const result = response.data;
        // result.result.items[0]
        return result;
    }
    async addItemToCart(productId: number) {
        const path = `/cart/products/${productId}`;
        const response = await this.axios.post(path);
        const result = response.data.result;
        return result;
    }
    async removeItemFromCart(productId: number) {
        const path = `/cart/products/${productId}`;
        const response = await this.axios.delete(path);
        const result = response.data.result;
        return result;
    }
    async clearItemInCart(productId: number) {
        const path = `/cart/products/${productId}/clear`;
        const response = await this.axios.delete(path);
        const result = response.data.result;
        return result;
    }
}

export default CartAPI;

// 제네릭은 매개변수, 반환하는 값에 넣을 수 있음
// function testFunction<T>() : T {

// }
