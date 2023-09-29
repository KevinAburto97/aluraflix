import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, Container } from '@mui/material';
const Trailers = ({trailers}) => {
    const dataTrailers = trailers.results
    console.log(dataTrailers)
    return(
        <Container sx={{m: 10}}>
            <Swiper
            slidesPerView={3}
            spaceBetween={60}
            navigation
            modules={[Navigation]}
            className="mySwiper"
            style={{
                "--swiper-pagination-color": "#DB202C",
                "--swiper-navigation-color": "#DB202C",
            }}
            >
                {
                    dataTrailers.map((trailer) => {
                        return <SwiperSlide key={trailer.key} width={400} height={400}>
                            <Card sx={{p: 1, height:"200px"}}>
                                <iframe
                                style={{width: "100%", height: "100%"}}
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                allow="autoplay"
                                allowFullScreen
                                onClick={(e) => {console.log(e.target)}}
                                ></iframe>
                            </Card>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </Container>
    );
}

export default Trailers;