'use client'

import React, {useState} from 'react';
import { Box, Typography, IconButton, Button, TextField, Divider, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Contact.css'
import QuizzDetails from "../QuizzDetails/QuizzDetail";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'johndoe@email.com',
        message: 'Bonjour, je vous contacte pour ...'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Données soumises:', formData);

        // Si vous voulez intégrer EmailJS pour envoyer l'email :
        // emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
        //   .then((result) => {
        //     console.log(result.text);
        //   }, (error) => {
        //     console.log(error.text);
        //   });

        // Réinitialiser les erreurs après la soumission réussie
        setErrors({});
        alert('Le message a été envoyé avec succès!');
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Le nom est obligatoire';
        if (!formData.email.trim()) newErrors.email = 'L\'adresse email est obligatoire';
        if (!formData.message.trim()) newErrors.message = 'Le message est obligatoire';
        return newErrors;
    };

    return (
        <Container className="contact_container" maxWidth="xl" style={{padding: 20, width: '30%'}}>
            <h2 style={{marginLeft: '10%'}}>
                Une question ?
            </h2>
            <h2 style={{marginLeft: '10%'}}>
                <u>Contactez nous</u>
            </h2>
            <form
                style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}
                onSubmit={handleSubmit}>
                <div>
                    <input
                        className="itemForm"
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ marginTop: 50 }}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                </div>
                <div>
                    <input
                        className="itemForm"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ marginTop: 30 }}
                    />
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                </div>
                <div>
                    <textarea
                        className="itemForm"
                        name="message"
                        placeholder="Message ..."
                        value={formData.message}
                        onChange={handleChange}
                        style={{ marginTop: 30, height: 150 }}
                    />
                    {errors.message && <p style={{color: 'red'}}>{errors.message}</p>}
                </div>
                <button type="submit" style={{ width: "100%", height: 40, marginTop: 50, background: 'linear-gradient(90deg, #0081A7, #F07167)' }}>Envoyer</button>
            </form>
        </Container>
    );
}
;

export default Contact;
