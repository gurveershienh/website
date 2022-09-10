import React from 'react'
import {
    AboutContainer,
    AboutHeader,
    AboutH1,
    AboutH2,
    AboutContents,
    AboutWrapper,
    Biography,
    AboutTechWrapper,
    TechCatWrapper,
    TechCatgry,
    TechUl,
    TechLi
} from './AboutElements'

const About = () => {
  return (
    <AboutContainer id='about'>
      <AboutContents>
        <AboutHeader>
            <h1>About Me</h1>
            <h2>A short summary of my skills and goals.</h2>
            <Biography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus. Nullam ac tortor vitae purus faucibus ornare. Adipiscing bibendum est ultricies integer quis auctor. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend. In hendrerit gravida rutrum quisque non. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Risus viverra adipiscing at in tellus integer. Id aliquet risus feugiat in ante metus dictum at. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Vestibulum morbi blandit cursus risus at ultrices mi tempus. </Biography>
        </AboutHeader>

          <AboutTechWrapper>
            <TechCatWrapper>
              <TechCatgry>
                Languages
              </TechCatgry>
              <TechUl>
                <TechLi>
                  Python
                </TechLi>
                <TechLi>
                  JavaScript
                </TechLi>
                <TechLi>
                  SQL
                </TechLi>
                <TechLi>
                  HTML/CSS
                </TechLi>
              </TechUl>
              </TechCatWrapper>
              <TechCatWrapper>
              <TechCatgry>
                Frameworks/Libraries
              </TechCatgry>
              <TechUl>
                <TechLi>
                  React.js
                </TechLi>
                <TechLi>
                  Pygame
                </TechLi>
                <TechLi>
                  Pandas
                </TechLi>
                <TechLi>
                  Numpy
                </TechLi>
              </TechUl>
              </TechCatWrapper>
              <TechCatWrapper>
              <TechCatgry>
                Tools/Technologies
              </TechCatgry>
              <TechUl>
                <TechLi>
                  Git
                </TechLi>
                <TechLi>
                  MongoDB
                </TechLi>
                <TechLi>
                  Node.js
                </TechLi>
              </TechUl>
              </TechCatWrapper>
          </AboutTechWrapper>
  
      </AboutContents>
    </AboutContainer>
  )
}

export default About