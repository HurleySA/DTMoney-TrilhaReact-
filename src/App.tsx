import React from 'react';

import { Header } from './Header';
import { Balance } from './Balance';

import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { TransactionModal } from './TransactionModal';

Modal.setAppElement("#root");


export function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <GlobalStyle/>
      
      <Header openModal={openModal}/>
      <Balance/>
      <TransactionModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
      
    </div>
  );
}


