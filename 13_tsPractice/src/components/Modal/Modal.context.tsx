import React, { createContext, useContext, useState } from 'react';

type ModalContextValue = {
    // 둘은 반환값이 필요하지 않아
    open: (element: React.ReactElement) => void;
    close: () => void;
};

// 초기값에도 명시적으로 넣어주기
//초기값은 형태만 맞춰주면 됨
const initialValue: ModalContextValue = { open: () => {}, close: () => {} };

// context Value의 형태를 제네릭으로 넣어주기
// 이 제네릭은 반환하는 값과 같은 타입
const ModalContext = createContext<ModalContextValue>(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [modalElement, setModalElement] = useState<React.ReactElement | null>(null);

    // 객체 타입 이용하기
    const open: ModalContextValue['open'] = (element) => {
        setModalElement(element);
    };
    // const open: (elemet: React.ReactElement) => void = (element) => {}; // 함수에 지정
    // const open = (elemet: React.ReactElement) => {}; // 매개변수에 타입 지정

    const close: ModalContextValue['close'] = () => {
        setModalElement(null);
    }; // 객체 타입 이용하기
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

// 둘은 반환값이 필요하지 않아
// modal.open(<SomeModal />);
// modal.close();
