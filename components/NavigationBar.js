import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import style from '../styles/nav.module.css'

export default function NavigationBar() {
    return(
      <div className={style.navbar}>
          <Navbar collapseOnSelect expand="md">
            <Container className={style.wrapper}>
              <img src='/images/logo.svg'></img>
              <Navbar.Brand className={style.brandName} href="#home">BonoBooks</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav bsPrefix={style.nav}>
                  <Nav.Link bsPrefix={style.navLink} href="#features">Product</Nav.Link>
                  <Nav.Link bsPrefix={style.navLink} href="#pricing">About Us</Nav.Link>
                  <Nav.Link bsPrefix={style.navLink} href="#help">Help</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
}