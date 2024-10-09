import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

function HeroCarousel() {


    const items = [
        { 
            caption: ()=> (
                <div>
                    <div className="caption absolute left-1/2 md:left-[10%] top-1/2 -translate-x-1/2  sm:-translate-x-0 -translate-y-1/2">
                    <div className="row max-w-sm lg:max-w-lg ">
                        <h1 className='text-3xl lg:text-5xl xl:text-6xl text-white font-bold mb-4'>Squit Game</h1>
                        <button className='btn hidden md:block btn-primary mt-0 md:mt-5'>
                                <Link to="/movie/62ed7bf739c26db339f8649c">Watch Now</Link>
                            </button>
                    </div>
                    </div>
                </div>
            ),
            image: "/1191374.jpg" 
        },
        { 
            caption: ()=> (
                <div>
                    <div className="caption absolute left-1/2 md:left-[10%] top-1/2 -translate-x-1/2  sm:-translate-x-0 -translate-y-1/2">
                    <div className="row max-w-sm lg:max-w-lg ">
                        <h1 className='text-3xl lg:text-5xl xl:text-6xl text-white font-bold mb-4'>Money Heists Session 2</h1>
                        <button className='btn hidden md:block  btn-primary mt-0 md:mt-5'>
                                <Link to="/movie/62ed7be039c26db339f8649a">Watch Now</Link>
                            </button>
                    </div>
                    </div>
                </div>
            ),
            image: "/3034968.jpg" 
        },
        { 
            caption: ()=> (
                <div>
                    <div className="caption absolute left-1/2 md:left-[10%] top-1/2 -translate-x-1/2  sm:-translate-x-0 -translate-y-1/2">
                        <div className="row max-w-sm lg:max-w-lg  ">
                            <h1 className='text-3xl lg:text-5xl xl:text-6xl text-white font-bold mb-4'>The Lost Girl</h1>
                            <button className='hidden md:block btn  btn-primary mt-0 md:mt-5'>
                                <Link to="/movie/62ed7bf739c26db339f8649e">Watch Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ),
            image: "/slider-hm4-1.jpg" 
        },
        

    ]



    return (

        <div className="carousel w-full">


            <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    { items.map((item, i)=>(
                        <SwiperSlide key={i} className="relative">
                            
                            <div >
                                <img className="brightness-90" src={item.image} alt="slider image" />
                            </div>
                            { item.caption() }

                        </SwiperSlide>
                    )) }
                </Swiper>
            
        </div>
    )
}

export default HeroCarousel