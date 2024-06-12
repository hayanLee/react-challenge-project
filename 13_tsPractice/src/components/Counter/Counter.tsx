import { useState } from 'react';
import CounterBtn from './CounterBtn';
import CounterDisplay from './CounterDisplay';

function Counter() {
    const [count, setCount] = useState<number>(0);
    const [unit, setUnit] = useState<number>(1);

    // 1. 함수 자체에서 타입 지정 (함수에다 지정해서 e를 추론) => x
    // const handleChangeUnit: (e: { target: { value: string } }) => void = (e) =>
    //     setUnit(Number(e.target.value));

    // 2. 매개변수 e에다 타입 지정 (모르는 것 자체에 타입 지정) => x
    // const handleChangeUnit = (e: { target: { value: string } }) =>
    //     setUnit(Number(e.target.value));

    // 3. input onChange에서 e를 직접 가져오기 (fancy)
    // const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) =>
    //     setUnit(Number(e.target.value));

    // 4. 함수에 직접 지정 (fancy)
    const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) =>
        setUnit(Number(e.target.value));

    const decrement = () => setCount(count - 1);
    const increment = () => setCount(count + 1);

    return (
        <div>
            <CounterDisplay value={count} />

            <input
                value={unit}
                onChange={handleChangeUnit}
                type='number' // ui를 설정하는 것으로, 실제 값과는 무관 (값은 항상 string)
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
