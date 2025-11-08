/*
	Aqui começa o aplicativo.
	Ele pega o "cartaz" (o `App`) e coloca dentro de uma caixinha na página
	chamada "root" para que a gente veja o que o app mostra.
	Também traz as roupas (estilos) para deixar a página com boa aparência.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));