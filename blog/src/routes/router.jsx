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
                // 페이지를 그리기 전 실행할 작업
                loader: postListPageLoader,
            },
            {
                path: '/posts/:postId',
                element: <PostDetailPage />,
                // loader: (someObj) => {someObj.params.postId} 이기 때문에
                // loader: ({params})=> {params.postId} 으로 구조 분해 가능
                loader: postDetailPageLoader,
            },
        ],
    },
]);

export default router;
