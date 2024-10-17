'use client'

import React from 'react';
import { Box, Typography, IconButton, Button, TextField, Divider, Container } from '@mui/material';
import './About.css'
import ProfileCard from "./ProfileCard";

const About = () => {

    const equipe = [
        {
            name: 'Pierre',
            role: 'UI/UX Designer'
        },
        {
            name: 'Manon',
            role: 'UI/UX Designer'
        },
        {
            name: 'Nathan',
            role: 'Developer'
        },
        {
            name: 'Antoine',
            role: 'Developer'
        },
        {
            name: 'Xavier',
            role: 'Developer'
        },
        {
            name: 'Maximilien',
            role: 'Developer'
        },
        {
            name: 'Clément',
            role: 'Developer'
        }
    ]

    return (
        <Container className="about_container" maxWidth="xl" style={{ padding: 20, width: '70%' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                marginTop: "5%"
            }}>
                <div style={{width: "35%", display: "inline-block"}}>
                    <h2>À propos</h2>
                    <p style={{marginTop: 50}}>Les réseaux sociaux font partie intégrante de nos vies quotidiennes
                        depuis de nombreuses années. De nombreuses études ont démontré qu’ils n’étaient pas sans danger.
                        EhtiQ est né d’une l’impulsion, celle de proposer des formations interactives et ludiques sur
                        les enjeux et dangers des réseaux sociaux.</p>
                </div>
                <div className="vertical-bar"></div>
                <div style={{width: "45%", display: "inline-block"}}>
                    <h2>Notre équipe</h2>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        marginTop: 50
                    }}>
                        {equipe.map((equipier, index) => (
                            <ProfileCard
                                key={index}
                                imageUrl={`/images/${equipier.name}.jpg`}
                                name={equipier.name}
                                job={equipier.role}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
