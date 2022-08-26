import { Fragment } from "react";
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return(
        <Fragment>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">BonoBooks</NavLogo>
                    
                    <MobileIcon>
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
        </Fragment>
    )
}

export default Navbar