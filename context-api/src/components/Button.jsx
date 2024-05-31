import React from 'react';
import { useAuth } from '../contexts/auth.context';

export default function Button() {
    const { logIn, logOut } = useAuth();

    return (
        <div>
            <button onClick={logIn}>로그인 하기</button>
            <button onClick={logOut}>로그아웃 하기</button>
        </div>
    );
}
