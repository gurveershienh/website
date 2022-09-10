import React from 'react'

import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsHeader,
    ProjectsContents,
    BannerWrapperR,
    BannerR,
    BannerWrapperL,
    BannerL,
    Project,
    ProjectName,
    ProjectDesc,
    ProjectUl,
    ProjectLi
} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectsWrapper>
            <ProjectsHeader>
                <h1>Projects</h1>
                <h2>Some of my noteworthy works.</h2>
            </ProjectsHeader>
            <ProjectsContents>
                <Project>
                    
                </Project>
                <BannerR>
                    <BannerWrapperR>
                        <ProjectName>
                            Project One
                        </ProjectName>
                        <ProjectDesc>
                            Non quam lacus suspendisse faucibus. 
                            Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. 
                            Felis eget nunc lobortis mattis aliquam faucibus. 
                            Vel eros donec ac odio tempor orci dapibus.
                        </ProjectDesc>
                        <ProjectUl>
                            <ProjectLi>
                                React.js
                            </ProjectLi>
                            <ProjectLi>
                                Styled Components
                            </ProjectLi>
                            <ProjectLi>
                                Rest API
                            </ProjectLi>
                        </ProjectUl>
                    </BannerWrapperR>
                </BannerR>
                <BannerL>
                    <BannerWrapperL>
                        <ProjectName>
                            Project Two
                        </ProjectName>
                        <ProjectDesc>
                            Non quam lacus suspendisse faucibus. 
                            Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. 
                            Felis eget nunc lobortis mattis aliquam faucibus. 
                            Vel eros donec ac odio tempor orci dapibus.
                        </ProjectDesc>
                        <ProjectUl>
                            <ProjectLi>
                                React.js
                            </ProjectLi>
                            <ProjectLi>
                                Styled Components
                            </ProjectLi>
                            <ProjectLi>
                                Rest API
                            </ProjectLi>
                        </ProjectUl>
                        </BannerWrapperL>
                </BannerL>
                <Project>
                    Project4
                </Project>
                <Project>
                    Project5
                </Project>
                <BannerR>
                    <BannerWrapperR>
                    <ProjectName>
                        Project Three
                    </ProjectName>
                    <ProjectDesc>
                        Non quam lacus suspendisse faucibus. 
                        Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. 
                        Felis eget nunc lobortis mattis aliquam faucibus. 
                        Vel eros donec ac odio tempor orci dapibus.
                    </ProjectDesc>
                    <ProjectUl>
                        <ProjectLi>
                            React.js
                        </ProjectLi>
                        <ProjectLi>
                            Styled Components
                        </ProjectLi>
                        <ProjectLi>
                            Rest API
                        </ProjectLi>
                    </ProjectUl>
                    </BannerWrapperR>
                </BannerR>
            </ProjectsContents>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects