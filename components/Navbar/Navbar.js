'use client'

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid2';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  {name: 'Thèmes', link: '/themes'},
  {name: 'FAQ', link: '/faq'},
  {name: 'À propos', link: '/about'}
]

const settings = ['Thèmes', 'FAQ', 'À propos', 'Account'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Container maxWidth="xl" style={{ backgroundColor: 'white', padding: 10 }}>
      <Grid container flexDirection="row" justifyContent={"space-between"} alignItems={"center"}>
        <Grid size={{ xs: 11, md: 4 }}>
          <Grid container flexDirection="row">
            <img src={"/images/logo.png"} width="20" height="20" alt="Logo" style={{ margin: 10 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: 'ClashDisplay-Regular',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: 24
              }}
            >
              EthiQ
            </Typography>
          </Grid>
        </Grid>
        <Grid size={4} sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          <div className='row' style={{ justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block', paddingLeft: 5, paddingRight: 5 }}
              >
                <Typography variant="body2" color="black" fontFamily="ClashDisplay-Regular">
                  <a href={page.link}>
                    {page.name}
                  </a>
                </Typography>
              </Button>
            ))}
          </div>
        </Grid>
        <Grid size={4} sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          <Grid container flexDirection="row" justifyContent="flex-end" spacing={2}>
            <Button color='#F07167' sx={{ backgroundColor: "#F07167", borderRadius: 1, paddingLeft: 2, paddingRight: 2 }}>
              <Typography variant="body2" color="white" fontWeight="900" fontFamily="ClashDisplay-Regular">
                connexion
              </Typography>
            </Button>
            <Button color='#0081A7' sx={{ backgroundColor: "#0081A7", borderRadius: 1, paddingLeft: 2, paddingRight: 2 }}>
              <Typography variant="body2" color="white" fontWeight="900" fontFamily="ClashDisplay-Regular">
                inscription
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid size={1} sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
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
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {settings.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </Container >
  );
}
export default NavBar;
