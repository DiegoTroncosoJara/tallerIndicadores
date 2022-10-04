import React from 'react'
import axios from 'axios'

class HistorialMetas extends React.Component {    

    render(){
        const AStyle = {
            color: 'rgb(48, 147, 59)'
        };
    
        const DStyle = {
            color: 'rgb(170, 25, 25)'
        };
    
        return(
        <div>
    
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Tipo de solicitud</th>
                <th>Estado</th>
                <th>ㅤFechaㅤ</th>
            </tr>
            </thead>
            <tbody>
            {this.props.historial.map((historia) => (
                <tr>
                {this.props.metas.map((meta) => (
                    historia.id_imm === meta.id && historia.tipo === 2?
                    <>
                        {meta.antiguaid === '0'?
    
                            <td>{meta.id}</td>
                            :
                            <td>{meta.antiguaid}</td>}
                        <td>{meta.nombre}</td>
                        <td><b>{historia.solicitud}</b></td>
                        {historia.estado === 'Aprobado'?
                            <td style={AStyle}><b>{historia.estado}</b></td>
                            :
                            <td style={DStyle}><b>{historia.estado}</b></td>}
                        <td>{historia.fecha}</td>
                    </>
                    :
                    <></>
                    ))
                }
                </tr>
            ))
            }
            </tbody>
        </table>
    
        </div>
            );
      }
    }

export default HistorialMetas;