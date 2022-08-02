import React from 'react';
import classes from './FooterStyles.module.css';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (  
        <div className={classes.footerContainer}>
            <div className={classes.footerContent}>
                <div className={classes.copyrightIcon}>
                    <CopyrightIcon style={{color: 'white', fontSize: '20'}} />
                </div>
                <div className={classes.footerText}>
                    <Typography variant="subtitle2"
                        sx={{ 
                            color: 'white', 
                            fontWeight: '400', 
                            textAlign: 'center'
                            }}>
                        LT Creative. All Rights Reserved.
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default Footer;