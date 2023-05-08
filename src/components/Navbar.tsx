import React from "react";
import './styles/Navbar.scss';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { HomeRounded, AccountBoxRounded, SummarizeRounded, ContactMailRounded, DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import { Link } from 'react-scroll';

const sections = [
  {name: 'Home', icon: HomeRounded},
  {name: 'About', icon: AccountBoxRounded},
  {name: 'Portfolio', icon: SummarizeRounded},
  {name: 'Contact', icon: ContactMailRounded}
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [defaultTheme, setTheme] = useState(true);
  const [selectorTop, setSelectorTop] = useState(8);

  function SetMenuSection(index: number){
    setActiveSection(sections[index].name);
    setSelectorTop(index * 66 + 8);
  }

  return (
    <Drawer variant="permanent" className="sidebar">
      <List>
        <div className="selector" style={{ top: selectorTop + "px" }} />
        
        {sections.map((section, index) => 
          <ListItem
            key={index}
            button
            selected={activeSection === section.name}
            className="list-item"
          >
            <Link
              activeClass="active"
              to={section.name}
              spy={true}
              smooth={true}
              duration={700}
              onSetActive={() => SetMenuSection(index)}
              onClick={() => SetMenuSection(index)}
            >
              <ListItemIcon>
                <section.icon />
              </ListItemIcon>
              <ListItemText primary={section.name} />
            </Link>
          </ListItem>
        )}

        <ListItem
          button
          onClick={() => setTheme(!defaultTheme)}
          className="list-item menu-setting"
        >
          <ListItemIcon>
            { defaultTheme ?
            <DarkModeRounded />
            : <LightModeRounded/> }
          </ListItemIcon>
          <ListItemText primary="Theme" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;