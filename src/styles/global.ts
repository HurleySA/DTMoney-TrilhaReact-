import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E62E4D;
        --blue-light: #6933ff;

        --title: #363F5F;
        --text: #969CB3;

        --backGround: #F0F2F5;
        --shape: #FFFFFF;
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1880px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87,5%;
        }
        
    }

    body{
        background-color: var(--backGround);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor:pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }
`