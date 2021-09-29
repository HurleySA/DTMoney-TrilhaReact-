import styled from "styled-components";

import {  transparentize  } from 'polished'

export const ContainerModal = styled.form`
    
`

export const ContainerRadio = styled.div`
    width: 480px;
    margin-bottom: 1rem; 
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    
`
interface ItemRadioProps {
    isActive: boolean,
    activeColor: 'green' | 'red'
}

const colors ={
    green: '#33CC95',
    red: '#E62E4D'
}

export const ItemRadio = styled.button<ItemRadioProps>`
    border: 1px solid rgba(0,0,0,0.2);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    cursor: pointer;
    background: ${(props) =>  props.isActive ?  transparentize(0.7,colors[props.activeColor]) : 'transparent'};



    div{
        display: flex;
        justify-content: center;
        align-items: center;
        
    
    }
    div h2{
        font-size: 1rem;
        
    
    }
    div img{
        height: 1.5rem;
        width: 1.5rem;
    }

    
`