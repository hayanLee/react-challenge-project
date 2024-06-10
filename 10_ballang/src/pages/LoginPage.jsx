import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

function LoginPage() {
    const navigate = useNavigate();
    const { mutateAsync: logIn } = useMutation({
        mutationFn: (data) => api.auth.logIn(data),
    });

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const handleClickSignUp = async () => {
        try {
            const email = emailInputRef.current.value;
            const password = passwordInputRef.current.value;
            const data = { email, password };

            await logIn(data);

            alert('로그인 완료');
            navigate('/');
        } catch {
            alert('로그인 실패');
        }
    };

    return (
        <div>
            <input ref={emailInputRef} type='email' placeholder='이메일을 입력해주세요' />
            <input
                ref={passwordInputRef}
                type='password'
                placeholder='비밀번호를 입력해주세요'
            />
            <button onClick={handleClickSignUp}>로그인하기</button>
        </div>
    );
}

export default LoginPage;
