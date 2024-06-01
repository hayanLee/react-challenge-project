import { Link, useLoaderData } from 'react-router-dom';

export default function PostsListPage() {
    console.log('리스트페이지 렌더링');
    const posts = useLoaderData();
    return (
        <>
            <h1>postlist</h1>

            <ol>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </>
    );
}
