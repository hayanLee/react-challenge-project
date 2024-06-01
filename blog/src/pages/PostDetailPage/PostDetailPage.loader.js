export default async function postDetailPageLoader({ params }) {
    const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
}
