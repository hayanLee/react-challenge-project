import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN, LOG_OUT } from '../redux/reducers/auth.reducer';
import Display from './Display';

export default function AuthButton() {
    const dispatch = useDispatch(); // 공장에 명세서 전달할 우체부
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const handleClickBtn = () => {
        const action = { type: isLoggedIn ? LOG_OUT : LOG_IN };
        dispatch(action);
    };
    return (
        <>
            <Display />
            <button onClick={handleClickBtn}>
                {isLoggedIn ? '로그아웃하기' : '로그인하기'}
            </button>
        </>
    );
}
