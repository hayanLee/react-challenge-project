import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

type ModalContextValue = {
    // 둘은 반환값이 필요하지 않아
    open: (element: React.ReactElement) => void;
    close: () => void;
};

// 초기값에도 명시적으로 넣어주기
// 초기값은 형태만 맞춰주면 됨 (빈 함수)
const initialValue: ModalContextValue = { open: () => {}, close: () => {} };

// 초기값을 넣어주면 자동으로 타입 추론이 되지만, 'useState'처럼 명시적으로 적어주는 것이 좋음
// context Value의 형태를 제네릭으로 넣어주기
// 이 제네릭은 반환하는 값과 같은 타입
const ModalContext = createContext<ModalContextValue>(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
    // 리액트에서 아무것도 보여주지 않을때 컴포넌트에서는 null 리턴
    // == 모달을 보여주거나 | 아무것도 보여주지 않거나
    const [modalElement, setModalElement] = useState<React.ReactElement | null>(null);

    // 객체 타입 이용하기
    // const open: (elemet: React.ReactElement) => void = (element) => {}; // 함수에 지정
    // const open = (elemet: React.ReactElement) => {}; // 매개변수에 타입 지정
    const open: ModalContextValue['open'] = (element) => setModalElement(element);
    const close: ModalContextValue['close'] = () => setModalElement(null);

    return (
        <ModalContext.Provider value={{ open, close }}>
            {children}
            {modalElement}
        </ModalContext.Provider>
    );
}

// [interface 설계]
// 초기값에서 함수를 넣을 때는 빈 함수 넣기
// const modal = useModal();

// 둘은 반환값이 필요하지 않아 (변수에 넣는 동작 없음)
// modal.open(<SomeModal />);
// modal.close();
