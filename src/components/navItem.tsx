import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  label: string;
  routes: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  isActive,
  onClick,
  routes,
}) => {
  return (
    <NavLink to={routes} onClick={onClick}>
      <div
        className={`px-6 py-3.5 my-auto cursor-pointer transition-colors duration-300 ease-in-out 
        ${isActive ? 'border border-gray-100 bg-neutral-200 rounded-full text-zinc-900' : 'hover:bg-neutral-200 rounded-full'} 
        max-sm:py-2 max-sm:text-sm`}
      >
        {label}
      </div>
    </NavLink>
  );
};

export default NavItem;
