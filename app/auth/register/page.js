"use client"; // Indique que c'est un Client Component

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation'; // Importation de useRouter pour la redirection
import { db } from "../../../lib/firebase"; // Firestore db import
import "./page.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        user_name: "", // Correction ici pour user_name
        email: "",
        school: "",
        level: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const auth = getAuth();
    const router = useRouter(); // Utilisation de useRouter pour la redirection

    // Gestion des changements de formulaire
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, // Assurez-vous que le nom des champs correspond aux clés de formData
        });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            // Création de l'utilisateur via Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Enregistrement des informations supplémentaires dans Firestore
            await addDoc(collection(db, "users"), {
                userId: user.uid,
                firstName: formData.firstName,
                lastName: formData.lastName,
                user_name: formData.user_name, // Utilisez user_name ici
                email: formData.email,
                school: formData.school,
                level: formData.level,
                createdAt: new Date().toISOString(),
            });

            // Redirection vers la page d'accueil après inscription réussie
            router.push("/"); // Rediriger l'utilisateur vers la page d'accueil

        } catch (error) {
            console.error("Erreur d'inscription:", error.message);
            setError(error.message);
        }
    };

    return (
        <div className={"body__register"}>
            <h1 className={"register__title"}>Inscription</h1>
            <form className={"register__form"} onSubmit={handleSubmit}>
                <div className={"register__section__title"}>Identité</div>
                <div className={"register__section register__section__identite"}>
                    <input
                        className={"register__input"}
                        type="text"
                        name="firstName"
                        placeholder="Prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={"register__input"}
                        type="text"
                        name="lastName"
                        placeholder="Nom"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={"register__input"}
                        type="text"
                        name="user_name" // Ici, on utilise user_name pour être cohérent
                        placeholder="Nom d'utilisateur"
                        value={formData.user_name} // Correction ici
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={"register__input"}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={"register__section__title"}>Détails</div>
                <div className={"register__section"}>
                    <input
                        className={"register__input"}
                        type="text"
                        name="school"
                        placeholder="Établissement"
                        value={formData.school}
                        onChange={handleChange}
                        required
                    />
                    <fieldset className={"register__level"}>
                        <legend>Niveau</legend>
                        <div className={"register__level__wrapper"}>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv1"
                                    name="level"
                                    value="primaire"
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="lv1">École primaire</label>
                            </div>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv2"
                                    name="level"
                                    value="college"
                                    onChange={handleChange}
                                />
                                <label htmlFor="lv2">Collège</label>
                            </div>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv3"
                                    name="level"
                                    value="lycee"
                                    onChange={handleChange}
                                />
                                <label htmlFor="lv3">Lycée</label>
                            </div>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv4"
                                    name="level"
                                    value="sup"
                                    onChange={handleChange}
                                />
                                <label htmlFor="lv4">Enseignement supérieur</label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className={"register__section__title"}>Informations de connexion</div>
                <div className={"register__section register__section__mdp"}>
                    <input
                        className={"register__input"}
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={"register__input"}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmer le mot de passe"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className={"register__section"}>
                    <button className={"register__button"} type="submit">Inscription</button>
                    <div className={"link__login"}>Déjà membre ? <a href={"/auth/login"}>Connexion</a></div>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
