import React, { useEffect } from 'react';
import classes from './ProjectsStyles.module.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Projects Item
const projectMenuItems = [
    { 
        id: '1', 
        category: 'Brand Design',
        projectImage: '', // require('') method in react
        projectTitle: 'Asian Gallery Restaurant', 
        url: '' 
    },
    { 
        id: '2', 
        category: 'Brand Design',
        projectImage: '',
        projectTitle: 'Granite Bay Brewing Co', 
        url: '' 
    },
    { 
        id: '3', 
        category: 'Packaging Design',
        image: '',
        projectTitle: 'The Ozi Tea & Coffee', 
        url: '' 
    },
    { 
        id: '4', 
        category: 'UI and UX',
        projectImage: '',
        projectTitle: 'Jinsei Japanese Ramen', 
        url: '' 
    },
    { 
        id: '5', 
        category: 'UI and UX',
        projectImage: '',
        projectTitle: 'Royal Shoreline Hotel', 
        url: '' 
    },
    { 
        id: '6', 
        category: 'Major Creative Media',
        projectImage: '',
        projectTitle: 'Neotion', 
        url: '' 
    },
];

const projectTheme = createTheme ({
    typography: {
        h4: {
            color: 'white'
        },
        subtitle1: {
            color: '#242A35',
            fontWeight: '500',
            fontSize: '18px'
        },
        subtitle2: {
            backgroundImage: 'linear-gradient(-45deg, #F68E1F, #FCB51D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '16px',
            fontWeight: '400',
            position: 'relative',
            bottom: '5px'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontSize: '12px',
                    backgroundColor: '#242A35',
                    marginTop: '15px',
                    '&:hover': {
                        backgroundColor: '#FCB51D',
                        color: '#242A35'
                    }
                }
            }
        }
    }
});

function Projects() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (  
        <div className={classes.projectSection}>
            <ThemeProvider theme={projectTheme}>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className={classes.projectContainer}>
                        <div className={classes.projectHeadingContainer}>
                            <div className={classes.overlayProjectHeading}>Projects</div>
                            <div className={classes.projectHeadingText}>
                                <Typography variant="h4" className={classes.projectUnderline}><span></span>Recent Work</Typography>
                            </div>
                        </div>
                        <div className={classes.cardContainer}>
                            {projectMenuItems.map((item) => (
                                <div className={classes.card} key={item.id}>
                                    <div className={classes.cardImage}>
                                        <img src={item.projectImage} alt="" className={classes.projectImg} />
                                    </div>
                                    <div className={classes.cardBody}>
                                        <span className={classes.bg}></span>
                                        <span className={classes.bg}></span>
                                        <span className={classes.bg}></span>
                                        <div className={classes.cardContent}>
                                            <Typography variant="subtitle1">{item.projectTitle}</Typography>
                                            <Typography variant="subtitle2">{item.category}</Typography>
                                            <Link sx={{textDecoration: 'none'}} href={item.url}>
                                                <Button variant="contained" startIcon={<LaunchIcon/>}>View in Behance</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Projects;