import React, { useState, useEffect } from 'react';
import image from '../Home/image/image.jpg'
import image2 from '../Home/image/image2.jpg'
import image3 from '../Home/image/image3.jpg'
import L1 from '../Home/image/L1.jpg'
import L2 from '../Home/image/L2.jpg'
import L3 from '../Home/image/L3.jpg'
import style from './Home.module.css'

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        <img key={L1} src={L1} />,
        <img key={L2} src={L2} />,
        <img key={L3} src={L3} />
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === images.length - 1 ? 0 : current + 1
                return res
            })
        }, 3000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImgIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={style.slider}>
            <div className={style.sliderImgSliderImgPrev}
                key={prevImgIndex}>
                {images[prevImgIndex]}
            </div>
        </div>
    );
};

export default Slider;