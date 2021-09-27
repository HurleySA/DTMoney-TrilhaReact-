import styled from "styled-components";

export const HeaderStyle =styled.section`
    width: 100%;
    height: 212px;
    background: var(--blue);

    
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.5rem 0rem;
    display: flex;
    justify-content: space-between;

    button{
        background-color: var(--blue-light);
        color: var(--shape);
        border-radius: 5px;
        width: 195px;
        padding: 10px;
        border: none;

        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.8rem;
        transition: .1s;
      
        
    }
    button:hover{
        filter: brightness(0.95);
    }
`

