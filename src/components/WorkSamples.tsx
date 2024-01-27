
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { slides } from '../data/data';

interface WordProps {
    slidesData: {
        id: number;
        image: string;
        textLink: string;
    };
}

export default function WorkSamples() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth > 1024) {
            setSlidesPerView(3);
        } else if (screenWidth > 600) {
            setSlidesPerView(2);
        }
         else if (screenWidth < 600) {
            setSlidesPerView(1);
        }
    }, [screenWidth]);
    return (
        <div className="bg-gradient-to-r from-[#766EFF] to-[#87F1FF] h-[400px] md:mb-64 mb-96">
        <section className="container mx-auto p-2 sm:px-3 lg:px-5 bg-white rounded-md shadow-xl">
            <h1 className='font-bold text-center text-5xl p-8' id='Work-samples'>Work samples</h1>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            > 
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className=' h-[500px] relative bottom-1'>
                            <img src={slide.image} className="absolute w-full mx-auto rounded-lg" alt="profile" />
                            <a className='absolute bg-slate-200 opacity-70 w-full p-3 text-center text-sm text-blue-500 rounded-md shadow-md top-40 left-0' href={slide.textLink} target='blank'>{slide.textLink}</a>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            </section>
            </div>
    )
}
