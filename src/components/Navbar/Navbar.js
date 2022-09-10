import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import Button from '../Button';

const Navbar = (props) => {
    return(
            <Nav>
                <NavContainer>
                    <NavLogo to="/">BonoBooks</NavLogo>
                    
                    <MobileIcon onClick={props.toggle}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="products">Product</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="help">Help</NavLinks>
                        </NavItem>
                        <Button>Download Now</Button>
                    </NavMenu>
                </NavContainer>
            </Nav>
    )
}

export default Navbar