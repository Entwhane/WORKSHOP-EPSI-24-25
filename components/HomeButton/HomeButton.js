'use client'


import { Box, Button, Typography } from "@mui/material";


export default function HomeButton(props) {
    const { title, subtitle, color } = props
    return (
        <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 5, borderColor: color, borderStyle: "solid", padding: 30 }}>
            <Typography variant="h2" color={color} align="center">
                {title}
            </Typography>
            <Typography variant="body2" color="black" align="center">
                {subtitle}
            </Typography>
        </div>
    );
}
