import { useLoaderData } from 'react-router-dom';

export default function PostDetailPage() {
    const post = useLoaderData();
    return (
        <>
            <h1>postsdetails</h1>

            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    );
}
