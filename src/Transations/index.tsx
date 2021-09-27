import { Content, Head, Row, Titulo, Preco } from "./style"

export function Transations(){
    return(
        <Content>
            <Head> 
                <p>Titulo</p>
                <p>Preço</p>
                <p>Categoria</p>
                <p>Data</p>
            </Head>  
            <Row>
                <Titulo>Desenvolvimento de site</Titulo>
                <Preco gasto={false}>R$ 12.000,00</Preco>
                <p>Venda</p>
                <p>13/04/2021</p>
            </Row>
            <Row>
                <Titulo>Hamburguer</Titulo>
                <Preco gasto={true}>- R$ 59,00</Preco>
                <p>Alimentação</p>
                <p>10/04/2021</p>
            </Row>
            <Row>
                <Titulo>Aluguel do apartamento</Titulo>
                <Preco gasto={true}>- R$ 1.200,00</Preco>
                <p>Casa</p>
                <p>27/03/2021</p>
            </Row>
            <Row>
                <Titulo>Computador</Titulo>    
                <Preco gasto={false}>R$ 5.400,00</Preco>
                <p>Venda</p>
                <p>15/03/2021</p>
            </Row>
        </Content>
          
       
    )
}