import React from 'react';
import { Box } from '@mui/material';
import SocialIcons from './Social';

const Footer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SocialIcons />
      <div style={{ display: 'flex', justifyContent: 'space-around', width:'40%'}}>
        <p>Conditions of Use</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <p>© 2021 MovieBox by Adriana Eka Prayudha</p>
      </Box>
    </div>
  );
};

export default Footer;

