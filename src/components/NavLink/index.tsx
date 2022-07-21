import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MaterialUiNavLink, NavLinkContainer } from './styles';

interface NavlinkProps {
  path: string;
  text: string;
}

const NavLink: React.FC<NavlinkProps> = ({ path, text }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <NavLinkContainer>
      <Link to={path}>
        <MaterialUiNavLink isActive={isActive} variant="h4" underline="none">
          {text}
        </MaterialUiNavLink>
      </Link>
    </NavLinkContainer>
  );
};

export default NavLink;
