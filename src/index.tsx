import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions:[{
        id:1,
        titulo: "Desenvolvedor Web",
        type: 'deposit',
        categoria: "dev",
        valor: 500,
        data: '29/09/2021'
      },
      {
        id:2,
        titulo: "Aluguel",
        type: 'withdraw',
        categoria: "casa",
        valor: 400,
        data: '29/09/2021'
      }],
    })
  },

  routes(){
    this.namespace = 'api';
    
    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request)=> {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
