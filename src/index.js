import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Check from './components/Check';
import Rad from './components/Rad';
import TextArea from './components/TextArea';
import InputsTd from './components/InputsTd';
import MTodoTab from './components/MTodoTab';

import ButtonToDo from './components/ButtonToDo';
import Small from './components/Small';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <h2>Ma Todolist </h2>
   
   <Check  />
   
   <Small /> <br/> 
   <ButtonToDo nameButton="Supprimer"/> <br/>   
   <hr/>
   
   
   <h2>Nouvelle Tâche </h2>
 
   <InputsTd nameLabI="todo"idInpChe=""txtinp=""/>
  <TextArea />
 
  <Rad />{' '}
  <ButtonToDo nameButton="Enregistrer"/>{' '}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
