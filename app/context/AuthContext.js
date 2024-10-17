// app/context/AuthContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const usersRef = collection(db, "Users");
            const q = query(usersRef,
                where("email", "==", email),
                where("password", "==", password)
            );
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                return { success: true, user: userData };
            }
            return { success: false, error: "Invalid email or password" };
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, error: error.message };
        }
    };

    const register = async (userData) => {
        try {
            const usersRef = collection(db, "Users");
            const user = {
                user_name: `${userData.firstName} ${userData.lastName}`,
                user_id: Math.random() * 10000000000000000,
                email: userData.email,
                password: userData.password,
                etablissement: userData.etablissement,
                level: userData.level
            };

            const docRef = await addDoc(usersRef, user);
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            return { success: true, user };
        } catch (error) {
            console.error("Registration error:", error);
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);