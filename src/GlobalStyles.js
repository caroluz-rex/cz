// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'ArrowFont';
        src: url('./fonts/ArrowFont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'SuperWaterFort';
        src: url('./fonts/SuperWaterFort.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    body, html, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'SuperWaterFort', sans-serif; /* Default font */
        overflow: hidden;
    }
`;

export default GlobalStyles;
