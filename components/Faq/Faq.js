'use client'

import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    Button,
    TextField,
    Divider,
    Container,
    AccordionDetails,
    AccordionSummary, Accordion
} from '@mui/material';
import './Faq.css';

const Faq = () => {

    const questions = [
        {
            question: "Combien de formations sont disponibles sur le site ?",
            reponse: "Il existe actuellement 6 formations différentes basées sur 6 thèmes différents."
        },
        {
            question: "Est-il obligatoire de s'inscrire ?",
            reponse: "Non l'inscription n'est pas obligatoire. La création d'un compte permets d'avoir un suivi sur les formations faites et à faire."
        },
        {
            question: "L'utilisation de la plateforme est gratuite ?",
            reponse: "Oui, la plateforme est gratuite."
        },
        {
            question: "Quel public est visé par cette plateforme ?",
            reponse: "La plateforme vise principalement à former les jeunes générations directement au sein des écoles. Cependant, elle n'est pas fermée au public."
        },
        {
            question: "Y aura-t-il des améliorations prochainement ?",
            reponse: "Oui, quelques travaux sont en cours, cependant si vous avez des idées n'hésitez pas à nous contacter pour nous les partager."
        }
    ]

    const [expanded, setExpanded] = React.useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container className="faq_container" maxWidth="xl" style={{ padding: 20, width: '50%' }}>
            <h2>Foire Aux Questions</h2>
            <div style={{ marginTop: "10%" }}>
                {questions.map((question, index) => (
                    <Accordion
                        key={index}
                        className="accordion"
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <AccordionSummary
                            aria-controls="panel0d-content"
                            id="panel0d-header"
                            style={{ borderBottom: "1px solid black" }}
                        >
                            <Typography>{question.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {question.reponse}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <p style={{ marginTop: 50, textAlign: "center" }}>Une question manquante ? <a href="/contact"><u>Contactez-nous !</u></a></p>
        </Container>
    );
};

export default Faq;
