import styled, { css, keyframes } from "styled-components";

const flowDown = keyframes`
    0% {
        height: 0rem;
    }

    100% {
        height: 100vh;
    }
`;

const footPrint = keyframes`
    0% {
        transform: scale(1.5);
        opacity: 0;
    }

    100% {
        transform: scale(1) rotate(40deg);
        opacity: 1;
    }
}`;

export const AnimatedFlowDown = styled.div<{ $active: boolean }>`
  background-color: ${(props) => props.theme.fg};
  width: 100%;
  height: ${({$active}) => ($active ? "100vh" : "0rem")};
  position: absolute;
  top: 0;
  ${({$active}) =>
    $active &&
    css`animation : ${flowDown} 1.5s ease-in-out;`}
`;

export const AnimatedFootPrint = styled.img<{ $active: boolean }>`
  position: absolute;
  width: 100%;
  height: 60%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  ${({ $active }) =>
    $active &&
    css`
      animation: ${footPrint} 1s 1.5s forwards;
    `}
`;


export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
  padding: 6rem 0;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.fg};
  font-size: 5rem;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.fg};
  font-size: 1.6rem;
`;

export const Button = styled.button`
  width: 20rem;
  height: 5rem;
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 1rem;
  border: 0;
  cursor: pointer;
`;
