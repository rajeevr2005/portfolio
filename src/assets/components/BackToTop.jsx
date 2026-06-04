import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 4000, smooth: true });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="btn btn-accent text-white btn-circle shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                aria-label="Back to Top">
                <FaArrowUp size={20} />
            </button>
        </div>
    );
};

export default BackToTop;
