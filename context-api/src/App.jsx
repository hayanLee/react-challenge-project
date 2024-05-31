import { createContext } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import { AuthProvider } from './contexts/auth.context';

export const AuthContext = createContext(); // 만든다

function App() {
    return (
        <AuthProvider>
            <Display />
            <Button />
        </AuthProvider>
    );
}

export default App;
