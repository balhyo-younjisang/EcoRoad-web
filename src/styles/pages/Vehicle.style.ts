import styled from "styled-components";

export const RoadContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const InputContainer = styled.div`
    width: 60%;
    position: relative;
    z-index: 100;
    font-size: 18px;
    transform: translateX(-50%);
    left: 50%;
    top: 30px;
`;

export const Input = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    z-index: 100;
    padding: 0 30px;
    border: none;
    outline: none;
    font-size: 18px;
`;

export const SearchButton = styled.button`
    width: 100px;
    height: 60px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 30px;
    z-index: 100;
    border-radius: 0 30px 30px 0;
    font-size: 18px;
    font-weight: bold;
    color: black;
    background: #f0f0f0;
    transition: all .3s ease;

    &:hover {
        background: #e0e0e0;
    }
`;
