import { useScrollLock } from '@yoojinyoung/usescrolllock';
import { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';

const initalValue = { open: () => {}, close: () => {} };

const ModalContext = createContext(initalValue);
export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
    const [modalElement, setModalElement] = useState(false); // 무엇을 상태로 관리?
    const scrollLock = useScrollLock();
    const value = {
        // open: (elem) => { // v1
        open: ({ title, content }) => {
            const elem = <Modal title={title} content={content} />;
            setModalElement(elem);
            scrollLock.lock();
        },
        close: () => {
            setModalElement(null);
            scrollLock.release();
        },
    };
    return (
        <ModalContext.Provider value={value}>
            {children}
            {modalElement}
        </ModalContext.Provider>
    );
}

//useModal을 사용할 때 필요한 게 뭘까?
// modal API
