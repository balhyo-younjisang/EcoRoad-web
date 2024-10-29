import { useEffect, useState } from "react";
import * as S from "../styles/pages/Road.style";

const CCTV_API_URL = `https://openapi.its.go.kr:9443/cctvInfo?apiKey=${import.meta.env.VITE_ITS_CCTV_API_KEY}&type=ex&cctvType=2&minX=126.800000&maxX=127.890000&minY=34.900000&maxY=35.100000&getType=json`;

const RoadPage = () => {
    const [cctvVideoUrl, setCCTVVideoUrls] = useState<string[]>([]);
    const [cctvIndex, setCctvIndex] = useState<number>(0);

    const fetchCCTVData = () => {
        fetch(CCTV_API_URL)
            .then(res => res.json())
            .then(data => {
                console.log("video Start")
                data.response.data.forEach(({ cctvurl }: { cctvurl: string }) => {
                    setCCTVVideoUrls(prev => [...prev, cctvurl]);
                });
            });
    }

    useEffect(() => {
        fetchCCTVData();
    }, []);

    return <S.RoadContainer>
        {
            cctvVideoUrl.length !== 0 ?
                <S.VideoContainer>
                    <video src={cctvVideoUrl[cctvIndex]} autoPlay muted />
                </S.VideoContainer> : <div>Loading...</div>
        }
        <S.ButtonContainer>
            <S.StartButton onClick={() => setCctvIndex(cctvIndex + 1)}>
                다음
            </S.StartButton>
            <S.StartButton onClick={fetchCCTVData}>
                새로 불러오기
            </S.StartButton>
        </S.ButtonContainer>
    </S.RoadContainer>;
};


export default RoadPage;
