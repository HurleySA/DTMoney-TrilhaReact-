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

    .modalOverlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .modalContent{
        padding: 3rem 2rem;
        width: 576px;
        background: var(--backGround);
        border-radius: 5px;
        position: relative;

        font-style: normal;
        font-weight: normal;
        font-size: 1rem,;
        line-height: 1.5rem;
        color: #969CB3;
    }

    .modalContent .btn_close{
        padding: 15px;
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 15px;
        border: none;
        
    }

    .modalContent h2{
        color: #363F5F;    
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1.8rem;
        padding: 1rem;
    }
    
    .modalContent input{
        display: block;
        width: 480px;
        background: #E7E9EE;
        border: 1px solid #D7D7D7;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 1.5rem;
        margin-bottom: 1rem;  
        font-size:1rem ;
    }

    .modalContent .btn_cadastrar{
        display: block;
        width: 480px;
        background: #33CC95;
        border: 1px solid #D7D7D7;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 1.5rem;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.8rem;
        text-align: center;
    }
    button:hover{
        filter: brightness(0.98);
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
    }
    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

    }

`