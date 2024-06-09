import axios from 'axios';
import BrandsAPI from './brands.api';
import ProductsAPI from './products.api';
const BASE_URL = 'https://api.ballang.yoojinyoung.com/';

class API {
    #base_url = BASE_URL;
    #client;
    products;
    brands;

    constructor() {
        this.#client = axios.create({ baseURL: this.#base_url });

        // 하나의 axios를 공유
        this.products = new ProductsAPI(this.#client);
        this.brands = new BrandsAPI(this.#client);
    }
}

const api = new API();
export default api;
