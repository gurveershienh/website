import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <About/>
            <Projects/>
        </>
  )
};

export default Home;