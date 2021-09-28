import React from 'react';
import Modal from 'react-modal';
import { HeaderStyle, Content} from "./style"
import logo from "../assets/logo.svg"

interface ModalProps {
    openModal: () => void; 
}
export function Header({openModal}: ModalProps){
   
 
  

    return(
        <HeaderStyle>
            <Content>
                <a href=""><img src={logo} alt="dt money" /></a>
                <button onClick={openModal}>Nova Transação</button>
                
            </Content>
        </HeaderStyle>
    )
}
