import React, { useEffect } from 'react';
import classes from './AboutStyles.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Link from '@mui/material/Link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import cvPDF from '../../assets/cv/ltcreative_resume.pdf';

const aboutTheme = createTheme ({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    fontSize: '14px',
                    bottom: '40px',
                    backgroundImage: 'linear-gradient(-90deg, #F68E1F, #FCB51D)',
                    '&:hover': {
                        backgroundColor: '#242A35'
                    },
                    "@media (max-width:480px)": {
                        position: 'relative',
                        bottom: '4em'
                    }
                }
            }
        }
    },
    typography: {
        // overlay heading
        h1: {
            textTransform: 'uppercase',
            fontSize: '7rem',
            fontWeight: '600',
            letterSpacing: '2px',
            "@media (max-width:480px)": {
                fontSize: '3.3rem',
                lineHeight: '1em'
            }
        },
        h4: {
            paddingBottom: '.8em',
            position: 'relative',
            bottom: '1.9em',
            marginLeft: '1.7em',
            color: 'white',
            fontWeight: '500',
            letterSpacing: '2px',
            "@media (max-width:480px)": {
                fontSize: '1.4rem',
                position: 'relative',
                bottom: '.9em',
                left: '.3em'
            }
        },
        body1: {
            textAlign: 'left',
            color: 'white',
            fontWeight: '300',
            position: 'relative',
            width: '60%',
            left: '30px',
            bottom: '3em',
            "@media (max-width:480px)": {
                width: '85%',
                marginTop: '2em'
            }
        },   
    },
});

function About() {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (  
        <div className={classes.aboutSection}>
            <ThemeProvider theme={aboutTheme}>
                <Container maxWidth="lg" className={classes.aboutContainer}>
                    <div data-aos="fade-up">
                        <div className={classes.aboutHeadingContainer}>
                            <Typography variant="h1" className={classes.overlayAboutHeading}>About Me</Typography>
                            <div className={classes.aboutHeadingContent}>
                                <Typography variant="h4" className={classes.aboutUnderline}><span></span>Know Me More</Typography>
                            </div>
                        </div>
                        <Typography variant="body1">
                            A graduate graphic designer and frontend developer with a particular interest in UX and UI
                            web development. Willing to learn new skills and to take on new challenges to create interactive
                            components and bring them to life. Outside of graphic design and frontend development,
                            personal interests include travelling, shopping and looking at architecture.
                        </Typography>
                        <div className={classes.downloadBtn}>
                            <Button variant="contained" endIcon={<DownloadIcon/>}
                                component={Link} href={cvPDF} download="LT Creative CV">
                                Download cv
                            </Button>     
                        </div>
                    </div>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default About;