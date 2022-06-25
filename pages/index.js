import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

import style from '../styles/index.module.css'



export default function Home() {
  return (
    <div>
      <div>
          <Navbar fixed="top" collapseOnSelect expand="md" className={style.navbar}>
            <Container className={style.wrapper}>
              <img src='/images/logo.svg'></img>
              <Navbar.Brand className={style.brandName} href="#home">BonoBooks</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav bsPrefix={style.nav}>
                  <Nav.Link bsPrefix={style.navLink} href="#features">Product</Nav.Link>
                  <Nav.Link bsPrefix={style.navLink} href="#about-us">About Us</Nav.Link>
                  <Nav.Link bsPrefix={style.navLink} href="#help">Help</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>

      <section id='home'>
        <div className={style.intro}>
          <Container>
            <Row>
              <Col>
                <div className={style.center}>
                  <h1 className={style.header}>BonoBooks</h1>
                  <p className={style.flavor}>The peer to peer textbook renting app made to make your life easier!</p>
                  <Button className={style.downloadButton} href="https://apps.apple.com/us/app/bonobooks/id1586423229"><AppleIcon/><span className={style.downloadText}>Download for IOS</span></Button>
                  <Button className={style.downloadButton} href="https://play.google.com/store/apps/details?id=com.bonobooks.ugs"><AndroidIcon/><span className={style.downloadText}>Download for Android</span></Button>
                </div>
              </Col>

              <Col>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

    </div>
  )
}
