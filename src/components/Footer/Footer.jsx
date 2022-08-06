import React from 'react';
import classes from './FooterStyles.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';

const footerTheme = createTheme ({
    typography: {
        subtitle2: {
            color: 'white', 
            fontWeight: '400', 
            textAlign: 'center'
        }
    }
});

function Footer() {
    return (  
        <div className={classes.footerContainer}>
            <ThemeProvider theme={footerTheme}>
                <div className={classes.footerContent}>
                    <div className={classes.copyrightIcon}>
                        <CopyrightIcon style={{color: 'white', fontSize: '20'}} />
                    </div>
                    <div className={classes.footerText}>
                        <Typography variant="subtitle2">
                            LT Creative. All Rights Reserved.
                        </Typography>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Footer;