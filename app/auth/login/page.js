import React from 'react';

import "./page.css";


const Page = () => {
    return (
        <div className={"body__login"}>
            <h1 className={"login__title"}>Bon retour !</h1>
            <form className={"login__form"}>
                <input className={"login__input"} type={"text"} placeholder={"Nom d'utilisateur"}/>
                <input className={"login__input"} type={"password"} placeholder={"Mot de passe"}/>
                <button className={"login__button"}>Se connecter</button>
                <div className={"link__register"}>Pas encore inscrit ? <a href={"/auth/register"}>Inscription</a> </div>
            </form>
        </div>
)
    ;
};

export default Page;