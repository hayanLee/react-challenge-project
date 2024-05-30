import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DefaultLayout() {
    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('unmount');
        };
    }, []);
    return (
        <div>
            <Link to='/'> 홈 페이지</Link>
            <br />
            <Link to='/posts'> 포스트 목록 페이지</Link>
            <br />
            <Link to='/posts/1'> 포스트 상세 페이지</Link>
            <Outlet />
        </div>
    );
}
