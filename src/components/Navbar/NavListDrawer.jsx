import React, {useState, useContext} from 'react';
import {Box} from "@mui/system";
import {Button, MenuItem, IconButton, Menu, Typography} from "@mui/material";
import { NavLinks, colorTextPrimary } from "../UI/variables";
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../../Context';

const NavListDrawer = () =>{
    const [anchorElNav, setAnchorElNav] = useState(null),
        {user} = useContext(UserContext)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    edge="start"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                        <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {NavLinks.map((nav) => (
                        <MenuItem key={nav.title} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{nav.title}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            {/*<List>
                
                        NavLinks.map((item) => {
                            console.log(item.title);
                            /*<ListItem disablePadding key={item.title}>
                                <ListItemButton component="a" href={item.path}>
                                    <ListItemText primary={item.title}/>
                                </ListItemButton>
                            </ListItem>
                        })
                    </List>*/}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {NavLinks.map((nav) => {
                    if(nav.id === "login" && user.loggedIn)
                        return null
                    else if(nav.id === "loggedUser" && !user.loggedIn)
                            return null    
                    else if(nav.id === "loggedUser" && user.loggedIn){
                        return(
                            <Button
                                key={nav.title}
                                onClick={handleCloseNavMenu}
                                className='nav-style'
                                href={nav.path}
                            >
                                {user.user}
                            </Button>
                        )
                    }
                    else{
                        return(
                        <Button
                            key={nav.title}
                            onClick={handleCloseNavMenu}
                            className='nav-style'
                            href={nav.path}
                        >
                            {nav.title}
                        </Button>)
                    }
                })}
            </Box>
        </>
    

    )
}

export default NavListDrawer;