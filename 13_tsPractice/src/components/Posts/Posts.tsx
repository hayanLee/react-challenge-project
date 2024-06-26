import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

function Posts() {
    // 1. state
    // 가져온 데이터로 화면을 다시 그려주려면 state로 관리해야함
    // const [posts, setPosts] = useState<Post[]>([]);
    // useEffect(() => {
    //     axios.get<Post[]>(endpoint).then((response) => setPosts(response.data));
    // }, []);

    const { data: posts = [] } = useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: () => axios.get(endpoint).then((res) => res.data),
    });

    return (
        <div>
            {posts.map((post) => (
                <li key={post.id}>
                    [{post.id}] {post.title}
                </li>
            ))}
        </div>
    );
}

export default Posts;
