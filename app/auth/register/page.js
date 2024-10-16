import React from 'react';

import "./page.css";

const Page = () => {
    return (
        <div className={"body__register"}>
            <h1 className={"register__title"}>Register</h1>
            <form className={"register__form"}>
                <div className={"register__section__title"}>Identité</div>
                <div className={"register__section register__section__identite"}>
                    <input className={"register__input"} type={"text"} placeholder={"Prénom"}/>
                    <input className={"register__input"} type={"text"} placeholder={"Nom"}/>

                    <input className={"register__input"} type={"text"} placeholder={"Nom d'utilisateur"}/>
                    <input className={"register__input"} type={"email"} placeholder={"Email"}/>
                </div>

                <div className={"register__section__title"}>Détails</div>
                <div className={"register__section"}>
                    <input className={"register__input"} type={"text"} placeholder={"Établissement"}/>
                    <fieldset className={"register__level"}>
                        <legend>Niveau</legend>
                        <div className={"register__level__wrapper"}>
                            <div className={"register__level__group"}>
                                <input type="radio" id="lv1" name="niveau" value="primaire"/>
                                <label htmlFor="lv1">École primaire</label>
                            </div>

                            <div className={"register__level__group"}>
                                <input type="radio" id="lv2" name="niveau" value="college"/>
                                <label htmlFor="lv2">Collège</label>
                            </div>


                            <div className={"register__level__group"}>
                                <input type="radio" id="lv3" name="niveau" value="lycee"/>
                                <label htmlFor="lv3">Lycée</label>
                            </div>

                            <div className={"register__level__group"}>
                                <input type="radio" id="lv4" name="niveau" value="sup"/>
                                <label htmlFor="lv4">Enseignement supérieur</label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className={"register__section__title"}>Informations de connexion</div>
                <div className={"register__section register__section__mdp"}>
                    <input className={"register__input"} type={"password"} placeholder={"Mot de passe"}/>
                    <input className={"register__input"} type={"password"} placeholder={"Confirmer le mot de passe"}/>
                </div>

                <div className={"register__section"}>
                    <button className={"register__button"}>Register</button>
                    <div className={"link__login"}>Déjà membre ? <a href={"/auth/login"}>Connexion</a></div>
                </div>
            </form>
        </div>
    )
        ;
};

export default Page;