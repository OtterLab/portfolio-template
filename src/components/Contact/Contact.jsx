import React, { useEffect } from 'react';
import classes from './ContactStyles.module.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import contactImage from '../../assets/contact_image.svg';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Aos from 'aos';
import 'aos/dist/aos.css';

const contactTheme = createTheme ({
    typography: {
        // overlay heading
        h1: {
            fontSize: '7rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px'
        },
        h4: {
            color: 'white'
        },
        h5: {
            textTransform: 'uppercase',
            fontWeight: '500',
            color: 'white',
            letterSpacing: '2px',
            marginTop: '2em'
        },
        body1: {
            color: 'white',
            fontWeight: '300',
            paddingBottom: '16px'
        }
    }
});

const socialIconItems = [
    { icon: FacebookIcon, url: 'https://www.facebook.com/LeYing86', name: 'facebook' },
    { icon: InstagramIcon, url: '', name: 'instagram' },
    { icon: GitHubIcon, url: 'https://github.com/OtterLab', name: 'github' },
    { icon: LinkedInIcon, url: 'www.linkedin.com/in/ltruong29', name: 'linkedin' },
];

function Contact() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return ( 
        <div className={classes.contactSection}>
            <ThemeProvider theme={contactTheme}>
                <div data-aos="fade-down" data-aos-easing="linear">
                    <div className={classes.contactContainer}>
                        <div className={classes.contactHeadingContainer}>
                            <Typography variant="h1" className={classes.overlayContactHeading}>Contact</Typography>
                            <div className={classes.contactHeadingText}>
                                <Typography variant="h4" className={classes.contactUnderline}><span></span>Get In Touch</Typography>
                            </div>
                        </div>
                        <div className={classes.contactCard}>
                            <div className={classes.contactCardItem}>
                                <div className={classes.contactCardContent}>
                                    <div>
                                        <img src={contactImage} alt="contact_image" className={classes.contactImg} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.contactCard}>
                                <div className={classes.contactCardItem}>
                                    <div className={classes.contactCardContent}>
                                        <div className={classes.contactInfo}>
                                            <Typography variant="h5">Location</Typography>
                                            <Typography variant="body1">Sunnybank 4109, QLD, Brisbane</Typography>
                                        </div>
                                        <div className={classes.contactInfo}>
                                            <Typography variant="body1"><span><PhoneAndroidIcon style={{fontSize: '30', position: 'relative', top: '9px', right: '.2em', paddingRight: '8px'}}/></span>
                                                0435 894 269
                                            </Typography>
                                            <Typography variant="body1"><span><EmailIcon style={{fontSize: '30', position: 'relative', top: '9px', right: '.2em', paddingRight: '8px'}}/></span>
                                                yimiao96@outlook.com
                                            </Typography>
                                        </div>
                                        <div className={classes.contactInfo}>
                                            <Typography variant="h5">Follow Me</Typography>
                                            {socialIconItems.map((item) => (
                                                <IconButton key={item.name} size="small" sx={{border: '2px solid #FCB51D', marginRight: '13px', marginTop: '14px'}}>
                                                    <item.icon style={{fontSize: '25', color: 'white', padding: '5px'}}/>
                                                </IconButton>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Contact;