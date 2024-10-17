// app/auth/login/page.js
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import "./page.css";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        const result = await login(email, password);
        if (result.success) {
            router.push('/');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className={"body__login"}>
            <h1 className={"login__title"}>Bon retour !</h1>
            <form className={"login__form"} onSubmit={handleLogin}>
                {error && <div className="error-message">{error}</div>}
                <input
                    className={"login__input"}
                    type={"text"}
                    placeholder={"Email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={"login__input"}
                    type={"password"}
                    placeholder={"Mot de passe"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={"login__button"} type="submit">Se connecter</button>
                <div className={"link__register"}>Pas encore inscrit ? <a href={"/auth/register"}>Inscription</a></div>
            </form>
        </div>
    );
};

export default Page;