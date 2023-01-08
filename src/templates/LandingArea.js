import '@fontsource/roboto/700.css';
import { Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function LandingArea() {
    return (
        <Box
            sx={{
                width: '100%',
                height: 600,
                backgroundColor: '#232323',
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <Paper elevation={0} sx={{ height: 600, width: 1000, backgroundColor: '#232323', zIndex: 1}}>
                <Typography variant="h1" sx={{ marginTop: 2, color: '#C3C3C3', fontSize: 400, opacity: '10%' }}>
                    01
                </Typography>
                <Typography variant="h6" sx={{ marginTop: -50, marginLeft: 45, color: '#FFFFFF', fontSize: 100, fontFamily: 'serif' }}>
                    Living room
                </Typography>
                <Typography variant="subtitle1" sx={{ marginTop: 0, marginLeft: 45, color: '#FFFFFF', fontFamily: 'Helvetica'}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.
                </Typography>
            </Paper>
            <Paper elevation={1} sx={{ height: 600, width: 1000, }}>
                <Box
                    component="img"
                    sx={{
                        height: 600,
                        width: 1000,
                    }}
                    alt="The house from the offer."
                    src={require("../public/livingroom.png")}
                />
            </Paper>
        </Box>
    );
}