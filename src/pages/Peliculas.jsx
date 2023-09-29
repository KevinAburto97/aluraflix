import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Chip, Container, Box } from "@mui/material";
import { Link } from '@mui/joy';
import { genres } from "../components/UI/genres";
import { getMovies } from "../data/movieClient";
import { useNavigate, useParams} from "react-router-dom";
import Movies from '../components/Movies';
import SkeletonContainer from '../components/SkeletonContainer';

const Peliculas = () => {
    const urlPeliculas = '/3/movie/popular?language=es-PE&page=1',
        urlGenre = '3/discover/movie?language=es-PE&sort_by=popularity.desc&with_genres=',
        [peliculasData, setPeliculas] = useState(null),
        navigate = useNavigate(),
        {genre} = useParams()

    useEffect(() => {
        if(genre){
            if(genre == 0)
                navigate('/peliculas')
            else{
                let newUrlGenre = urlGenre + genre
                getMovies(newUrlGenre).then((response) => {
                    setPeliculas(response)
                    genres.map((g) => {
                        if(g.id == genre)
                            g.active = true
                        else
                            g.active = false
                    })
                })
            }
        }
        else{
            getMovies(urlPeliculas).then((response) => {
                setPeliculas(response)
            })
        }
    }, [])

    

    return (
        <>
            <Box m={4}>
                <Swiper
                    slidesPerView={6}
                    navigation
                    spaceBetween={6}
                    modules={Navigation}
                    className="mySwiper"
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
                            slidesPerView: 6,
                            spaceBetween: 10,
                        }
                    }}>
                    {
                        genres.map((genre, id) => {
                            return <SwiperSlide key={id} style={{marginLeft: 0, marginRight: 0, textAlign: 'center'}}>
                                <Link href={`/peliculas/genre/${genre.id}`} underline="none">
                                    <Chip className={(genre.active) ? "chip-genre active" : "chip-genre" }  label={genre.name}/>
                                </Link>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </Box>
            <Container sx={{my:3}}>
                <Box my={4}>
                {
                    peliculasData ? 
                    <Movies peliculasData={peliculasData.results} />
                    :
                    <SkeletonContainer />
                }
                    
                </Box>
            </Container>
        </>
    );
}

export default Peliculas;