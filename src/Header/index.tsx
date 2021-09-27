
import { HeaderStyle, Content} from "./style"
import logo from "../assets/logo.svg"
export function Header(){


    return(
        <HeaderStyle>
            <Content>
                <img src={logo} alt="dt money" />
                <button>Nova Transação</button>
            </Content>
        </HeaderStyle>
    )
}