import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        overflow-y: scroll;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        cursor: pointer;
    }

    input {
        border: none;
    }

    textarea {
        border: none;
    }

    select {
        border: none;
    }
`;

export default GlobalStyle;