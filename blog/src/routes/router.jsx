import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Homepage from '../pages/Homepage';
import PostDetailPage from '../pages/PostDetailPage';
import postDetailPageLoader from '../pages/PostDetailPage/PostDetailPage.loader';
import PostsListPage from '../pages/PostsListPage';
import postListPageLoader from '../pages/PostsListPage/PostsListPage.loader';

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />,
            },
            {
                path: '/posts',
                element: <PostsListPage />,
                loader: postListPageLoader,
            },
            {
                path: '/posts/:postId',
                element: <PostDetailPage />,
                loader: postDetailPageLoader,
            },
        ],
    },
]);

export default router;
