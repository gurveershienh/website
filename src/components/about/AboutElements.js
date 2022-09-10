import styled, {keyframes} from 'styled-components'

export const AboutContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    position: relative;

    
    
    @media screen and (max-width: 1330px){
        flex-direction: column;
        
        width: 100%;
        align-items: center;
    }
    
    @media screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
        margin-top: 300px;
        padding: 0;
        height: fit-content;
        
    }

        
`

export const AboutContents = styled.div`

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: 500px;
    width: 80%;

    @media screen and (max-width: 1350px){
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    @media screen and (max-width: 768px){
        
        text-align: center;
        width: 100%;
        justify-content: space-between;
    }
 
`

export const AboutHeader = styled.div`

    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        width: 100%;
    }
    
`

export const AboutH1 = styled.div`

    color: #010b78;
    font-size: 50px;
    font-family: 'Staatliches', cursive;
    text-transform: capitalize !important;

    @media screen and (max-width: 768px){
        text-align: center;
    }


`


export const AboutH2 = styled.div`

    color: #08a3bd;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
    font-size: 24px;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }

`



export const AboutWrapper = styled.div`

    padding-right: 50px;
    display: flex;
    margin-top: 30px;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        align-items: center;
        justify-content: space-between;
    }

`

export const Biography = styled.p`

    
    font-family: 'Source Code Pro', monospace;
    color: #010b78;
    padding-right: 50px;
    font-size: 18px;
    margin: 30px 0 30px 0;

    @media screen and (max-width: 768px){
        width: 95%;
        font-size: 14px;
        margin: 30px 5px 30px 5px;
        padding: 0;
    }
`
export const AboutTechWrapper = styled.div`

    display: flex;
    padding: 50px 0px 0px 0px;
    flex-direction: column;
    @media screen and (max-width: 1350px) {
        padding-top: 20px
    }
    @media screen and (max-width: 768px){
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

`   
export const TechCatWrapper = styled.div`

    display: flex;
    flex-direction: column;
    margin: 10px;
`
export const TechCatgry = styled.div`

    font-size: 36px;
    font-family: 'Staatliches', cursive;
    color: #010b78;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const TechUl = styled.ul`
    display: flex;
    list-style: none;
    font-size: 16px;
    font-family: 'Source Code Pro', monospace;
    @media screen and (max-width: 768px){
        font-size: 14px;
        align-items: center;
        justify-content: center;
        width: 95%;
        margin-bottom: 20px;
    }

`

export const TechLi = styled.li`

    border: 2px solid #010b78;
    color: #010b78;
    
    padding: 6.5px;
    background:#f2f8ff;
    margin:15px;



@media screen and (max-width: 1330px){
    margin: 8px;
    padding: 5px;
}

`