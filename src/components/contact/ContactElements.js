import styled from 'styled-components'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const ContactHeader = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align:center;
    margin-top: 50px;
`

export const ContactCaption = styled.div`
    color: #08a3bd;
    overflow: hidden;
    font-weight: 400;
    font-family: 'Source Code Pro', monospace;
    font-size: 20px;
    @media screen and (max-width: 768px){
        font-size: 16px;
}
`

export const ContactForm = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: #f2f8ff;
    height: 400px;
    width: 600px;
    border: 3px solid #010b78;
`

export const FormGroup = styled.div`
    background: white;
    width: 60%;
`

export const ContactTitle = styled.div`
    color: #010b78;
    font-size: 80px;
    font-weight: 400;
    font-family: 'Staatliches', cursive;
    text-transform: capitalize !important;

@media screen and (max-width: 768px){
    text-align: center;
}

`

export const EmailGroup = styled.div`
    width: 60%;
    height: 150px;
    margin: 30px;
`
