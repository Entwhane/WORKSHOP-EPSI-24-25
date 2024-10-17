'use client'

import React from 'react';
import { Box, Typography, IconButton, Button, TextField, Divider, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './MentionsLegales.css'
import QuizzDetails from "../QuizzDetails/QuizzDetail";

const MentionsLegales = () => {

    const donnees= [
        {
            titre: "1. Objet de l'application",
            text: "L'application EthiQ a pour objectif de sensibiliser les élèves du primaire, du collège et du lycée à une utilisation responsable et éthique des réseaux sociaux. Elle propose des jeux interactifs, des quiz et des histoires pédagogiques pour éduquer les jeunes sur des sujets tels que la prévention du cyberharcèlement, la protection de la vie privée et les bonnes pratiques en ligne.",
        },
        {
            titre: "2. Conditions d'accès et d'utilisation",
            text: "L'utilisation de l'application EthiQ est réservée aux utilisateurs disposant d'un compte personnel. La création d'un compte nécessite de fournir des informations telles que le niveau d'études et une adresse e-mail valide. L'accès à l'application est gratuit, mais certaines fonctionnalités peuvent nécessiter une connexion à internet. L'utilisateur s'engage à utiliser l'application de manière conforme aux lois et règlements en vigueur, ainsi qu'aux présentes mentions légales. Toute utilisation frauduleuse ou abusive pourra entraîner la suspension ou la suppression du compte.",
        },
        {
            titre: "3. Protection des données personnelles",
            text: "L'application EthiQ est conforme à la législation en matière de protection des données personnelles, notamment au Règlement Général sur la Protection des Données (RGPD) n° 2016/679 du 27 avril 2016. Les données collectées lors de la création des comptes utilisateurs (nom, prénom, niveau d'études, adresse e-mail) sont strictement utilisées pour le bon fonctionnement de l'application et la personnalisation des contenus pédagogiques. Ces données ne sont ni vendues, ni partagées avec des tiers sans consentement explicite de l'utilisateur ou de son représentant légal. Les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition aux données les concernant. Pour exercer ces droits, les utilisateurs peuvent envoyer une demande par e-mail à l'adresse suivante : [e-mail de contact pour les données personnelles].",
        },
        {
            titre: "4. Propriété intellectuelle",
            text: "Tous les contenus présents sur l'application EthiQ, y compris les textes, graphiques, logos, icônes, images, sons, vidéos, et logiciels, sont la propriété exclusive de l'éditeur ou de ses partenaires, et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments de l'application, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation préalable et écrite de l'éditeur.",
        },
        {
            titre: "5. Responsabilité",
            text: "L'éditeur s'efforce de maintenir l'application accessible et fonctionnelle. Toutefois, l'éditeur ne peut garantir que l'application sera exempte de bugs, d'erreurs ou d'interruptions. En cas de problème technique ou de dysfonctionnement, l'utilisateur peut contacter le support technique à l'adresse suivante : [e-mail de contact du support]. L'éditeur décline toute responsabilité en cas d'utilisation inappropriée de l'application par les utilisateurs ou en cas de non-respect des recommandations de sécurité en ligne.",
        },
        {
            titre: "6. Liens hypertextes",
            text: "L'application EthiQ peut contenir des liens vers des sites internet externes. L'éditeur ne saurait être tenu responsable du contenu de ces sites tiers, ni des éventuels dommages ou préjudices pouvant résulter de leur utilisation.",
        },
        {
            titre: "7. Modifications des mentions légales",
            text: "L'éditeur se réserve le droit de modifier à tout moment les présentes mentions légales. Les utilisateurs seront informés de ces modifications via une notification dans l'application. Il est conseillé aux utilisateurs de consulter régulièrement cette section pour se tenir informés des éventuelles mises à jour.",
        },
        {
            titre: "8. Loi applicable et juridiction compétente",
            text: "Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation de l'application EthiQ sera soumis à la compétence des tribunaux français."
        },
    ];

    return (
        <div className="mentions_container">
            <h1 style={{textAlign: 'center', marginBottom: 50, marginTop: 50}}>
                Mentions Légales
            </h1>
            <Grid container className="mentions_content_container">
                {donnees.map((donnee, index) => (
                    <div key={index} className="mentions_items_container">
                        <h3>{donnee.titre}</h3>
                        <p>{donnee.text}</p>
                    </div>
                ))}
            </Grid>
            <div className="mentions_content_div">
                <div>
                    <h4>Éditeur</h4>
                    <p>EthiQ</p>
                </div>
                <div>
                    <h4>Directeur de la publication</h4>
                    <p>Nathan Moussiron</p>
                </div>
                <div>
                    <h4>Hébergeur</h4>
                    <p>Site web : [site web de l'hébergeur]</p>
                </div>
                <div>
                    <h4>Siège social</h4>
                    <p>[adresse du siège social]</p>
                </div>
                <p>Mise à jour du 16/10/2024</p>
            </div>
        </div>
    );
};

export default MentionsLegales;
