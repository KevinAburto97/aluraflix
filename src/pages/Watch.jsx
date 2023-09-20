import React, { useEffect, useState } from "react";
import { getMovies } from "../data/movieClient";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { fullImgPath } from "../components/UI/variables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pie from "../components/Rating";
import styled from "@emotion/styled";

const Watch = () => {
    const {id} = useParams(),
        url = `/3/movie/${id}?language=es-PE`,
        [movie, setMovie] = useState([]),
        [genres, setGenres] = useState([])

    const theme = createTheme({
        typography: {
            poster: {
                fontSize: '2rem',
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
            return Math.round(rating * 10)
    }


    
    useEffect(() => {
        getMovies(url).then((response) => {
            setMovie(response)
            console.log(response)
            setGenres(response.genres)
        })
    }, [])

    return(
        <Box>
            <ThemeProvider theme={theme}>
                <Container maxWidth={false} sx={{
                        backgroundImage: "url(" + fullImgPath + `${movie.backdrop_path}` + ")",
                        width: '100%',
                        height: '450px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        m:0,
                        position: 'relative'
                    }}>
                        <RankingContent>
                            <Pie percentage={calculateRating(movie.vote_average)} colour=""/>
                        </RankingContent>
                </Container>
                <Box m={2} sx={{}}>
                    <Typography variant="poster">
                        {movie.title}
                    </Typography>
                    <Typography>{movie.overview}</Typography>
                </Box>
                <Box sx={{display: "flex"}}>
                    {
                        genres.map((genre) => {
                            return <p className="genre-content" key={genre.id}>{genre.name}</p>
                        })
                    }
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default Watch;