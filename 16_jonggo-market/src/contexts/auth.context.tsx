'use client';
import { User } from '@supabase/supabase-js';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase.context';

type AuthContextValue = {
    isLoggedIn: boolean;
    isInitialized: boolean;
    user?: User | null;
};

const initialValue: AuthContextValue = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [user, setUser] = useState<AuthContextValue['user']>(null);
    const isLoggedIn = !!user;

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            if (event === 'INITIAL_SESSION') {
                setUser(session?.user || null);
                // handle initial session
            } else if (event === 'SIGNED_IN') {
                setUser(session!.user);
                // handle sign in event
            } else if (event === 'SIGNED_OUT') {
                setUser(null);
                // handle sign out event
            } else if (event === 'PASSWORD_RECOVERY') {
                // handle password recovery event
            } else if (event === 'TOKEN_REFRESHED') {
                // handle token refreshed event
            } else if (event === 'USER_UPDATED') {
                setUser(session!.user);
                // handle user updated event
            }

            setIsInitialized(true);
        });
    }, []);

    const value = { isLoggedIn, isInitialized, user };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
