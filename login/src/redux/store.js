import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducer';

// 저장소(store) - 공장(reducer)은 세트!
const store = configureStore({
    // 뽕뽑기 위해 객체 형태로 store - reducer 연결
    // store에 공장 등록
    reducer: { auth: authReducer },
});

// store.auth.isLoggedIn
export default store;
