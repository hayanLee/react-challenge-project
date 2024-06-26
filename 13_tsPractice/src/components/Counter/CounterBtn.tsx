import { PropsWithChildren } from 'react';

// 유틸리티 타입 만들기
// 이거랑 같은 역할을 하는게 PropsWithChildren
// type VeryUsefulType<T> = T & { children: React.ReactNode };

// children 은 React.ReactNode
// convention = "컴포넌트이름Props"
interface CounterBtnProps {
    onClick: () => void;
    // children: React.ReactNode; // 매번 children을 정해주는게 귀찮은 작업 -> PropsWithChildren 사용
}

function CounterBtn({
    onClick: handleClick,
    children,
}: PropsWithChildren<CounterBtnProps>) {
    return <button onClick={handleClick}>{children}</button>;
}

export default CounterBtn;
