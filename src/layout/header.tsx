import React, { useState } from 'react';
import NavItem from '@/components/navItem';
import ContactButton from '@/components/contactButton';
import Logo from '@/components/logo';

const navItems = [
  { id: 1, label: 'Home', isActive: true, routes: '/' },
  { id: 2, label: 'Get Involved', isActive: false, routes: '/get_involved' },
  { id: 3, label: 'Donate', isActive: false, routes: '/donate' },
  { id: 4, label: 'Impact Areas', isActive: false, routes: '/impact_areas' },
  {
    id: 5,
    label: 'Success Stories',
    isActive: false,
    routes: '/success_stories',
  },
  { id: 6, label: 'News', isActive: false, routes: '/news' },
];

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active nav item
  const [menuOpen, setMenuOpen] = useState(false); // State to track the menu visibility on small screens

  return (
    <header className="flex flex-col items-center px-10 lg:px-32 pt-10 max-md:px-5 max-w-full">
      <nav className="flex flex-wrap gap-10 justify-between items-center p-4 w-full bg-slate-50 border border-gray-200 rounded-full max-md:px-5">
        {/* Left section: Logo + NavItems */}
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden md:flex gap-7 lg:gap-10 items-center">
            {/* Navigation items for larger screens */}
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                isActive={index === activeIndex}
                onClick={() => {
                  setActiveIndex(index);
                  // navigate(item.routes);
                }} // Update active index on click
                routes={item.routes}
              />
            ))}
          </div>
        </div>

        {/* Right section: Contact Button (always visible) */}
        <div className="hidden md:flex">
          <ContactButton />
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="block md:hidden bg-gray-100 p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Collapsible Menu for small screens */}
      {menuOpen && (
        <div className="flex flex-col items-start gap-4 mt-4 w-full md:hidden bg-gray-100 p-4 rounded-lg">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              isActive={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                setMenuOpen(false); // Close menu after selecting an item
              }}
              routes={item.routes}
            />
          ))}
          {/* Contact button in the collapsible menu */}
          <ContactButton />
        </div>
      )}
    </header>
  );
};

export default Header;
