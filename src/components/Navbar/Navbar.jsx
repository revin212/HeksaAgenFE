import { Home } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { homeButtonStyle, navbarMenuListStyle, navbarWrapperStyle } from './NavbarStyles'

export const Navbar = () => {
  return (
    <Box sx={navbarWrapperStyle}>
        <Box sx={navbarMenuListStyle}>
          <Link to='/' style={homeButtonStyle}>
            <Home sx={{color: 'text.gray1', width:"35px", height:"35px"}} />
          </Link>

          <Stack justifyContent={'center'} alignItems={'center'}>
            <Link to='/create-agen' style={{padding: '10px', textDecoration:'none'}}>
              <Button variant='contained' sx={{
                fontWeight: '500',
              }}>
                Create Agen
              </Button>
            </Link>
          </Stack>
        </Box>
    </Box>
  )
}
