import React from 'react';
import './ScrollUp.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollup = document.querySelector(".scrollUp")
        //when the scroll is height then 560 viewport height, add the show-scroll class to tag with the scroll-top class

        if(this.scrollY >= 560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll")
    })

    return (
        <a href="#home" className="scrollUp">
            <i className="uil uil-arrow-up scrollUp__icon"></i>
        </a>
    );
};

export default ScrollUp;