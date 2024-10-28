import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "styled-components";

const TitleColorChangeAnimation = (props: { theme: DefaultTheme }) => keyframes`
    0% { color: ${props.theme.colors.primary}; }
    25% { color: ${props.theme.colors.secondary}; }
    50% { color: ${props.theme.colors.tertiary}; }
    75% { color: ${props.theme.colors.quaternary}; }
    100% { color: ${props.theme.colors.primary}; }
`;

export const HeaderContainer = styled.div`
    width: 80%;
    height: 100px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    animation: ${TitleColorChangeAnimation} 3s linear infinite;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 auto;
`;

export const HeaderButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background: transparent;
    animation: ${TitleColorChangeAnimation} 3s linear infinite;
    font-size: ${({ theme }) => theme.fontSize.lg};
    cursor: pointer;
    font-weight: bold;
`;