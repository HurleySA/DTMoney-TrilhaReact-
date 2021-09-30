import styled from "styled-components";
export const Content = styled.section`
    max-width: 1120px;
    margin: 0 auto;

`

export const Head = styled.div`
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    padding: 2rem;
    color: var(--text);


`

export const Row = styled.div`
    
    color: var(--text);
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;


    width: 100%;
    background-color: var(--shape);
    height: 40px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin-top: 1rem;
    padding: 1.5rem 0rem 3rem 2rem;
`

export const Titulo = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--title);
    
`
interface PrecoProps{
    type:string,
}

export const Preco = styled.p<PrecoProps>`
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${props => props.type === 'deposit' ? '#33CC95' : '#E62E4D'}
`