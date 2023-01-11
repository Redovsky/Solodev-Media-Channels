import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Slogo, { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position:  "sticky", background: '#000', top: 0, justifyContent: "space-between", zIndex: 2}}
  >
    
    <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    <a href='https://ra-portfolio-96.netlify.app/'  target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center'}}>
      <motion.img 
        whileInView={{ scale: [0, 2] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        src={Slogo}
        alt="Slogo"
        height={55}
      />
    </a>

    <SearchBar />
  </Stack>
);


export default Navbar;