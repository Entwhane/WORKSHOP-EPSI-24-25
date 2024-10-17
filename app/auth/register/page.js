'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../app/context/AuthContext';
import "./page.css";

const Page = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [etablissement, setEtablissement] = useState("");
    const [level, setLevel] = useState(0);
    const [error, setError] = useState("");

    const router = useRouter();
    const { register } = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            let res;
            switch (level) {
                case "primaire":
                    res = 1;
                    break;
                case "college":
                    res = 2;
                    break;
                case "lycee":
                    res = 3;
                    break;
                case "sup":
                    res = 4;
                    break;
                default:
                    res = 0;
                    break;
            }

            const userData = {
                firstName,
                lastName,
                email,
                password,
                etablissement,
                level: res
            };

            const result = await register(userData);

            if (result.success) {
                router.push('/');
            } else {
                setError(result.error || "Une erreur s'est produite lors de l'inscription");
            }
        } catch (e) {
            console.error("Error registering user: ", e);
            setError("Une erreur s'est produite lors de l'inscription");
        }
    };

    return (
        <div className={"body__register"}>
            <h1 className={"register__title"}>Register</h1>
            <form className={"register__form"} onSubmit={handleRegister}>
                {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

                <div className={"register__section__title"}>Identité</div>
                <div className={"register__section register__section__identite"}>
                    <input
                        className={"register__input"}
                        type={"text"}
                        placeholder={"Prénom"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        className={"register__input"}
                        type={"text"}
                        placeholder={"Nom"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        className={"register__input"}
                        type={"email"}
                        placeholder={"Email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={"register__section__title"}>Détails</div>
                <div className={"register__section"}>
                    <input
                        className={"register__input"}
                        type={"text"}
                        placeholder={"Établissement"}
                        value={etablissement}
                        onChange={(e) => setEtablissement(e.target.value)}
                        required
                    />
                    <fieldset className={"register__level"}>
                        <legend>Niveau</legend>
                        <div className={"register__level__wrapper"}>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv1"
                                    name="niveau"
                                    value="primaire"
                                    onChange={(e) => setLevel(e.target.value)}
                                    required
                                />
                                <label htmlFor="lv1">École primaire</label>
                            </div>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv2"
                                    name="niveau"
                                    value="college"
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <label htmlFor="lv2">Collège</label>
                            </div>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv3"
                                    name="niveau"
                                    value="lycee"
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <label htmlFor="lv3">Lycée</label>
                            </div>
                            <div className={"register__level__group"}>
                                <input
                                    type="radio"
                                    id="lv4"
                                    name="niveau"
                                    value="sup"
                                    onChange={(e) => setLevel(e.target.value)}
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
                        type={"password"}
                        placeholder={"Mot de passe"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        className={"register__input"}
                        type={"password"}
                        placeholder={"Confirmer le mot de passe"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <div className={"register__section"}>
                    <button className={"register__button"}>Inscription</button>
                    <div className={"link__login"}>Déjà membre ? <a href={"/auth/login"}>Connexion</a></div>
                </div>
            </form>
        </div>
    );
};

export default Page;