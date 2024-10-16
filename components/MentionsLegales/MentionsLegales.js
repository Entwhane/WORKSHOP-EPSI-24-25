'use client'

import React from 'react';
import { Box, Typography, IconButton, Button, TextField, Divider, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './MentionsLegales.css'

const MentionsLegales = () => {
    return (
        <Container className="mentions_container" maxWidth="xl" style={{ padding: 20, width: '70%' }}>
            <h1 style={{textAlign: 'center', marginBottom: 50, marginTop: 50}}>
                Mentions Légales
            </h1>
            <Grid container className="mentions_content_container">
                <Grid size={4} style={{ borderRight: "solid 2px #00AFB9" }}>
                    <ul style={{textAlign: "center", listStyle: "none"}}>
                        <li style={{marginBottom: 125, marginTop: 50}}><h3>1. Objet de l'application</h3></li>
                        <li style={{marginBottom: 155}}><h3>2. Conditions d'accès et d'utilisation</h3></li>
                        <li style={{marginBottom: 240}}><h3>3. Protection des données personnelles</h3></li>
                        <li style={{marginBottom: 140}}><h3>4. Propriété intellectuelle</h3></li>
                        <li style={{marginBottom: 175}}><h3>5. Responsabilité</h3></li>
                        <li style={{marginBottom: 85}}><h3>6. Liens hypertextes</h3></li>
                        <li style={{marginBottom: 90}}><h3>7. Modifications des mentions légales</h3></li>
                        <li style={{marginBottom: 80}}><h3>8. Loi applicable et juridiction compétente</h3></li>
                    </ul>
                </Grid>
                <Grid size={8} style={{ padding: 20 }}>
                    <p style={{ marginBottom: 50, marginTop: 45 }}>
                        L'application EthiQ a pour objectif de sensibiliser les élèves du primaire, du collège et du lycée à une utilisation responsable et éthique des réseaux sociaux. Elle propose des jeux interactifs, des quiz et des histoires pédagogiques pour éduquer les jeunes sur des sujets tels que la prévention du cyberharcèlement, la protection de la vie privée et les bonnes pratiques en ligne.
                    </p>
                    <p style={{ marginBottom: 50 }}>
                        L'utilisation de l'application EthiQ est réservée aux utilisateurs disposant d'un compte personnel. La création d'un compte nécessite de fournir des informations telles que le niveau d'études et une adresse e-mail valide.
                        L'accès à l'application est gratuit, mais certaines fonctionnalités peuvent nécessiter une connexion à internet.
                        L'utilisateur s'engage à utiliser l'application de manière conforme aux lois et règlements en vigueur, ainsi qu'aux présentes mentions légales. Toute utilisation frauduleuse ou abusive pourra entraîner la suspension ou la suppression du compte.
                    </p>
                    <p style={{ marginBottom: 50 }}>
                        L'application EthiQ est conforme à la législation en matière de protection des données personnelles, notamment au Règlement Général sur la Protection des Données (RGPD) n° 2016/679 du 27 avril 2016.
                        Les données collectées lors de la création des comptes utilisateurs (nom, prénom, niveau d'études, adresse e-mail) sont strictement utilisées pour le bon fonctionnement de l'application et la personnalisation des contenus pédagogiques. Ces données ne sont ni vendues, ni partagées avec des tiers sans consentement explicite de l'utilisateur ou de son représentant légal.
                        Les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition aux données les concernant. Pour exercer ces droits, les utilisateurs peuvent envoyer une demande par e-mail à l'adresse suivante : [e-mail de contact pour les données personnelles].
                    </p>
                    <p style={{ marginBottom: 50 }}>
                        Tous les contenus présents sur l'application EthiQ, y compris les textes, graphiques, logos, icônes, images, sons, vidéos, et logiciels, sont la propriété exclusive de l'éditeur ou de ses partenaires, et sont protégés par les lois relatives à la propriété intellectuelle.
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments de l'application, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation préalable et écrite de l'éditeur.
                    </p>
                    <p style={{ marginBottom: 50 }}>
                        L'éditeur s'efforce de maintenir l'application accessible et fonctionnelle. Toutefois, l'éditeur ne peut garantir que l'application sera exempte de bugs, d'erreurs ou d'interruptions. En cas de problème technique ou de dysfonctionnement, l'utilisateur peut contacter le support technique à l'adresse suivante : [e-mail de contact du support].

                        L'éditeur décline toute responsabilité en cas d'utilisation inappropriée de l'application par les utilisateurs ou en cas de non-respect des recommandations de sécurité en ligne.
                    </p>
                    <p style={{ marginBottom: 50 }}>
                        L'application EthiQ peut contenir des liens vers des sites internet externes. L'éditeur ne saurait être tenu responsable du contenu de ces sites tiers, ni des éventuels dommages ou préjudices pouvant résulter de leur utilisation.
                    </p>
                    <p style={{ marginBottom: 50 }}>
                        L'éditeur se réserve le droit de modifier à tout moment les présentes mentions légales. Les utilisateurs seront informés de ces modifications via une notification dans l'application. Il est conseillé aux utilisateurs de consulter régulièrement cette section pour se tenir informés des éventuelles mises à jour.
                    </p>
                    <p>
                        Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation de l'application EthiQ sera soumis à la compétence des tribunaux français.
                    </p>
                </Grid>
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
        </Container>
    );
};

export default MentionsLegales;
