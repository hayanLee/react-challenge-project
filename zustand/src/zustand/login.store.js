import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// create, set = 함수
// set 내 콜백함수 = useState의 함수랑 비슷(새로운 상태 반환)
const useLoginStore = create(
    persist(
        (set, get) => ({
            isLoggedIn: false, // 상태
            logIn: () => set(() => ({ isLoggedIn: true })), // 작동
            logOut: () => set(() => ({ isLoggedIn: false })),

            // toggleIsLoggedIn: () => set((prev) => ({ isLoggedIn: !prev.isLoggedIn })),
            toggleIsLoggedIn: () => {
                const prev = get();
                set({ isLoggedIn: !prev.isLoggedIn });
            },
        }),
        {
            name: 'login-store',
            // storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useLoginStore;
