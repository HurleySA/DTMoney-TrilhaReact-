
import Modal from 'react-modal';
import close from '../assets/close.svg'
import { TransactionRadio } from '../TransactionRadio';


interface ModalProps {
    modalIsOpen: boolean,
    closeModal: () => void,
}


export function TransactionModal({modalIsOpen, closeModal}:ModalProps){
    return (
        <Modal  
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modalOverlay"
        className="modalContent"

        >
        <button className="btn_close" onClick={closeModal}><img src={close} alt="Botão Fechar"/></button>
        <h2>Cadastrar transação</h2>  
        <input type="text" placeholder="Titulo"/>
        <input type="number" placeholder="Valor"/>
        <TransactionRadio/>
        <input type="text" placeholder="Categoria"/>
        <button type="submit" className="btn_cadastrar">Cadastrar</button>
    
      </Modal>
    )
}