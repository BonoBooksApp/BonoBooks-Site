import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

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
                    </NavMenu>
                </NavContainer>
            </Nav>
    )
}

export default Navbar