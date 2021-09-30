import React, { useState, useEffect, createContext, ReactNode } from 'react'
import {api } from './services/api'
interface PropsItem {
    id: number,
    titulo: string,
    type: string,
    categoria:string,
    valor:number,
    data: string,   
}

type TransactionInput = Omit<PropsItem, 'id' | 'data'>;

interface TransactionsChildren{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: PropsItem[],
    createTransaction:(transaction: TransactionInput) => Promise<void>,
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsChildren){
    const [transactions, setTransactions] = useState<PropsItem[]>([])

    useEffect(()=>{
        api.get('/transactions')
        .then(res => setTransactions(res.data.transactions));
        
    },[])

    const createTransaction = async (newTransaction:TransactionInput) =>{
   
        const response = await api.post('/transactions', {...newTransaction, data: new Date().toLocaleString('pt-BR').substr(0, 10)});
        const {transaction} = response.data;

        setTransactions([...transactions, transaction])

    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>    
    )
}