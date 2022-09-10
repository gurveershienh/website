import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    color: white;
    height: 80px;
    font-size: 1rem;
    position: fixed;
    top: 0;
    background-color: rgba(251, 252, 230, 0.9);
    z-index: 9999;
    transition: all 300ms ease-in-out;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        background-color: rgba(251, 252, 230, 0)
    }
`;

export const NavbarContainer =styled.div`

    display: flex;
    font-family: 'Source Code Pro', monospace;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
`;
export const NavLogo = styled(LinkR)`
    color: #010b78;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
}

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 25px;
        right: 10px;
        transform: translated(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #010b78;
    } 
`;

export const NavMenu = styled.ul`
    display: flex;
    color: #08a3bd;
    letter-spacing: 1.5px;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    padding: 0;
    height: 80px;
    width: fit-content;
`;

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #010b78;
    }

    &:hover {
        color: #010b78;
    }
`;

export const NavButton = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    background: #010b78;
    color: #0defff;
    white-space: nowrap;
    padding: 7px 10px 7px 10px;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    font-weight: 400;
    text-decoration: none;
    font-family: 'Source Code Pro', monospace;
    box-shadow: 
        3px -3px 0 -3px #8b8ef0, 3px -3px #8b8ef0,
        6px -6px 0 -3px #010b78, 6px -6px #010b78,
        9px -9px 0 -3px #8b8ef0, 9px -9px #8b8ef0;
        transition: box-shadow 1s, top 1s, left 1s;

    &:hover {
        box-shadow:
            0 0 0 -3px #8b8ef0, 0 0 #8b8ef0,
            0 0 0 -3px #010b78, 0 0 #010b78,
            0 0 0 -3px #8b8ef0, 0 0 #8b8ef0;
    }
    
`;