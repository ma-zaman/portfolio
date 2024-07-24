import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import { Image } from 'react-bootstrap';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() =>{
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateLink = (selectedLink: string) => {
    setActiveLink(selectedLink)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled bg-body-tertiary" : "bg-body-tertiary"}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} roundedCircle  alt='Logo' width={'100px'}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => onUpdateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => onUpdateLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><Image src={github} alt="" width={'25px'}/></a>
              <a href="#"><Image src={instagram} alt="" width={'30px'}/></a>
              <a href="#"><Image src={linkedin} alt="" width={'28px'}/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;