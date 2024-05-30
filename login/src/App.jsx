import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Display from './components/Display';
import { LOG_IN, LOG_OUT } from './redux/reducers/auth.reducer';

function App() {
    const dispatch = useDispatch(); // 공장에 명세서 전달할 우체부
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleClickBtn = () => {
        console.log(isLoggedIn);
        const action = { type: isLoggedIn ? LOG_OUT : LOG_IN };
        dispatch(action); // 우체부에 작업 명세서 전달
    };
    return (
        <>
            <Display />
            <button onClick={handleClickBtn}>
                {isLoggedIn ? '로그아웃 하기' : '로그인 하기'}
            </button>
        </>
    );
}

export default App;
