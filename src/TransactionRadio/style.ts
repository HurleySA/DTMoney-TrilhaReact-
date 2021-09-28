import styled from "styled-components";

export const ContainerRadio = styled.div`
    width: 480px;
    margin-bottom: 1rem; 
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    
`

export const ItemRadio = styled.span`
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    cursor: pointer;

    div{
        display: flex;
        justify-content: center;
        
    
    }
    div h2{
        font-size: 1rem;
        
    
    }

    
`