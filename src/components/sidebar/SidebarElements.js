import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f0e9cc;
    justify-content: center;
    align-items: center;
    top 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseBurger = styled(FaTimes)`
    position: relative;
    bottom: 290px;
    right: 0;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const Burger = styled.div`
    position: fixed;
    top: 1.2 rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`

export const SidebarWrapper = styled.div`
    color: #fff

`
export const SidebarLinkWrpr = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarLink = styled(LinkS)`
display: flex;
width: 150px;
justify-content: center;
align-items:center;
background: #010b78;
color: #0defff;
height: 40px;
margin-top 50px;

font-family: 'Source Code Pro', monospace;
font-size: 16px;

border: solid 1px black;
cursor: pointer;
box-shadow: 
    5px -5px 0 -3px #8b8ef0, 5px -5px #8b8ef0,
    10px -10px 0 -3px #010b78, 10px -10px #010b78,
    15px -15px 0 -3px #8b8ef0, 15px -15px #8b8ef0;
    transition: box-shadow 1s, top 1s, left 1s;

&:hover {
    box-shadow:
        0 0 0 -3px #8b8ef0, 0 0 #8b8ef0,
        0 0 0 -3px #010b78, 0 0 #010b78,
        0 0 0 -3px #8b8ef0, 0 0 #8b8ef0;
}

`




export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarButton = styled(LinkR)`
    display: flex;
    width: 150px;
    height: 100px;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    background: #010b78;
    color: #0defff;
    height: 40px;
    margin-top 50px;

    font-family: 'Source Code Pro', monospace;
    font-size: 16px;

    border: solid 1px black;
    cursor: pointer;
    box-shadow: 
        5px -5px 0 -3px #8b8ef0, 5px -5px #8b8ef0,
        10px -10px 0 -3px #010b78, 10px -10px #010b78,
        15px -15px 0 -3px #8b8ef0, 15px -15px #8b8ef0;
        transition: box-shadow 1s, top 1s, left 1s;

    &:hover {
        box-shadow:
            0 0 0 -3px #8b8ef0, 0 0 #8b8ef0,
            0 0 0 -3px #010b78, 0 0 #010b78,
            0 0 0 -3px #8b8ef0, 0 0 #8b8ef0;
    }

`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max_width: 480px){

        grid-template-rows: repat(6,60px);

    }
`