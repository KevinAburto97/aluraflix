import React, { useEffect, useState } from "react";
import {AspectRatio, Typography, Link, Divider, Box, Card, CardContent, CardOverflow, CardCover} from '@mui/joy';
import Favorite from '@mui/icons-material/Favorite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import { imgPath } from "../UI/variables";
const MovieCard = ({movie}) => {
    return(
        <Card className="movieContent" variant="outline" sx={{width: 300, height: 'auto', bgcolor: '#202124', p: 0, boxShadow: 'lg', margin: 'auto'}}>
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
    );
}

export default MovieCard;