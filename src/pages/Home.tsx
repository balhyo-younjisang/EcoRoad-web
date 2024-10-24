import { useState } from "react";
import * as S from "../styles/pages/Home.style";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const clickStartButtonHandler = () => {
    setActive(true);
    setTimeout(() => {
        navigate("/main");
    }, 3000);
  }

  return (
    <S.StyledContainer>
      <S.AnimatedFlowDown $active={active} />
      <S.AnimatedFootPrint
        $active={active}
        src="https://res.cloudinary.com/dwr6mqx2g/image/upload/v1489592258/leftfoot_hjajqj.svg"
      />
      <S.Logo>
        <S.Title>ECOVE</S.Title>
        <S.SubTitle>Movement for the Earth</S.SubTitle>
      </S.Logo>
      <S.Button onClick={clickStartButtonHandler}>Get Started</S.Button>
    </S.StyledContainer>
  );
}