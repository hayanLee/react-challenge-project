import './App.css';
import { useModal } from './contexts/modal.context';
import './custom.css';
function App() {
    const modal = useModal();
    const handleClickBtn = () => {
        modal.open({ title: '샘플모달', content: '설명' });
    };
    return (
        <>
            <button onClick={handleClickBtn}>모달 띄우기</button>

            {Array(300)
                .fill(0)
                .map((_, i) => (
                    <div key={i}>{i + 1}</div>
                ))}
        </>
    );
}

export default App;
