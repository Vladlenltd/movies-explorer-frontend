import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../LogoImage/LogoImage";

function Logo() {
  return (
    <Link to="/main" className="logo">
      <LogoImage />
    </Link>
  );
}

export default Logo;
