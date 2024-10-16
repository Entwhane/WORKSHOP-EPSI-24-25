'use client'

import React from 'react';
import { Box, Typography, IconButton, Button, TextField, Divider, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Footer = () => {
  return (
    <Container maxWidth="xl" style={{ backgroundColor: 'black', padding: 20 }}>
      <Grid container justifyContent={"space-between"} spacing={12}>
        <Grid size={6}>
          <Typography variant="body2" color="white" align="left">
            <a href="/mentions">Mentions légales</a>
          </Typography>
          <Typography variant="body2" color="white" align="left">
            Contact
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body2" color="white" align="right">
            EPSI 2024/25
          </Typography>
          <Typography variant="body2" color="white" align="right">
            Workshop - Groupe 7
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
