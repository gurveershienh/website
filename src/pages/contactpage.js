import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Contact from '../components/contact'


const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Contact/>
        </>
  )
};

export default ContactPage;