import React, { useState, useEffect } from 'react';
import image from '../Home/image/image.jpg'
import image2 from '../Home/image/image2.jpg'
import image3 from '../Home/image/image3.jpg'
import style from './Home.module.css'

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        <img key={image} src={image} />,
        <img key={image2} src={image2} />,
        <img key={image3} src={image3} />
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