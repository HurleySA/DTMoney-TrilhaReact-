import {ContainerRadio, ItemRadio} from "./style"
import income from "../assets/income.svg"
import outcome from "../assets/outcome.svg"

export function TransactionRadio(){
    return (
        <ContainerRadio> 
            <ItemRadio>
                <div>
                    <img src={income} alt="Logo Entrada" />
                    <h2>Entrada</h2>
                </div>
            </ItemRadio>
            <ItemRadio>
                <div>
                    <img src={outcome} alt="Logo Entrada" />
                    <h2>Saída</h2>
                </div>
            </ItemRadio>
        </ContainerRadio>
    )
}