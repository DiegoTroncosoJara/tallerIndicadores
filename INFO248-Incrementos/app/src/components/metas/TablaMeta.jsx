import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";


export default function  TablaMeta(props) {

  const [metas, setMetas] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/metas/lista');
      setMetas(res.data);
    };
    fetchPosts();
  }, );
  
  return (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
      </tr>
    </thead>
    <tbody>
      {metas.map((meta) => (
        meta.Aprobado === 2 ?
        <tr key={meta.id} style={{backgroundColor: "#EEEDED", color: "#A7A4A4"}}>
        {meta.antiguaid === '0'?
        <td>{meta.id}</td>
        :
        <td>{meta.antiguaid}</td>
        }
        <td>{meta.nombre}</td>
        <td>Eliminado</td>
      </tr>
      :
        meta.Aprobado === 1 ?
        <tr key={meta.id}>
          <td>{meta.id}</td>
          <td>{meta.nombre}</td>
          <td>
            {/* <button className="button muted-button">Edit</button> */}
            <button className="button muted-button delete" onClick={() => 
              axios.put(`http://localhost:4000/metas/setpeticion/${meta.id}`,
              window.location.reload(true))
              }>Eliminar</button>
          </td>
        </tr>
      :
      meta.Peticion === 'Añadir'?
      <tr key={meta.id} style={{backgroundColor: "#c6fbd8ad"}}>
        <td>{meta.id}</td>
        <td>{meta.nombre}</td>
        <td style={{color: "green"}}>Peticion Añadir</td>
      </tr>
      :
      <tr key={meta.id} style={{backgroundColor: "#feb6b8a8"}}>
        <td>{meta.id}</td>
        <td>{meta.nombre}</td>
        <td style={{color: "red"}}>Peticion Eliminar</td>
      </tr>
      ))
        
      }
    </tbody>
  </table>
  )}