import React from 'react';
import WelcomeModal from './assets/components/WelcomeModal';
import Navbar from '../src/assets/components/Navbar';
import HeroSection from '../src/assets/components/HeroSection';
import Contact from '../src/assets/components/Contact';
import Experience from '../src/assets/components/Experience';
import Education from '../src/assets/components/Education';
import Footer from '../src/assets/components/Footer';
import Project from './assets/components/Project';
import Skills from './assets/components/Skills';
import BackToTop from './assets/components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <>
            <Navbar />
            <WelcomeModal />
            <BackToTop />
            <div className="pt-24 bg-base-200">
                <HeroSection />
                <Experience />
                <Education />
                <Project />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
export default App;