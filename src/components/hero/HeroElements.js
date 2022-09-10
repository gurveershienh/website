import styled from 'styled-components'


export const HeroContainer = styled.div`
    
    display: flex;
    justify-content: center;
    margin-top: 80px;
    height: 800px;
    position: relative;
    z-index: 1;
    width: 100%;



    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media screen and {max-width: 480px} {
        width: 100%;
        font-size: 32px;
    }
   
`

export const HeroContent = styled.div`
    
    z-index: 3;
    height: 500px;
    position: absolute;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding: 0;

    @media screen and (max-width: 768px) {
        width: 100vw;
        padding: 0;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    @media screen and {max-width: 480px} {
        font-size: 32px;
    }
`

export const HeroIntro = styled.div`

    color: #08a3bd;
    height: 20px;
    font-family: 'Source Code Pro', monospace;
    font-size: 20px !important;
    font-weight: 500;
    text-align: left;

    @media screen and (max-width: 768px) {
        text-align: center;
        margin-top: 0;
    }

    @media screen and {max-width: 480px} {
        font-size: 32px;
    }
`
    


export const HeroName = styled.div`

    color: #010b78;
    font-family: 'Staatliches', cursive;
    font-size: 90px !important;
    margin-top: 24px;
    padding:0;
    text-transform: uppercase;
    letter-spacing: 5px;




    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and {max-width: 480px} {
        font-size: 32px;
    }

`

export const HeroSbtWrapper = styled.div`

    display: flex;
`

export const HeroSubtitle =styled.div`

    color: #8b8ef0;
    font-family: 'Staatliches', cursive;
    font-size: 58px !important;
    letter-spacing: 5px;
    margin-top: 0;
`


export const HeroP = styled.p`

    margin-top: 24px;
    color: #010b78;
    font-family: 'Source Code Pro', monospace;
    font-size: 24px !important;

    @media screen and (max-width: 1350px) {
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }

    @media screen and {max-width: 480px} {
        font-size: 18px;
    }
`



export const HeroBtn = styled.div`
    
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

