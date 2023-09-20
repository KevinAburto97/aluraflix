import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getMovies } from "../../data/movieClient";
import Favorite from '@mui/icons-material/Favorite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import {AspectRatio, Typography, Link, Divider, Box, Card, CardContent, CardOverflow, CardCover} from '@mui/joy';
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { imgPath } from "../UI/variables";
import 'swiper/css';
import 'swiper/css/navigation';

const Section = ({board}) => {
    const 
        [movies, setMovies] = useState([]),
        [showVideo, setShowVideo] = useState(false)
    
    useEffect(() => {
        getMovies(board.url).then((response) => {
            setMovies(response.results)
        })
    }, [])

    const loadMovie = async (id) => {
        try {
            const response = await getMovies(`3/movie/${id}/videos?language=es-PE`),
            trailer = response.results[0];

            if(trailer){
                const trailerKey = trailer.key
                return `https://www.youtube.com/embed/${trailerKey}`;
            }
        } catch (error) {
            console.error("Error al obtener el trailer:", error);
            return null;
        }
    }

    /*const handleMouse = (id) => {
        let img = document.getElementById(`img-${id}`),
        video = document.getElementById(`video-${id}`)
        img.style.display = (showVideo) ? "block" : "none"
        video.style.display = (!showVideo) ? "block" : "none"
    }*/

    return(
        <Container maxWidth={false} disableGutters>
            <Typography textAlign="center" padding="1rem" color="#fff" fontSize="36px" fontWeight="lg">{board.title}</Typography>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                loop={true}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    '@1.50': {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper">
                {
                    movies.map((movie) => {
                        return <SwiperSlide key={movie.id} onMouseEnter={(e) => {
                        /* let url = await loadMovie(movie.id),
                                iframe = document.getElementById(`iframe-${movie.id}`)
                            //setShowVideo(true)
                            handleMouse(movie.id)

                            if(iframe.src.toLowerCase().indexOf("youtube") === -1)
                                iframe.src = `${url}`*/
                        }}
                        onMouseLeave={ (e) => {
                                //setShowVideo(false)
                                //handleMouse(movie.id)
                            }
                        }>
                                <Card className="movieContent" variant="outline" sx={{width: 300, height: 'auto', bgcolor: '#202124', p: 0, boxShadow: 'lg'}}>
                                    <CardOverflow>
                                        <AspectRatio ratio="4/3">
                                            {/*
                                                    <div id="video-container">
                                                        <img 
                                                            src={imgPath + movie.poster_path}
                                                            alt={movie.title}
                                                            id={`img-${movie.id}`}
                                                            style={{ objectFit: 'contain'}}
                                                        />
                                                        <div id={`video-${movie.id}`} style={{display: "none"}}>
                                                            <iframe
                                                            id={`iframe-${movie.id}`}
                                                            style={{width: "100%", height: "100%"}}
                                                            src=""
                                                            allow="autoplay"
                                                            allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    </div>   
                                                    >*/}     
                                            <figure>
                                                <img 
                                                    src={imgPath + movie.poster_path}
                                                    alt={movie.title}
                                                    id={`img-${movie.id}`}
                                                    style={{ objectFit: 'contain'}}
                                                />
                                            </figure> 
                                            <CardCover
                                                className="gradient-cover"
                                                sx={{
                                                    '&:hover, &:focus-within': {
                                                    opacity: 1,
                                                    },
                                                    opacity: 0,
                                                    transition: '0.1s ease-in',
                                                    background: 'rgba(0,0,0,0.5)'
                                                }}
                                                >
                                                {/* The first box acts as a container that inherits style from the CardCover */}
                                                <div>
                                                    <Link href={`/watch/${movie.id}`}>
                                                        <Box
                                                        sx={{
                                                            p: 2,
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}
                                                        >
                                                            <PlayIcon sx={{width: 64,height: 64, color:'#DB202C'}} />
                                                        </Box>
                                                    </Link>
                                                </div>
                                                </CardCover>                         
                                        </AspectRatio>
                                    </CardOverflow>
                                    <CardContent orientation="vertical">
                                        <Typography level="title-md" textAlign="center">
                                            <Link underline="none" href="#"
                                                level="body-lg"
                                                sx={{
                                                    ml: '0.75rem',
                                                    color: 'danger.plainColor',
                                                }}>
                                                    {(movie.title) ? movie.title : movie.name}
                                            </Link>
                                        </Typography>
                                    </CardContent>
                                    <CardContent orientation="horizontal">
                                        <CardContent orientation="horizontal">
                                            <Typography level="body-sm" textAlign="center">
                                                <Link underline="none"
                                                    level="body-lg"
                                                    sx={{
                                                        ml: '0.75rem',
                                                        color: '#fff',
                                                    }}>
                                                    {(movie.release_date) ? movie.release_date : movie.first_air_date}
                                                </Link>
                                            </Typography>
                                        </CardContent>
                                        <Divider orientation="vertical"/>
                                        <CardContent orientation="vertical">
                                            <Link
                                                level="body-xs"
                                                underline="none"
                                                startDecorator={<Favorite />}
                                                sx={{
                                                    fontWeight: 'md',
                                                    ml: '0.75rem',
                                                    color: '#fff',
                                                    '&:hover': { color: 'danger.plainColor' },
                                                }}>
                                                {movie.vote_average}
                                            </Link>
                                            <Link 
                                                startDecorator={<TrendingUpIcon/>}
                                                level="body-xs"
                                                underline="none"
                                                sx={{
                                                    fontWeight: 'md',
                                                    ml: '0.75rem',
                                                    color: '#fff',
                                                    '&:hover': { color: 'warning.plainColor' },
                                                }}>
                                                {movie.popularity}
                                            </Link>
                                        </CardContent>
                                    </CardContent>
                                </Card>
                        </SwiperSlide>
                    })
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