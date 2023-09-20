import Banner from "../components/Banner";
import Section from "../components/Section";

const Home = () => {
    const boards = [
        {
            title: "Peliculas",
            url: "/3/movie/upcoming?include_video=true&language=es-PE&page=1"
        },
        {
            title: "Series",
            url: "/3/trending/tv/day?include_video=true&language=es-PE"
        } 
    ]
    return(
        <>
            <Banner></Banner>
            {
                boards.map((board) => {
                    return <Section key={board.title} board={board}></Section>
                })
            }
        </>
    );
}

export default Home;