"use client"; // Indique que c'est un Client Component

import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./page.css";
import {useAuth} from "../../context/AuthContext";
import {useRouter} from "next/navigation";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth();
    const { user, setUser, logout } = useAuth();

    const router = useRouter();

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Connexion de l'utilisateur via Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            setUser(user);
            // Redirection ou autre traitement après connexion réussie
            router.push("/");
        } catch (error) {
            console.error("Erreur de connexion:", error.message);
            setError("Erreur de connexion : " + error.message);
        }
    };

    return (
        <div className={"body__login"}>
            <h1 className={"login__title"}>Bon retour !</h1>
            <form className={"login__form"} onSubmit={handleSubmit}>
                <input
                    className={"login__input"}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className={"login__input"}
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <div className="error-message">{error}</div>}
                <button className={"login__button"} type="submit">Se connecter</button>
                <div className={"link__register"}>Pas encore inscrit ? <a href={"/auth/register"}>Inscription</a> </div>
            </form>
        </div>
    );
};

export default LoginPage;
