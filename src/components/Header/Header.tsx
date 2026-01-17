import { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined, PhoneOutlined } from '@ant-design/icons';

import './Header.scss';
import logo from '@/assets/sakthiLogo.png';

const navItems = [
  { key: 'home', label: <a href="#home">Home</a> },
  { key: 'services', label: <a href="#services">Services</a> },
  { key: 'about', label: <a href="#about">About</a> },
  { key: 'testimonials', label: <a href="#testimonials">Testimonials</a> },
  { key: 'contact', label: <a href="#contact">Contact</a> },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="headerContainer">

        {/* Logo – always visible */}
        <div className="logo">
          <img src={logo} alt="Sakthi Childrens Hospital" />
          <div className="logoText">
            <div className="title">SAKTHI</div>
            <div className="subtitle">CHILDRENS HOSPITAL</div>
          </div>
        </div>

        {/* MENU + CALL → ≥ 920px */}
        <div className="hidden tab:flex headerNav">
          <Menu
            mode="horizontal"
            items={navItems}
            overflowedIndicator={null}
          />
        </div>

        <div className="hidden tab:flex">
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<PhoneOutlined />}
            href="tel:+919999999999"
            className="callBtn"
          >
            Call Now
          </Button>
        </div>

        {/* HAMBURGER → < 920px */}
        <button
          className="tab:hidden hamburger"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <MenuOutlined />
        </button>

      </div>

      {/* Drawer for < 920px */}
      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Menu
          mode="vertical"
          items={navItems}
          onClick={() => setOpen(false)}
        />

        <Button
          type="primary"
          block
          icon={<PhoneOutlined />}
          href="tel:+919999999999"
          className="mt-6 callBtn"
        >
          Call Now
        </Button>
      </Drawer>
    </header>
  );
};

export default Header;
