import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRef, useState } from 'react';
import Page from '../components/Page';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
function TodoPage() {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    // isPending : 통신 여부
    const { isPending, mutate } = useMutation({
        mutationFn: (...arg) => {
            console.log(arg);
            axios.post(ENDPOINT, { value });
        },

        onSuccess: (mutationResult) => {
            // 인자로 mutationFn의 반환값 전달
            console.log(mutationResult);
            alert('성공했어!');
        },
        onError: () => alert('실패했어 ㅠㅠ '),
    });

    const handleClickBtn = async () => {
        try {
            mutate(inputRef.current.value); // mutationFn 실행
            // 1. mutationFn에 전달할 인자
            // 2.useMutation에서 작성하지 않고, options로 {onSuccess : () => alert('성공했어!') } 전달 가능

            // const response = await axios.post(ENDPOINT, { value });
            // const data = response.data;
            // console.log(data);
        } catch {
            //
        }
    };
    return (
        <Page>
            <input
                ref={inputRef}
                type='text'
                className='border'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={isPending}
            />
            <button
                className='bg-black text-white'
                onClick={handleClickBtn}
                disabled={isPending}
            >
                눌러주세요
            </button>
        </Page>
    );
}

export default TodoPage;
