import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../LogoImage/LogoImage';

function Logo() {
  return (
    <Link to="/" className="logo">
      <LogoImage />
    </Link>
  );
}

export default Logo;
