import React, {useState} from 'react'
import Navbar from '../navbar/index'

import {  
  ContactContainer,
  ContactForm,
  ContactHeader,
  ContactTitle,
  ContactCaption,
  EmailGroup,
  FormGroup
} from './ContactElements'



const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Contact Me</ContactTitle>
      </ContactHeader>
      <ContactForm>

        <EmailGroup>
          
          <input 
          type='text' 
          id='name' 
          name='name'
          placeholder='Name'
          tabindex='1'
          required >
          </input>

          <input 
          type='email' 
          id='email ' 
          name='email'
          placeholder='Email'
          tabindex='2'
          required >
          </input>

        </EmailGroup>
        
        <FormGroup>
        <input 
          type='text' 
          id='subject' 
          name='subject'
          placeholder='Subject'
          tabindex='3'
          required ></input>
          
          
          
        <input 
          type='text' 
          id='message ' 
          name='message'
          placeholder='Type your message...'
          tabindex='4'
          required ></input>
        </FormGroup>
      </ContactForm>
    </ContactContainer>
  )
}

export default Contact