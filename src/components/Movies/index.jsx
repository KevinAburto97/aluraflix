import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import MovieCard from '../MovieCard';
const Movies = ({peliculasData}) => {
    console.log(peliculasData)
    return (
    <>
        <Swiper
            slidesPerView={3}
            grid={{rows: 5, fill: 'row'}}
            spaceBetween={30}
            modules={[Grid]}
            className="mySwiper"
            breakpoints={{
                0:{
                    slidesPerView: 1,
                    spaceBetween: 10,
                    rows: 5
                },
                425: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    rows: 5
                },
                768:{
                    slidesPerView: 2,
                    spaceBetween: 10,
                    rows: 5
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    rows: 5
                }
            }}
        >
            {
                peliculasData.map((movie, id) => {
                    return <SwiperSlide key={id}>
                        <MovieCard movie={movie}/>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </>
    );
}

export default Movies;