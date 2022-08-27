import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroller} from 'react-scroll';

export const Nav = styled.nav`
    background-color: white;
    height: 80px;
    margin-top: -80px
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 24px rgba(0, 0, 0, 0.08);
`;

export const NavLogo = styled(LinkRouter)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    // margin-right: -22px;
    padding-top: 4px;
    margin-left: 1.5rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroller)`
    color: black;
    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #24C85B;
    }

    &:hover {
        color: #24C85B;
        transition: 0.2s all ease;
        border-bottom-width: medium;
        border-bottom-color: #24C85B;
    }
`