'use client';
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import "./page.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const token = await user.getIdToken();

            localStorage.setItem("user", JSON.stringify({
                user_name: user.user_name,
                email: user.email,
                uid: user.uid,
                token: token
            }));

            console.log("Utilisateur stocké dans localStorage :", localStorage.getItem("user"));

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
