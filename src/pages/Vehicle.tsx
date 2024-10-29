import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import * as S from "../styles/pages/Vehicle.style";

interface LatLngExpression {
    lat: number;
    lng: number;
}

const RoadPage = () => {
    const [currentLocation, setCurrentLocation] = useState<LatLngExpression>({ lat: 37.5172, lng: 126.997 });

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        });
    }

    useEffect(() => {
        getLocation();
    }, []);

    return <S.RoadContainer>
        <S.InputContainer>
            <S.Input placeholder="검색어를 입력해주세요.. Ex) 따릉이, 버스" />
            <S.SearchButton>검색</S.SearchButton>
        </S.InputContainer>
        <Map center={currentLocation} style={{ width: '100%', height: '100%' }} />
    </S.RoadContainer>
}

export default RoadPage;