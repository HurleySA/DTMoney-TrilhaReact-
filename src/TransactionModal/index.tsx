import React, { FormEvent, useContext } from 'react'
import Modal from 'react-modal';
import close from '../assets/close.svg'
import income from "../assets/income.svg"
import outcome from "../assets/outcome.svg"
import { TransactionsContext } from '../TransactionsContext';
import {ContainerModal, ContainerRadio, ItemRadio } from './style';
interface ModalProps {
    modalIsOpen: boolean,
    closeModal: () => void,
}

export function TransactionModal({modalIsOpen, closeModal}:ModalProps){
    const [titulo, setTitulo] = React.useState('');
    const [valor, setValor] = React.useState(0);
    const [categoria, setCategoria] = React.useState('');
    const [type, setType] = React.useState('deposit')
    
    const {createTransaction} = useContext(TransactionsContext);

    const handleCreateNewTransaction =  async (event: FormEvent) =>{
        event.preventDefault();
        await createTransaction({
            titulo,
            type,
            categoria,
            valor,
        })
        setTitulo('');
        setValor(0);
        setCategoria('');
        setType('deposit')
        closeModal();
    }

    const handleSetTypeDeposit = (event:FormEvent) => {
        event.preventDefault();
        if(type !== 'deposit') setType('deposit');
    }
    
    const handleSetTypeWithdraw = (event:FormEvent) => {
        event.preventDefault();
        if(type !== 'withdraw') setType('withdraw');
    }
    return (
        <Modal  
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modalOverlay"
        className="modalContent"

        >
        <button className="btn_close"
         onClick={closeModal}><img src={close} alt="Botão Fechar"/></button>
        <ContainerModal onSubmit={handleCreateNewTransaction}>

            <h2>Cadastrar transação</h2>  

            <input type="text"
            placeholder="Titulo" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} />
            
            <input type="number" 
            placeholder="Valor" 
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}/>
        
            <ContainerRadio> 
                <ItemRadio 
                isActive={type === 'deposit'} 
                onClick={handleSetTypeDeposit}
                activeColor={'green'}
                >
                    <div>
                        <img src={income} alt="Logo Entrada" />
                        <h2>Entrada</h2>
                    </div>
                </ItemRadio>
                <ItemRadio
                isActive={type === 'withdraw'} 
                onClick={handleSetTypeWithdraw}
                activeColor={'red'}
                >
                    <div>
                        <img src={outcome} alt="Logo Entrada" />
                        <h2>Saída</h2>
                    </div>
                </ItemRadio>
            </ContainerRadio>

            <input type="text" 
            value={categoria}
            placeholder="Categoria" onChange={(e) => setCategoria(e.target.value)}/>
            
            <button type="submit" 
            className="btn_cadastrar"  
            >Cadastrar</button>
        </ContainerModal>
      </Modal>
    )
}