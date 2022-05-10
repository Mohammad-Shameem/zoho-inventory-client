import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation, Pagination, EffectCoverflow, Virtual
} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './Categories.css'

const Categories = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://arcane-caverns-12434.herokuapp.com/categorie')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='mb-5'>

            <h2 className='mb-5'>Upcoming Items Category</h2>
            <div className=' mb-5 categorie' style={{ marginBottom: "50%" }}>
                <Swiper
                    modules={[Navigation, Pagination, EffectCoverflow, Virtual
                    ]}
                    effect="coverflow"
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        data.slice(0, 10).map(d => <SwiperSlide key={d._id}>
                            <div>
                                <div className='slider'>
                                    <img style={{ width: "250px", height: "250px" }} src={d.img} alt="" />
                                </div>
                                <div >
                                    <h5>Name: {d.name}</h5>
                                    <p>{`${(d.description).slice(0, 100)}`}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
            <div className='mt-5 categorie'>
                <Swiper
                    modules={[Navigation, Pagination, EffectCoverflow, Virtual
                    ]}
                    effect="coverflow"
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        data.slice(11, 21).map(d => <SwiperSlide key={d._id}>
                            <div>
                                <div className='slider'>
                                    <img style={{ width: "250px", height: "250px" }} src={d.img} alt="" />
                                </div>
                                <div >
                                    <h5>Name: {d.name}</h5>
                                    <p>{`${(d.description).slice(0, 100)}`}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>

    );
};

export default Categories;