import React, { useEffect } from 'react';
import classes from './SkillsStyles.module.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const skillTheme = createTheme ({
    typography: {
        // overlay heading
        h1: {
            fontSize: '7rem',
            textTransform: 'uppercase',
            fontWeight: '600',
            letterSpacing: '2px',
            "@media (max-width: 480px)": {
                fontSize: '4.3rem',
                position: 'relative',
                top: '.6em'
            }
        },
        h4: {
            fontWeight: '500',
            paddingBottom: '.5em',
            color: 'white',
            letterSpacing: '2px',
            "@media (max-width:480px)": {
                position: 'relative',
                right: '1.7em',
                top: '1em'
            }
        },
        body1: {
            color: 'white',
            fontWeight: '300'
        }
    }
});

function Skills() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (  
        <div className={classes.skillsContainer}>
            <ThemeProvider theme={skillTheme}>
                <div data-aos="fade-left" data-aos-easing="ease-in-sine">
                    <div className={classes.skillHeadingContainer}>
                        <Typography variant="h1" className={classes.overlaySkillHeading}>Skills</Typography>
                        <div className={classes.skillHeadingText}>
                            <Typography variant="h4" className={classes.skillUnderline}><span></span>My Skills</Typography>
                        </div>
                    </div>
                    <div className={classes.skillsText}>
                        <Typography variant="body1">
                            I create responsive websites, progressive web applications which is easy to use and simple interface.
                            My field of area is frontend development, building small to medium websites using JavaScript frameworks like ReactJS, VueJS and user interface libraries
                            include Vuetify, Material UI, Semantic UI and BootStrap. I also experience in developing websites with open-source CMS
                            like (WordPress, Wix, Drupal and Shopify).
                        </Typography>
                    </div>
                
                    <div className={classes.skillBarContent}>
                        <div className={classes.skillBarItem}>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>HTML5</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.html5}`}>
                                        <span className={classes.toolTip}>87%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>CSS3</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.css3}`}>
                                        <span className={classes.toolTip}>84%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>JavaScript</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.javaScript}`}>
                                        <span className={classes.toolTip}>70%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>VueJS</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.vuejs}`}>
                                        <span className={classes.toolTip}>90%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>ReactJS</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.reactjs}`}>
                                        <span className={classes.toolTip}>80%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>WordPress</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.wordpress}`}>
                                        <span className={classes.toolTip}>95%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skillBarItemTwo}>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>Adobe PhotoShop</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.adobePhotoshop}`}>
                                        <span className={classes.toolTip}>76%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>Adobe Illustrator</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.adobeIllustrator}`}>
                                        <span className={classes.toolTip}>85%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>Adobe InDesign</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.adobeInDesign}`}>
                                        <span className={classes.toolTip}>82%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={classes.skillBox}>
                                <span className={classes.title}>Adobe XD</span>
                                <div className={classes.skillBar}>
                                    <span className={`${classes.skillPer} ${classes.html5}`}>
                                        <span className={classes.toolTip}>86%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Skills;