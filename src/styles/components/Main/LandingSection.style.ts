import styled from "styled-components";
import backgroundImage from "../../../assets/imgs/landing-background.jpg";

export const LandingContainer = styled.section`
    width: 100%;
`;

export const TitleSection = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
`;

export const Filter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -60px;
`;

export const Title = styled.h1`
    color: white;
    font-size: 100px;
    font-family: "Ubuntu", sans-serif;
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 30px;
    font-family: "Ubuntu", sans-serif;
`;

export const ContentSection = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #070502;
    position: relative;
    top: 80vh;
    left: 0;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentBox = styled.div`
    width: 25%;
    height: 40%;
    background-color: white;
    position: absolute;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const ContentTitle = styled.h3`
    color: white;
    font-size: 20px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    font-size: 40px;
`;