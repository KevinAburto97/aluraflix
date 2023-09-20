import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { fullImgPath } from "../UI/variables";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { getMovies } from "../../data/movieClient";
import styled from "@emotion/styled";

const Banner = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]),
        MovieContainer = styled.div`
            position: absolute;
            top: 10vw;
            left: 1.75rem;
            width: 50%;
            height: 100%;
            z-index: 99;
        `,
        MovieTitle = styled.h1`
            font-family: 'Prata', serif;
        `,
        MovieDescription = styled.span`
            font-family: 'Sorts Mill Goudy', serif;
        `


    useEffect(() => {
        getMovies("/3/movie/upcoming?language=es-PE&page=1").then((response) => {
            setUpcomingMovies( response.results)
        })
    }, [])

    return(
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}  
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                slidesPerView={1}
                centeredSlides={true}
                className="mySwiper"
            >
                {
                    upcomingMovies.map((movie) => {
                        return <SwiperSlide key={movie.id}>
                            <MovieContainer color="#fff">
                                <MovieTitle>{movie.title}</MovieTitle>
                                <MovieDescription>{movie.overview}</MovieDescription>
                            </MovieContainer>
                            <div className="overlay"></div>
                            <img className="swiper-image" src={fullImgPath + movie.backdrop_path} alt={movie.title} style={{width: "100%", height: "80vh"}}/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
    );
}

export default Banner;