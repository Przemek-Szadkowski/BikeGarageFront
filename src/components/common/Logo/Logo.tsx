import React from "react";
import { Link } from "react-router-dom";

import './Logo.css';

export const Logo = () => {
  return (
      <div className="main-logo">
          <Link to='/'>
              <img src="../logonaczarnym.jpg" alt="Garage logo"/>
          </Link>
      </div>
  );
};
