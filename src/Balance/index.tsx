import React, { useContext } from 'react'
import income from "../assets/income.svg"
import outcome from "../assets/outcome.svg"
import totalImg from "../assets/total.svg"
import { TransactionsContext } from '../TransactionsContext'
import { Transations } from "../Transations"
import { BalanceStyle, Content, Item } from "./style"
export function Balance(){
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction)=> {
        if(transaction.type === 'deposit'){
            acc.deposits +=transaction.valor;
            acc.total+= transaction.valor;
        }
        else{
            acc.withdraws +=transaction.valor;
            acc.total-= transaction.valor;
        }
        return acc;
    },{
        deposits:0,
        withdraws:0,
        total:0,
    })
    return(

        <BalanceStyle>
            <Content>
                <Item>
                    <div>
                        <h2>Entrada</h2>
                        <img src={income} alt="Income" />
                    </div>
                    <p>{new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}</p>
                </Item>
                <Item>
                    <div>
                        <h2>Saídas</h2>
                        <img src={outcome} alt="Income" />
                    </div>
                    <p>{new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}</p>
                </Item>
                <Item className="green">
                    <div>
                        <h2>Total</h2>
                        <img src={totalImg} alt="Income" />
                    </div>
                    <p>{new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}</p>
                </Item>

            </Content>
            
            <Transations />
        </BalanceStyle>

    )
}