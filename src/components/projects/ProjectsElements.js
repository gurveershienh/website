import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 200px;
    width: 100%;

    @media screen and (max-width: 768px){
        text-align:center;
        width: 100%;
        flex-direction: column;
        margin-top: 200px;
        padding: 0;
        height: fit-content;
        
    }

`
export const ProjectsWrapper = styled.div`

    display: flex;
    flex-direction: column;
    width: 80%;

`
export const ProjectsHeader = styled.div`
    
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        width: 100%;
    }
    
`

export const ProjectsContents = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 400px;
    grid-gap: 2em;
    padding: 50px 100px 0 0;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        border: 3px black solid;
    }
    

`

export const Project = styled.div`
    
    display: flex;
    background: #f2f8ff;
    border: solid 3px #010b78;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 900px) {
        display: none;
    }

`

export const BannerR = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 100%;
    

    

`

export const BannerWrapperR = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid #010b78;
    padding: 20px;
    background: #f2f8ff;

        `
export const BannerL = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-end;
    width: 100%;
    @media screen and (max-width: 768px){


`

export const BannerWrapperL = styled.div`
    display: flex;
    flex-direction: column;
    background: #f2f8ff;
    border: 3px solid #010b78;

    padding: 20px;
    
`

export const ProjectName = styled.div`
    font-family: 'Staatliches', cursive;
    font-size: 20px;
`

export const ProjectDesc = styled.div`
    font-family: 'Source Code Pro', 'monospace';
`

export const ProjectUl = styled.ul`
    display: flex;
    list-style: none;
    font-size: 16px;
    font-family: 'Source Code Pro', monospace;
    @media screen and (max-width: 768px){
        align-items:center;
        justify-content: center;
        width: 95%;
        margin: 0;
        display: none;
    }

`

export const ProjectLi = styled.li`

    border: 2px solid #010b78;
    font-size: 16px;
    color: #010b78;
    
    padding: 6.5px;
    background: #f2f8ff;
    margin:15px;



    @media screen and (max-width: 1330px){
        margin: 10px;
    }

`