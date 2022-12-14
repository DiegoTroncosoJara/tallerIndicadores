import React from 'react'
import { useEffect, useState } from "react";
import styled from 'styled-components';
import "bootstrap-icons/font/bootstrap-icons.css";

import axios from 'axios'




const  Modal = ({children, estado, cambiarEstado, titulo = "xd", mostrarHeader,
mostrarOverlay, posicionModal, indicador}) => {
  
  const [indicadorAux, SetIndicadorAux] = useState(indicador);
  // console.log("Este si csm: ", indicador);
  


  function Guardar(e){
    e.preventDefault();

    axios.put('http://localhost:4000/indicadores/editarindicador',{
      id : indicadorAux.id,
      CalificacionCORFO : indicadorAux.CalificacionCORFO,
      NumeroIndicador : indicadorAux.NumeroIndicador,
      MisionUniversitaria : indicadorAux.MisionUniversitaria,
      nombre : indicadorAux.nombre,
      TipoIndicador: indicadorAux.TipoIndicador,
      eje : indicadorAux.eje,
      Unidad : indicadorAux.Unidad,
      FuenteInformacion : indicadorAux.FuenteInformacion,
      Responsable : indicadorAux.Responsable,
      Frecuencia : indicadorAux.Frecuencia,
      idAux: (indicadorAux.CalificacionCORFO.charAt(0) + indicadorAux.NumeroIndicador)
      // idMetrica : this.state.idMetrica,
      // idMeta : this.state.idMeta
    })
  }
  

  
  return (
    <>
        {estado &&
            <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
                <ContenedorModal>
                    {mostrarHeader &&
                        <EncabezadoModal>
                            <h3> {titulo} </h3>
                        </EncabezadoModal>
                    }

                    <BotonCerrar onClick={() => {cambiarEstado(false); SetIndicadorAux(indicador)}}> 

                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </BotonCerrar>

                    <TablaModal>
                    <form>
                      <label>Calificaci??n CORFO</label>
                      <select value={indicadorAux.CalificacionCORFO} onChange={e => SetIndicadorAux({...indicadorAux,CalificacionCORFO:e.target.value})}>
                        <option value="M??nimo">M??nimo</option>
                        <option value="Cr??tico">Cr??tico</option>
                      </select>

                      <label>N??mero de Indicador</label>
                      <input type="text" value={indicadorAux.NumeroIndicador} onChange={e => SetIndicadorAux({
                        ...indicadorAux,NumeroIndicador: e.target.value
                      })}/>
                      
                      <label>Misi??n Universitaria</label>
                      <select value={indicadorAux.MisionUniversitaria} onChange={e => SetIndicadorAux({
                        ...indicadorAux,MisionUniversitaria: e.target.value
                      })}>
                        <option value="Primera">Primera</option>
                        <option value="Segunda">Segunda</option>
                        <option value="Tercera">Tercera</option>
                        <option value="General">General</option>
                      </select>
                      <label>Nombre del indicador</label>
                      <input type="text" value={indicadorAux.nombre} onChange={e => SetIndicadorAux({
                        ...indicadorAux,nombre: e.target.value
                      })}/>
                      <label>Tipo de Indicador</label>
                      <select value={indicadorAux.TipoIndicador} onChange={e => SetIndicadorAux({
                        ...indicadorAux,TipoIndicador: e.target.value
                      })}>
                        <option value="Entrada resultado">Entrada resultado</option>
                        <option value="Resultado">Resultado</option>
                        <option value="Proceso">Proceso</option>
                        <option value="Impacto">Impacto</option>
                      </select>
                      <label>Eje al que pertenece</label>
                      <select value={indicadorAux.eje} onChange={e => SetIndicadorAux({
                        ...indicadorAux,eje: e.target.value
                      })}>
                        <option value="Gobernanza y Sinergias">Gobernanza y Sinergias</option>
                        <option value="Gesti??n del Cambio y Capital Humano Avanzado">Gesti??n del Cambio y Capital Humano Avanzado</option>
                        <option selected value="I+D Aplicado y V??nculo con Sector Productivo">I+D Aplicado y V??nculo con Sector Productivo</option>
                        <option value="Comercializaci??n de Tecnolog??a y Emprendimiento de Base Tecnol??gica">Comercializaci??n de Tecnolog??a y Emprendimiento de Base Tecnol??gica</option>
                        <option value="Alianzas Internacionales">Alianzas Internacionales</option>
                        <option value=" Armonizaci??n Curricular y postgrados tecnol??gicos"> Armonizaci??n Curricular y postgrados tecnol??gicos</option>
                      </select>
                      <label>Unidad de medida</label>
                      <input type="text" value={indicadorAux.Unidad} onChange={e => SetIndicadorAux({
                        ...indicadorAux,Unidad: e.target.value
                      })}/>
                      <label>Fuente de Informacion</label>
                      <input type="text" value={indicadorAux.FuenteInformacion} onChange={e => SetIndicadorAux({
                        ...indicadorAux,FuenteInformacion: e.target.value
                      })}/>
                      <label>Responsable</label>
                      <input type="text" value={indicadorAux.Responsable} onChange={e => SetIndicadorAux({
                        ...indicadorAux,Responsable: e.target.value
                      })}/>
                      <label>Frecuencia de medici??n</label>
                      <select value={indicadorAux.Frecuencia} onChange={e => SetIndicadorAux({
                        ...indicadorAux,recuencia: e.target.value
                      })}>
                        <option value="Diario">Diario</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Mensual">Mensual</option>
                        <option value="Trimestral">Trimestral</option>
                        <option value="Semestral">Semestral</option>
                        <option value="Anual">Anual</option>
                      </select>

                      {/* <label>Metrica</label>
                      <select value={indicador.idMetrica} onChange={e => SetIndicadorAux({
                        idMetrica: e.target.value
                      })}>
                        <option value={0}>-</option>
                        {indicador.metricas.map((x, i) =>
                        x.Aprobado === 1 ?
                        <option value={x.id}>{x.nombre}</option>
                        :
                        <div/>
                        )}
                      </select>

                      <label>Meta</label>
                      <select value={indicador.idMeta} onChange={e => SetIndicadorAux({
                        idMeta: e.target.value
                      })}>
                        <option value={0}>-</option>
                        {indicador.metas.map((x, i) => 
                        x.Aprobado === 1 ?
                        <option value={x.id}>{x.nombre}</option>
                        :
                        <div/>
                        )}
                      </select> */}

                      <button onClick={Guardar}>Enviar</button>
                    </form>
                    </TablaModal>

                    {children}
                
                    
                </ContenedorModal>
            
            
            </Overlay>
        
        }
    </>
    
  );
}

export default Modal



const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.mostrarOverlay ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'};
  padding: 40px;

  display: flex;
  align-items: ${props => props.posicionModal ? props.posicionModal : 'center'};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 800px;
  min-height: 100px;
  margin-top: 5%;
  
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #E8E8E8;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766DC;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    background-color: red;
    width: 100%;
    height: 100%;
  }
`;

const TablaModal = styled.div`

  width: auto;
  height: 500px;
 
  
  position: relative;
  overflow: auto;
  form {
    overflow: auto;
    
  }
`;