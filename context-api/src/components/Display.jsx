import React from 'react';
import { useAuth } from '../contexts/auth.context';

export default function Display() {
    const { isLoggedIn } = useAuth();
    return <div>로그인 여부 {isLoggedIn.toString()} </div>;
}
