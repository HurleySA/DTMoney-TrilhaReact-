import income from "../assets/income.svg"
import outcome from "../assets/outcome.svg"
import total from "../assets/total.svg"
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
                    <p>R$ 17.400,00</p>
                </Item>
                <Item>
                    <div>
                        <h2>Saídas</h2>
                        <img src={outcome} alt="Income" />
                    </div>
                    <p>R$ 1.259,00</p>
                </Item>
                <Item className="green">
                    <div>
                        <h2>Total</h2>
                        <img src={total} alt="Income" />
                    </div>
                    <p>R$ 16.141,00</p>
                </Item>
               
            </Content>
            <Transations/>
        </BalanceStyle>

    )
}