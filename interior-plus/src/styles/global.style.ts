import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SUITE-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        vertical-align: middle;
    }
`;
