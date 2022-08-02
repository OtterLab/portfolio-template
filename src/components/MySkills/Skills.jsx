import React, { useEffect } from 'react';
import classes from './SkillsStyles.module.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const skillTheme = createTheme ({
    typography: {
        h4: {
            fontWeight: '500',
            paddingBottom: '.5em',
            color: 'white'
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
                        <div className={classes.overlaySkillHeading}>Skills</div>
                        <div className={classes.skillHeadingText}>
                            <Typography variant="h4" className={classes.skillUnderline}><span></span>My Skills</Typography>
                        </div>
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