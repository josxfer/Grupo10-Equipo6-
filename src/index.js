import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navegacion from './components/Encabezado/index';
import Footer_admin from './components/footer_admin/index';
import Login from './components/login/index';
import Registro from './components/Registro/Registro'

ReactDOM.render(<App/>, document.getElementById('root'))
ReactDOM.render(<Navegacion/>, document.getElementById('navegacion'))
ReactDOM.render(<Footer_admin/>, document.getElementById('footer_del_admin'))
ReactDOM.render(<Login/>, document.getElementById('login'))
ReactDOM.render(<Registro/>, document.getElementById('registro'))