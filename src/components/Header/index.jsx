import React from "react";
import logo from "../../assets/img/logo.png"
import Navbar from "../Navbar";
import { AppBar, Container, Toolbar, Link } from "@mui/material";

const Header = () => {
    return(
        <AppBar component="nav" position="static" style={{ background: '#202124' }}>
            <Container maxWidth="x1">
                <Toolbar disableGutters style={{display: 'flex', justifyContent:"space-between", width:'100%'}}>
                    <Link variant="h6" noWrap component="a" href="/" 
                        sx={
                            {
                                mr: 2, 
                                display:{xs:'none', md:'flex'},
                                fontFamily: 'Bebas Neue',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#DB202C',
                                textDecoration: 'none',
                            }
                        }> Aluraflix</Link>
                    <Navbar />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header