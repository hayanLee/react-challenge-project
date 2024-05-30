// 관습적으로 작업 이름을 상수(= 파일이름/상수)로 만듦
export const LOG_IN = 'auth/LOG_IN';
export const LOG_OUT = 'auth/LOG_OUT';
// 공장은 작업을 함 = '함수'로 만듦

//초기 상태
const initialState = {
    isLoggedIn: false,
};

// 공장(바꿀 대상, 작업명세서)
function authReducer(prevState = initialState, action) {
    //작업의 종류에 따라 다른 작업 = 조건문
    console.log(prevState, action);
    switch (action.type) {
        case LOG_IN:
            // 작업이 다 반영된 상태를 리턴
            console.log(1);
            return { ...prevState, isLoggedIn: true };
        case LOG_OUT:
            console.log(2);
            return { ...prevState, isLoggedIn: false };
        default:
            console.log(3);
            return prevState;
    }
}

export default authReducer;
