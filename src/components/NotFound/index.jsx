import styled from "styled-components";
import ghost from "../../assets/img/ghost-img.png";

const Section = styled.section`
    padding: 9rem 0 2rem;
    height: 50vh;
    display: grid;
    @media (max-width: 768px) {
        height: 100%;
        margin: 0 1rem;
    }
`,
HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    row-gap: 2.5rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`,
HomeData = styled.div`
    text-align: center;
`,
HomeSubtitle = styled.span`

`,
HomeTitle = styled.h1`
    font-size: 5rem;
    margin: .75rem 0;
`,
HomeDescription = styled.p`
`,
BackToHome = styled.a`
    margin-top: 2rem;
    text-decoration: none;
    display: inline-block;
    background-color: var(--red-color);
    color: #fff;
    padding: .80rem 1.5rem;
    border-radius: 3rem;
    transition: .4s;
    &:hover{
        box-shadow: 0 4px 12px hsl(356.15deg 74.5% 49.22%);
        cursor: pointer;
    }
`,
HomeImg = styled.div`
    text-align: center;
`,
GhostImg = styled.img`
    width: 230px;
    animation: floaty 1.8s infinite alternate;
`,
GhostShadow = styled.div`
    width: 130px;
    height: 24px;
    background-color: hsl(0deg 0% 99.57% / 16%);
    margin: 0 auto;
    border-radius: 50%;
    filter: blur(7px);
    animation: shadow 1.8s infinite alternate;
`

const NotFound = () => {

    return(
        <Section>
            <HomeContainer>
                <HomeData>
                    <HomeSubtitle>Error 404</HomeSubtitle>
                    <HomeTitle>Hey Buddy</HomeTitle>
                    <HomeDescription>Creo que te has perdido. Regresa a casa :)</HomeDescription>
                    <BackToHome href="/">Go Home</BackToHome>
                </HomeData>
                <HomeImg>
                    <GhostImg src={ghost}/>
                    <GhostShadow></GhostShadow>
                </HomeImg>
            </HomeContainer>
        </Section>
    )
}

export default NotFound;