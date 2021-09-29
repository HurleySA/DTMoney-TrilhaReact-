import React from 'react'
import income from "../assets/income.svg"
import outcome from "../assets/outcome.svg"
import totalImg from "../assets/total.svg"
import { Transations } from "../Transations"
import { BalanceStyle, Content, Item } from "./style"
export function Balance(){


    return(

        <BalanceStyle>
            <Content>
                <Item>
                    <div>
                        <h2>Entrada</h2>
                        <img src={income} alt="Income" />
                    </div>
                    <p>R$ 0</p>
                </Item>
                <Item>
                    <div>
                        <h2>Saídas</h2>
                        <img src={outcome} alt="Income" />
                    </div>
                    <p>R$ 0</p>
                </Item>
                <Item className="green">
                    <div>
                        <h2>Total</h2>
                        <img src={totalImg} alt="Income" />
                    </div>
                    <p>R$ 0</p>
                </Item>

            </Content>
            
            <Transations />
        </BalanceStyle>

    )
}