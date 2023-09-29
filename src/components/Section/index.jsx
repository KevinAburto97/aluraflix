import React, { useEffect, useState } from "react";
import { getMovies } from "../../data/movieClient";
import {Typography} from '@mui/joy';
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SkeletonContainer from "../SkeletonContainer";
import MovieCard from "../MovieCard";

const Section = ({board}) => {
    const 
        [movies, setMovies] = useState([])
    
    useEffect(() => {
        getMovies(board.url).then((response) => {
            setMovies(response.results)
        })
    }, [])

    return(
        <Container maxWidth={false} disableGutters>
            <Typography textAlign="center" padding="1rem" color="#fff" fontSize="36px" fontWeight="lg">{board.title}</Typography>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                loop={true}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768:{
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    }
                }}
                modules={[Navigation]}
                className="mySwiper">
                {
                    movies ? movies.map((movie) => {
                        return <SwiperSlide key={movie.id} >
                                <MovieCard movie={movie}/>
                        </SwiperSlide>
                    }) : <SkeletonContainer/>
                }
            </Swiper>
        </Container>
        
    )
}
/*
<video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
    </video>
*/
export default Section;