import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import ProductTable from './Components/ProductTable';
import * as serviceWorker from './serviceWorker';


const  object = [
  {category :"Electronics", price : "100", name : "carte électronique"},
  {category :"Clothes", price : "50", name : "shirt"},
  {category :"Car", price : "50000", name : "mercedes"},
  {category :"Tools", price : "200", name : "pen"}
]

ReactDOM.render(
  <React.StrictMode>
   <ProductTable object={object}/> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
