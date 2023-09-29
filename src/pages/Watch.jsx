import React, { useEffect, useState } from "react";
import { getMovies } from "../data/movieClient";
import { useParams } from "react-router-dom";
import { Box, Chip, Container, Skeleton, Typography } from "@mui/material";
import { fullImgPath, imgPath } from "../components/UI/variables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pie from "../components/Rating";
import TrailersContainer from "../components/Trailers";
import SkeletonContainer from "../components/SkeletonContainer";
import styled from "@emotion/styled";

const Watch = () => {
    const {id} = useParams(),
        url = `/3/movie/${id}?language=es-PE`,
        trailerUrl = `/3/movie/${id}/videos?language=es-PE`,
        [movie, setMovie] = useState([]),
        [genres, setGenres] = useState([]),
        [trailers, setTrailers] = useState(null)

    const theme = createTheme({
        typography: {
            fontFamily: 'Sorts Mill Goudy',
            poster: {
                fontSize: '3rem',
                margin: 'auto 0'
            },
            h3: undefined,
        },
    }),
    RankingContent = styled.div`
        position: absolute;
        bottom: -7vh;
        right: 2vw;
    `,
    calculateRating = (rating) => {
        if(rating)
            return Math.round(rating * 10) / 10
    }


    
    useEffect(() => {
        getMovies(url).then((response) => {
            setMovie(response)
            console.log(response)
            setGenres(response.genres)
        })
    }, [])

    useEffect(() => {
        getMovies(trailerUrl).then((response) => {
            setTrailers(response)
        })
    }, [])

    return(
        <Box>
            <ThemeProvider theme={theme}>
                <Container disableGutters maxWidth={false} sx={{
                        backgroundImage: "url(" + fullImgPath + `${movie.backdrop_path}` + ")",
                        width: '100%',
                        height: '500px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        m:0,
                        p:0,
                        position: 'relative'
                    }}>
                    <Box sx={{display: "flex", backgroundColor: 'rgba(0,0,0,0.5)', m: 0, width: '100%', height: '100%'}}>
                        <Box m={2} sx={{width: '80%'}}>
                            <Box p={6}>
                                <Typography variant="poster" sx={{fontFamily: 'Young Serif'}}>
                                    {movie.title}
                                </Typography>
                                <Typography>{movie.overview}</Typography>
                            </Box>
                            <Box px={6} sx={{display: "flex", mt: 2}}>
                                {
                                    genres.map((genre) => {
                                        return <p className="genre-content" key={genre.id}>{genre.name}</p>
                                    })
                                }
                                <Box sx={{display: 'flex', margin: 'auto 1rem'}}>
                                    <Typography 
                                        sx={{
                                            backgroundColor: '#eec014',
                                            color: "#000",
                                            fontWeight: 'bold',
                                            fontFamily: 'Young Serif',
                                            borderRadius: '5px',
                                            margin: '0 10px 0 0',
                                            padding: '0.25rem'}}
                                        >
                                            IMDB
                                    </Typography>
                                    <Typography m='auto'>{calculateRating(movie.vote_average)}/10</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Container sx={{width: '20%'}}>
                            <Box component="img" sx={{maxWidth: '100%', maxHeight: '100%', margin: 'auto'}} src={imgPath + `${movie.poster_path}`} />
                        </Container>
                    </Box>
                </Container>
            </ThemeProvider>
            {
                trailers ? <TrailersContainer trailers={trailers} /> : <SkeletonContainer />
            }
        </Box>
    );
}

/*
<RankingContent>
    <Pie percentage={calculateRating(movie.vote_average)} colour=""/>
</RankingContent>
*/

export default Watch;