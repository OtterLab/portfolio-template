import React from 'react';
import classes from './HomeStyles.module.css';
import Paper from '@mui/material/Paper';
import 'animate.css';
import Container from '@mui/material/Container';
import ProfileAvatar from '../../assets/avatar_profile.svg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkMui from '@mui/material/Link';
import AboutSection from '../About/About';
import SkillSection from '../MySkills/Skills';
import ProjectsSection from '../Projects/Projects';
import ContactSection from '../Contact/Contact';
import Typewriter from 'typewriter-effect';
import FloatingCubesBG from '../FloatingCubes/FloatingCubes';
import ScrollTopIndicator from '../ScrollToTop/ScrollTopIndicator';

const socialMenuItems = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/LeYing86', name: 'facebook' },
    { icon: InstagramIcon, href: '', name: 'instagram' },
    { icon: LinkedInIcon, href: 'www.linkedin.com/in/ltruong29', name: 'linkedin' },
    { icon: GitHubIcon, href: 'https://github.com/OtterLab', name: 'github' }
];

const heroTheme = createTheme({
    typography: {
        h2: {
            fontWeight: '500',
            color: '#242A35',
            paddingTop: '6px',
            "@media (max-width:480px)": {
                fontSize: '1.8rem'
            }
        },
        h5: {
            color: '#242A35',
            fontWeight: '500',
            letterSpacing: '4px',
            textTransform: 'uppercase'
        },
        subtitle1: {
            position: 'relative',
            top: '6px',
            marginRight: '5px'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#242A35',
                    fontSize: '14px',
                    '&:hover': {
                        backgroundColor: '#FCB51D',
                        color: '#242A35'
                    }
                }
            }
        }
    }
});

function Home() {

    return (  
        <div>
            <Paper className={classes.section} square elevation={0}>
                <ThemeProvider theme={heroTheme}>
                    <FloatingCubesBG/>
                        <Container className={classes.container} maxWidth="lg">
                            <Grid className={classes.content} container justifyContent="space-between" alignItems="center">
                                <Grid item sm={7} sx={{position: 'relative', left: '2.5em', top: '2em'}} className="animate__animated animate__slideInUp">
                                    <Typography variant="h5" className={classes.textLine}><span></span>Hello,</Typography>
                                    <Typography variant="h2">
                                        <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            strings: [
                                                "I'm Leanne",
                                                "Graphic Designer",
                                                "Frontend Developer"
                                            ]
                                        }}
                                        />
                                    </Typography>
                                    
                                    <Box sx={{paddingTop: '1em'}}>
                                        <Link to="/about" style={{textDecoration: 'none'}}>
                                            <Button variant="contained"
                                            endIcon={<ArrowCircleRightOutlinedIcon style={{fontSize: '25', marginLeft: '4px'}}/>}>About me</Button>
                                        </Link>
                                    </Box>
                                    <div className={classes.socialHero}>
                                        <Typography variant="subtitle1">Connect me:</Typography>
                                        { /* social menu */}
                                        {socialMenuItems.map((item) => (
                                            <LinkMui href={item.href} key={item.name}>
                                                <IconButton sx={{color: '#242A35'}}>
                                                    <item.icon style={{fontSize: '25', color: '#242A35'}}/>
                                                </IconButton>
                                            </LinkMui>
                                        ))}
                                    </div>
                                </Grid>
                                <Grid item sm={4} sx={{position: 'relative', top: '2.5em', right: '13px'}}>
                                    <div className="animate__animated animate__slideInRight">
                                        <img src={ProfileAvatar} alt="profile avatar" className={classes.avatar} />
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                </ThemeProvider>
            </Paper>

            {/* This is about page */}
            <AboutSection/>

            {/* This is skill page */}
            <SkillSection/>

            {/* This is projects page */}
            <ProjectsSection/>

            {/* This is contact page */}
            <ContactSection/>

            {/* Scroll to the top button */}
            <ScrollTopIndicator showBelow={250} />
        </div>
    );
}

export default Home;