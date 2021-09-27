import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';

import { GlobalStyle } from './styles/global';
import { Modal } from './Modal';


export function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      
      <Header/>
      <Balance/>
      <Modal/>
      
    </div>
  );
}


