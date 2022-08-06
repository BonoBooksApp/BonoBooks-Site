import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

import Embed from './Embed';
import style from '../styles/index.module.css'



export default function Home() {
  return (
    <div className={style.body}>
      <div>
          <Navbar fixed="top" collapseOnSelect expand="md" className={style.navbar}>
            <Container className={style.wrapper}>
              <img src='/images/logo.svg'/>
              <Navbar.Brand className={style.brandName} href="#home">BonoBooks</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.toggler}/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" bsPrefix={style.nav}>
                  <Nav.Link bsPrefix={style.navLink} href="#products">Product</Nav.Link>
                  <Nav.Link bsPrefix={style.navLink} href="#about-us">About Us</Nav.Link>
                  <Nav.Link bsPrefix={style.navLink} href="#help">Help</Nav.Link>
                  {/* <Nav.Link bsPrefix={style.navLink}>Download Now</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
              <Button className={style.quickDownload}>Download Now!</Button>
            </Container>
        </Navbar>
      </div>

      <section id='home'>
        <div className={style.intro}>
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <div className={style.center}>
                  <h1 className={style.header}>BonoBooks</h1>
                  <p className={style.flavor}>The peer to peer textbook renting app made to make your life easier!</p>
                  <Button className={style.downloadButton} href="https://apps.apple.com/us/app/bonobooks/id1586423229"><AppleIcon/><span className={style.downloadText}>Download for IOS</span></Button>
                  <Button className={style.downloadButton} href="https://play.google.com/store/apps/details?id=com.bonobooks.ugs"><AndroidIcon/><span className={style.downloadText}>Download for Android</span></Button>
                </div>
              </Col>

              <Col sm={12} md={6}>
                <div className={style.imageSection}>
                  <img className={`${style.phone1} ${style.image}`} src="/images/iphone.svg"/>
                  {/* <img className={`${style.phone2} ${style.image}`} src='/images/iphone.svg'/> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section id="products">
        <div className={style.product}>
          <Container>
            <Row style={{margin:'0'}}>
              <Card className={style.fullCard}>
                <Card.Body>
                  <Card.Title className={style.cardTitle}>What Is BonoBooks?</Card.Title>
                  <Card.Text>
                    Feeling tired of buying and pirating textbooks for your classes? Tired of seeing 
                    your textbooks gathering dust after just one semester? Well worry no more! With 
                    BonoBooks, we offer you a cheap and easy way to get the resources you need for your
                    next class!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col sm={12} md={6}>
                <Card className={style.card}>
                  <Card.Body>
                    <Card.Title>Step 1: Lender Puts Up Book</Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={6}>
                <Card className={style.card}>
                    <Card.Body>
                      <Card.Title>IMG</Card.Title>
                      <Card.Text>

                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col sm={12} md={6}>
                  <Card className={style.card}>
                    <Card.Body>
                      <Card.Title>IMG</Card.Title>
                      <Card.Text>

                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>

              <Col sm={12} md={6}>
                <Card className={style.card}>
                  <Card.Body>
                    <Card.Title>Step 2: Renter Finds Book</Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col sm={12} md={6}>
                <Card className={style.card}>
                  <Card.Body>
                    <Card.Title>Step 3: Users Exchange Books</Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={6}>
                <Card className={style.card}>
                  <Card.Body>
                    <Card.Title>IMG</Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row style={{margin:'0'}}>
              <Card className={style.fullCard}>
                <Card.Body>
                  <Card.Title className={style.cardTitle}>IMG</Card.Title>
                  <Card.Text>
                    IMG
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </section>

      <section id='about-us'>
        <div className='youtube'>
          <Embed embedId='grzI7N0DVms'/>
        </div>
      </section>

    </div>
  )
}
