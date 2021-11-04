import React from 'react';
import DiscordLogoWordmarkWhite from '../img/DiscordLogoWordmarkWhite.svg'
import {
    Image,
    Flex,
    Box,
    Button
  } from 'rebass/styled-components';

function NavbarHero() {
    return ( 
        <Flex className='navbar'
            flexWrap='wrap'
            px={2}
        >
            <Box
            px={2} py={2} width={1/3}
            >
            <Image
                src={DiscordLogoWordmarkWhite}
                variant='logo'
            />
            </Box>
            <Box
            px={2} py={2} width={1/3}
            >
            <div className='navbarLink'>
                <a className='link-item pointer' variant='nav' href='#!'>Download</a>
                <a className='link-item pointer' variant='nav' href='#!'>Nitro</a>
                <a className='link-item pointer' variant='nav' href='#!'>Safety</a>
                <a className='link-item pointer' variant='nav' href='#!'>Support</a>
                <a className='link-item pointer' variant='nav' href='#!'>Blog</a>
            </div>
            </Box>
            <Box
            px={2} py={2} width={1/3}
            >
                <Button 
                    color='black'
                >Open Discord</Button>
            </Box>
        </Flex>
     );
}

export default NavbarHero;