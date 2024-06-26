import { useState } from 'react';
import CounterBtn from './CounterBtn';
import CounterDisplay from './CounterDisplay';

function Counter() {
    const [count, setCount] = useState<number>(0);
    const [unit, setUnit] = useState<number>(1);

    // [event 객체의 타입을 지정하는 n가지 방법]
    // 1. 함수 자체에서 타입 지정 (함수에다 지정해서 e를 추론) => 안씀
    // const handleChangeUnit: (e: { target: { value: string } }) => void = (e) =>
    //     setUnit(Number(e.target.value));

    // 2. 매개변수 e에다 타입 지정 (모르는 것 자체에 타입 지정) => 안씀
    // const handleChangeUnit = (e: { target: { value: string } }) =>
    //     setUnit(Number(e.target.value));

    // 2-2. input onChange에서 e를 직접 가져오기 (매개변수가 적으면 굿) ✨
    // const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) =>
    //     setUnit(Number(e.target.value));

    // 1-2. 함수에 직접 지정(매개변수가 많을 때 다 추론됨) ✨
    const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) =>
        setUnit(Number(e.target.value));

    const decrement = () => setCount(count - 1);
    const increment = () => setCount(count + 1);

    return (
        <div>
            <CounterDisplay value={count} />

            <input
                value={unit}
                className='border'
                onChange={handleChangeUnit}
                type='number' // ui를 설정하는 것으로, 실제 값과는 무관 (값은 항상 string ✨)
                placeholder='숫자를 넣어주세요'
            />

            <div className='flex'>
                <CounterBtn onClick={decrement}>[ - ]</CounterBtn>
                <CounterBtn onClick={increment}>[ + ]</CounterBtn>
            </div>
        </div>
    );
}

export default Counter;
