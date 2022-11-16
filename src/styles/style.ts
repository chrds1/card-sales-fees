import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #FFFFFF;
        --blue-0: #F5F7FA;
        --blue-1: #79A0CF;
        --grey-0: #232429;
        --grey-1: #575756;
        --grey-2: #d3d3d3;
        --gold-0: #ffd700;
        --yellow-0: #ffff00;
        --orange-0: #F39200;
        --red-0: rgb(255, 0, 0);
        --wine-0: rgb(128, 0, 0);
        --brown-0: rgb(11, 0, 0);
    }
    body{
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        box-sizing: border-box;
        width: 100vw;
        min-width: 300px;
        display: flex;
        justify-content: center;
        background-color: var(--blue-0);
    }
    h1, h2, h3{
        margin: 0;
        padding: 0;
    }
`