
import { useContext } from "react"
import { TransactionsContext } from "../TransactionsContext";
import { Content, Head, Row, Titulo, Preco } from "./style"



export function Transations(){
    
    const {transactions} = useContext(TransactionsContext);
    return(
        <Content>
            <Head> 
                <p>Titulo</p>
                <p>Preço</p>
                <p>Categoria</p>
                <p>Data</p>
            </Head>  
            {transactions.map(item => (
                <Row key={item.id}>
                    <Titulo>{item.titulo}</Titulo>
                    <Preco type={item.type}>{new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(item.valor)}</Preco>
                    <p>{item.categoria}</p>
                    <p>{item.data}</p>
                </Row>
            ))}
           
           
           
        </Content>
          
       
    )
}