import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function Filler() {
    return (
        <Box
            sx={{
                height: 100,
                width: 2000,
                backgroundColor: '#232323',
            }}
            alt="The house from the offer."
            // src={require("../public/background.png")}
        />
    );
}