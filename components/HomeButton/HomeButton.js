'use client'


import { Box, Button, Typography } from "@mui/material";


export default function Home(props) {
    const { title, subtitle, color } = props
    return (
        <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 5, borderColor: color, borderStyle: "solid" }}>
            <Typography variant="h2" color={color} align="center">
                {title}
            </Typography>
            <Typography variant="body2" color="black" align="center" style={{ padding: 10}}>
                {subtitle}
            </Typography>
        </div>
    );
}
