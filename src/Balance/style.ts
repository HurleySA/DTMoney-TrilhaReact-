import styled from "styled-components";

export const BalanceStyle = styled.section`
    width: 100%;

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    padding: 1.5rem 0rem;
    display: flex;
    justify-content: space-between;
`

export const Item = styled.div`
    
    width: calc(33% - 20px);
    border-radius: 5px;
    background-color: var(--shape);
    color: var(--title);
    padding: 2rem 1rem;

    &.green{
        background-color: var(--green);
        color: var(--shape);
    }

    div{
        font-size: .8rem;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;

    }

    p{
        font-size: 2rem;
        padding: 1rem;
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        line-height: 3rem;


    }
`