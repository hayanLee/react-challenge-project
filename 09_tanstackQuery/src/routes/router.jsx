import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import HomePage from '../pages/HomePage';
import ProductDetilaPage from '../pages/ProductDetilaPage';
import TodoPage from '../pages/TodoPage';
const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/products/:productId',
                element: <ProductDetilaPage />,
            },
            {
                path: '/todo',
                element: <TodoPage />,
            },
        ],
    },
]);

export default router;
