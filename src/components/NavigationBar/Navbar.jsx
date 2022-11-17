import React, { useState } from 'react';
import classes from './NavbarStyles.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../../assets/ltcreative_logo_design.svg';
import Hidden from '@mui/material/Hidden';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const navMenuItems = [
    { title: 'About', url: '/about' },
    { title: 'Skills', url: '/myskills' },
    { title: 'Projects', url: '/projects' },
    { title: 'Contact', url: '/contact' }
];

function Navbar() {
    
    const [openMenu, setOpenMenu] = useState(false);

    return (  
        <AppBar position="sticky" elevation={0} style={{backgroundColor: '#1E232D'}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters style={{height: '70px'}}>
                    <div style={{flexGrow: 1}}>
                        <NavLink to="/">
                            <img src={Logo} alt="ltcreative logo design" className={classes.logoImage} />
                        </NavLink>
                    </div>
                    <Hidden smDown>
                        {navMenuItems.map((item) => (
                            <NavLink key={item.title} to={item.url} className={classes.navLinkItems}>
                                {item.title}
                            </NavLink>
                        ))}
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={() => setOpenMenu(true)}>
                            <SortIcon style={{fontSize: '30', color: 'white'}}/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <SwipeableDrawer anchor="right" open={openMenu} onOpen={() => setOpenMenu(true)} 
                PaperProps={{sx: {backgroundColor: '#1E232D'} }} onClose={() => setOpenMenu(false)}>
                <div className={classes.closeIconBtn}>
                    <IconButton onClick={() => setOpenMenu(false)}>
                        <CloseIcon style={{fontSize: '30', color: 'white'}}/>
                    </IconButton>
                </div>
                <List sx={{width: '100%', marginTop: '1.4em'}}>
                    {navMenuItems.map((item) => (
                        <ListItem key={item.title}>
                            <NavLink to={item.url} className={classes.navMenuList}
                                onClick={() => setOpenMenu(false)}>
                                {item.title}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <div style={{textAlign: 'center', position: 'relative', top: '4em'}}>
                    <img src={Logo} alt="ltcreative logo design" className={classes.logoMini} />
                </div>
            </SwipeableDrawer>
        </AppBar>
    );
}

export default Navbar;