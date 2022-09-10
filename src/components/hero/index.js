import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import {
    HeroContainer,  
    HeroContent,
    HeroIntro,
    HeroName,
    HeroSbtWrapper,
    HeroSubtitle,
    HeroP,
    HeroBtn
} from './HeroElements'
import {Logo} from '../../images/uwlogo.png'


const Hero = () => {
  return (
    <HeroContainer id='hero'>
    <HeroContent>
        <HeroIntro>Hello my name is</HeroIntro>
        <HeroName>Gurveer SHIENH</HeroName>
        <HeroSubtitle>Student at University of Waterloo</HeroSubtitle>
        
        <HeroP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </HeroP>
        <HeroBtn to='projects'
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
        offset={-80}

        >VIEW PROJECTS</HeroBtn>
    </HeroContent>
  </HeroContainer>

  )
}

export default Hero