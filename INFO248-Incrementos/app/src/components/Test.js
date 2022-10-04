import React, {useState} from 'react';
import './index.css';
import styled from 'styled-components';
import Modal from './Modal';


const Test = () => {
    
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}> Modal 1</Boton>
			</ContenedorBotones>
			<Modal

				estado ={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Hola"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'start'}
			>

				<Contenido>
					<h1> Ventana Modal</h1>
					<p> Reutilizable y con opciones</p>
					<Boton>Aceptar</Boton>
				</Contenido>
			</Modal>
		</div>
	);
}

export default Test

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;