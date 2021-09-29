import React, { useState, useEffect } from 'react'
import { Content, Head, Row, Titulo, Preco } from "./style"
import {api } from '../services/api'
interface PropsItem {
    id: number,
    titulo: string,
    type: 'deposit' | 'withdraw',
    categoria:string,
    valor:number,
    data: string,   
}

export function Transations(){
    const [transactions, setTransactions] = useState<PropsItem[]>([])

    useEffect(()=>{
        api.get('/transactions').then(res => setTransactions(res.data.transactions));
        
    },[transactions])


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