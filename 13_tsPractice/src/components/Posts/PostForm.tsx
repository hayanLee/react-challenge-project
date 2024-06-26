import { DefaultError, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

function PostForm() {
    const titleElementRef = useRef<HTMLInputElement>(null);
    const bodyElementRef = useRef<HTMLTextAreaElement>(null);

    const { mutateAsync: createPost } = useMutation<
        unknown,
        DefaultError,
        { title: string; body: string }
    >({
        mutationFn: (data) => axios.post(endpoint, data),
    });

    const handleClickBtn = async () => {
        const title = titleElementRef.current?.value;
        const body = bodyElementRef.current?.value;

        if (!title || !body) return alert('데이터 잘 준비 해주세요');
        const data = { title, body };
        await createPost(data);
    };

    return (
        <div className='flex flex-col p-4'>
            <input
                ref={titleElementRef}
                type='text'
                className='border border-black'
                placeholder='제목'
            />
            <textarea
                ref={bodyElementRef}
                className='border border-black'
                placeholder='내용'
            />
            <button className='border border-black' onClick={handleClickBtn}>
                포스트 생성하기
            </button>
        </div>
    );
}

export default PostForm;
