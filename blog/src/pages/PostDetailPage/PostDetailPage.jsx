import { useLoaderData } from 'react-router-dom';

export default function PostDetailPage() {
    console.log('디테일 렌더링');
    const post = useLoaderData();
    return (
        <>
            <h1>postsdetails</h1>

            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    );
}
