import React from 'react'
import axios from 'axios'

class ListaMetas extends React.Component {    

  state = {
    idMetasA: [],
    idMetasD: []
  }

  onAprobarClick = () => {
    for(let i=0; i < this.state.idMetasA.length ; i++){ 
        axios.put(`http://localhost:4000/metas/setaprobado/${this.state.idMetasA[i]}-Añadir`)
    }
    for(let i=0; i < this.state.idMetasD.length ; i++){ 
        axios.put(`http://localhost:4000/metas/deletemetas/${this.state.idMetasD[i]}-Eliminar`)
    }
  }

  onRechazarClick = () => {
    for(let i=0; i < this.state.idMetasA.length ; i++){ 
        axios.put(`http://localhost:4000/metas/deletemetas/${this.state.idMetasA[i]}-Añadir`)
    }
    for(let i=0; i < this.state.idMetasD.length ; i++){ 
        axios.put(`http://localhost:4000/metas/setaprobado/${this.state.idMetasD[i]}-Eliminar`)
    }
  }

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
            <th></th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Indicadores</th>
            <th>Tipo de solicitud</th>
        </tr>
        </thead>
        <tbody>
        {this.props.metas.map((meta) => (
            meta.Aprobado === 0 ?

            <tr key={meta.id}>
                {meta.Peticion === 'Añadir' ?
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={meta.id}
                    onChange={e => this.state.idMetasA.includes(e.target.value) ? this.state.idMetasA = this.state.idMetasA.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idMetasA.push(e.target.value)
                    }/>
                </td>
                :
                <td>
                    <input
                    className='checkbox'
                    type="checkbox"
                    name="lang"
                    value={meta.id}
                    onChange={e => this.state.idMetasD.includes(e.target.value) ? this.state.idMetasD = this.state.idMetasD.filter((item) => 
                        item !== e.target.value) 
                        : 
                        this.state.idMetasD.push(e.target.value)
                    }/>
                </td>
                }
                <td>{meta.id}</td>
                <td>{meta.nombre}</td>


                        <td>
                            {this.props.indicadores.map((indicador) => (
                                indicador.idMeta === meta.id ?
                                    <div>
                                    {indicador.id} ㅤㅤㅤㅤ  {indicador.nombre}
                                    <br/>
                                    </div>
                                    :
                                    <></>
                            ))}
                        </td>


                {meta.Peticion === 'Añadir'?
                    <td style={AStyle}>{meta.Peticion}</td>
                    :
                    <td style={DStyle}>{meta.Peticion}</td>}
            </tr>
            :
            <div/>
            ))
        }
        </tbody>
    </table>
    
    <div className="flex-row" style={{paddingTop : '25px'}}>
        <div>
            <button onClick={
            () => this.onAprobarClick()
            }>Aprobar solicitudes</button>
        </div>
        <div style={{paddingLeft : '50px'}}>
            <button style={{background: 'red',  borderColor: 'red'}}
            onClick={
            () => this.onRechazarClick()
            }>Rechazar solicitudes</button>
        </div>

    </div>

    </div>
        );
  }
}

export default ListaMetas;