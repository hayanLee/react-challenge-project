import Modal from './Modal';
import { useModal } from './Modal.context';

function ModalControls() {
    const modal = useModal();

    const handleClickBtn = () => modal.open(<Modal />);

    return (
        <div>
            <button onClick={handleClickBtn}>모달 띄우기</button>
        </div>
    );
}

export default ModalControls;
