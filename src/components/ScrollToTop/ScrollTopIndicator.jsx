import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const scrollToTopTheme = createTheme ({
    components: {
        MuiFab: {
            styleOverrides: {
                root: {
                    backgroundColor: 'whitesmoke',
                    zIndex: 2,
                    position: 'fixed',
                    right: '2.5em',
                    bottom: '4vh',
                    "&:hover, &.Mui-focusVisible": {
                        transition: '0.3s',
                        backgroundColor: '#FCB51D'
                    },
                    
                }
            }
        }
    }
});

const ScrollTopIndicator = ({
    showBelow,
}) => {

    const [show, setShow] = useState(showBelow ? false : true)
    
    const handleScroll = () => {
        if(window.pageYOffset > showBelow) {
            if(!show) setShow(true)
        } else {
            if(show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth`})
    }

    useEffect(() => {
        if(showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            <ThemeProvider theme={scrollToTopTheme}>
                {show && 
                    <Fab size="medium" onClick={handleClick} aria-label="to top">
                        <KeyboardArrowUpIcon style={{fontSize: '30', color: '#242A35'}} />
                    </Fab>
                }
            </ThemeProvider>
        </div>
    )
}

export default ScrollTopIndicator;