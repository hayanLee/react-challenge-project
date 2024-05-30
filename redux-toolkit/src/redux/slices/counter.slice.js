import { createSlice } from '@reduxjs/toolkit';

// reducer, action.type, create 를 한번에 만드는 slice

const initialState = {
    count: 0,
    school: {
        class: {
            students: [{ name: '하얀', age: 12 }],
        },
    },
};

// function counterRedcuer(state, action) {
//     if (action === updateStudentAge) {
//         // immer가 아닌 redux를 쓰면
//         // const newState = { ...state, school: { ...school, class: {...school.class} ...} }; // 뭐 이런식으로 복잡하게 수정해야함
//         produce(state, (draft) => {
//             draft.school.class.students.find((stu) => stu.name === '하얀').age = 20;
//         });
//     }
// }

const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        // 기존 reducer switch 처리를 각각의 함수로 만들기
        // reducer(prevState, action)
        increment: (state, action) => {
            // 인자로 받는 action은 'increment'랑 관련된 action만 들어옴
            console.log(action); // action.type = 자동으로 "name/increment" 이름으로 결정

            const value = action.payload;
            // return {...state, count : state.count + value} // redux 방법
            state.count = state.count + value; // rtk 방법 (= immer 적용)
        },
        decrement: (state, action) => {
            const value = action.payload;
            state.count = state.count - value;
        },
        // immer 적용
        updateStudentAge: (state, action) => {
            state.school.class.students.find((stu) => stu.name === '하얀').age = 20;
        },
    },
});

export const counterRedcuer = counterSlice.reducer; // slice 안에 reducer 존재
export const { increment, decrement } = counterSlice.actions; // slice.actions를 하면 action creator가 나옴
