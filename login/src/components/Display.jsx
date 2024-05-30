import React from 'react';
import { useSelector } from 'react-redux';

export default function Display() {
    // const {auth : {isLoggedIn}} = useSelector((state)=> state) <- 안됨
    // Selector가 select한 값(지금은 isLoggedIn)이 바뀔 때마다 리렌더링 (1번 조건의 state는 redux도 포함)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const status = isLoggedIn ? '로그인' : '로그아웃';
    return (
        <div style={{ borderBottom: '1px solid black' }}>
            현재 로그인이 {status} 상태입니다
        </div>
    );
}
