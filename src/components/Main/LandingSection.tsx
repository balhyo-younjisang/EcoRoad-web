import { motion } from "framer-motion";
import * as S from "../../styles/components/Main/LandingSection.style";
import RoadImage from "../../assets/imgs/road.jpg";
import NatureImage from "../../assets/imgs/nature.png";
import VehicleImage from "../../assets/imgs/vehicle.jpg";
import { useNavigate } from "react-router-dom";

export const LandingSection = () => {
    const navigate = useNavigate();

    return <S.LandingContainer>
        <S.TitleSection>
            <S.Filter />
            <S.TitleContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                <S.Title>ECO X</S.Title>
                <S.SubTitle>공간정보를 모으다.</S.SubTitle>
            </S.TitleContainer>
        </S.TitleSection>
        <S.ContentSection>
            <S.ContentBox
                onClick={() => navigate('/road')}
                style={{
                    backgroundImage: `url(${RoadImage})`, top: '10%', left: '10%'
                }}>
                <S.ContentTitle>ROAD</S.ContentTitle>
            </S.ContentBox>
            <S.ContentBox
                onClick={() => navigate('/nature')}
                style={{
                    backgroundImage: `url(${NatureImage})`, top: '40%', left: '40%'
                }}>
                <S.ContentTitle>NATURE</S.ContentTitle>
            </S.ContentBox>
            <S.ContentBox
                onClick={() => navigate('/vehicle')}
                style={{
                    backgroundImage: `url(${VehicleImage})`, top: '10%', left: '70%'
                }}>
                <S.ContentTitle>VEHICLE</S.ContentTitle>
            </S.ContentBox>
        </S.ContentSection>
    </S.LandingContainer>
}

