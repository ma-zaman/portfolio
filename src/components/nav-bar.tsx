import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_dark from '@icons/logo_dark.png';
import github from '@icons/github_dark.png';
import linkedin from '@icons/linkedin_dark.png';
import instagram from '@icons/instagram_dark.png';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateLink = (selectedLink: string) => {
    setActiveLink(selectedLink);
  };

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? 'scrolled ' : ''}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo_dark} roundedCircle alt="Logo" width={'100px'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => onUpdateLink('home')}
            >
              {t('nav_bar.home')}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active' : ''}
              onClick={() => onUpdateLink('skills')}
            >
              {t('nav_bar.skills')}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => onUpdateLink('projects')}
            >
              {t('nav_bar.projects')}
            </Nav.Link>
            <NavDropdown title={i18n.language} id="basic-nav-dropdown">
              {i18n.language !== 'en' && (
                <NavDropdown.Item onClick={() => switchLanguage('en')}>
                  en
                </NavDropdown.Item>
              )}
              {i18n.language !== 'fr' && (
                <NavDropdown.Item onClick={() => switchLanguage('fr')}>
                  fr
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://github.com/ma-zaman"
                target="_blank"
                className="px-1"
              >
                <Image src={github} alt="" width={'33px'} />
              </a>
              <a href="#" className="px-1">
                <Image src={instagram} alt="" width={'30px'} />
              </a>
              <a href="#" className="px-1">
                <Image src={linkedin} alt="" width={'30px'} />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
