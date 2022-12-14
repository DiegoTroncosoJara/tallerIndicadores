import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal"
import styled from 'styled-components';

// Usado hoy
export default function  TablaIndicadores2() {
  const [indicadores, setIndicadores] = useState([]);

  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  const [indi, setIndi] = useState([]);

  const Editar = (indi) => {
    cambiarEstadoModal1(!estadoModal1);
    setIndi(indi);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/indicadores/lista');
      setIndicadores(res.data);
    };
    fetchPosts();
  }, );

  return (
  <div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Tipo de indicador</th>
        <th>Eje</th>
        <th>Responsable</th>
        <th>Opción</th>
      </tr>
    </thead>
    <tbody>
      {indicadores.map((indicador) => (
        indicador.Aprobado === 2 ?
        <tr key={indicador.id} style={{backgroundColor: "#EEEDED", color: "#A7A4A4"}}>
          {indicador.antiguaid === '0'?
            <td>{indicador.id}</td>
            :
            <td>{indicador.antiguaid}</td>
          }
          <td>{indicador.nombre}</td>
          <td>{indicador.TipoIndicador}</td>
          <td>{indicador.eje}</td>
          <td>{indicador.Responsable}</td>
          <td>Eliminado</td>
        </tr>
      :
        indicador.Aprobado === 1 ?
        
          <tr key={indicador.id}>
          {indicador.antiguaid === '0'?
            <td>{indicador.id}</td>
            :
            <td>{indicador.antiguaid}</td>
          }
            <td>{indicador.nombre}</td>
            <td>{indicador.TipoIndicador}</td>
            <td>{indicador.eje}</td>
            <td>{indicador.Responsable}</td>
            <td>
              
              <button className="button muted-button delete" onClick={() => 
                axios.put(`http://localhost:4000/indicadores/setpeticion/${indicador.id}`,
                window.location.reload(true))
                }>Eliminar</button>
                
            </td>
            <td>
              <button className="button muted-button edit" onClick= {()=> Editar(indicador)}
              >Editar</button>
              
              <Modal
              estado ={estadoModal1}
              cambiarEstado={cambiarEstadoModal1}
              titulo={`Editar indicador ID: ${indi.id}`}
              key = {indicador.id}
              indicador = {indi}
              mostrarHeader={true}
              mostrarOverlay={true}
              posicionModal={'center'}>
              <Contenido>
                <Boton>Guardar</Boton>
              </Contenido>
            </Modal>
              
             

            </td>
          </tr>
       
        :
        indicador.Peticion === 'Añadir'?
        <tr key={indicador.id} style={{backgroundColor: "#c6fbd8ad"}}>
          <td>{indicador.id}</td>
          <td>{indicador.nombre}</td>
          <td>{indicador.TipoIndicador}</td>
          <td>{indicador.eje}</td>
          <td>{indicador.Responsable}</td>
          <td style={{color: "green"}}>Peticion Añadir</td>
        </tr>
        :
        <tr key={indicador.id} style={{backgroundColor: "#feb6b8a8"}}> 
          <td>{indicador.id}</td>
          <td>{indicador.nombre}</td>
          <td>{indicador.TipoIndicador}</td>
          <td>{indicador.eje}</td>
          <td>{indicador.Responsable}</td>
          <td style={{color: "red"}}>Peticion Eliminar</td>
        </tr>
        ))
      }
    </tbody>
  </table>
  
  </div>
  )}




  

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