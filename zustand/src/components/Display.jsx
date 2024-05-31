import React from 'react';
import useLoginStore from '../zustand/login.store';

// useLoginStore로 하나로 퉁침
// useSelector
// useDispatch
// dispatch(action)
export default function Display() {
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
    return <div>로그인 여부 {isLoggedIn.toString()}</div>;
}
