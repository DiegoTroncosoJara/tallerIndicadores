import React from 'react'
import axios from 'axios'

class AddIndicador extends React.Component {
  state = {
    CalificacionCORFO : 'Mínimo',
    NumeroIndicador: '',
    MisionUniversitaria : 'Primera',
    nombre : '',
    TipoIndicador: 'Entrada resultado',
    eje : 'Gobernanza y Sinergias',
    Unidad : '',
    FuenteInformacion : '',
    Responsable: '',
    Frecuencia: 'Diario',
    idMetrica: 0,
    idMeta: 0
  }

  onAddClick = () => {
    axios.post('http://localhost:4000/indicadores/addindicadores',{
      id: (this.state.CalificacionCORFO.charAt(0) + this.state.NumeroIndicador), //string.charAt(0)
      CalificacionCORFO : this.state.CalificacionCORFO,
      NumeroIndicador : this.state.NumeroIndicador,
      MisionUniversitaria : this.state.MisionUniversitaria,
      nombre : this.state.nombre,
      TipoIndicador: this.state.TipoIndicador,
      eje : this.state.eje,
      Unidad : this.state.Unidad,
      FuenteInformacion : this.state.FuenteInformacion,
      Responsable : this.state.Responsable,
      Frecuencia : this.state.Frecuencia,
      idMetrica : this.state.idMetrica,
      idMeta : this.state.idMeta
    })
  }

  render(){
    return(
      <form>
        <label>Calificación CORFO</label>
        <select value={this.state.CalificacionCORFO} onChange={e => this.setState({
          CalificacionCORFO: e.target.value
        })}>
          <option value="Mínimo">Mínimo</option>
          <option value="Crítico">Crítico</option>
        </select>

        <label>Número de Indicador</label>
        <input type="text" value={this.state.NumeroIndicador} onChange={e => this.setState({
          NumeroIndicador: e.target.value
        })}/>
        
        <label>Misión Universitaria</label>
        <select value={this.state.MisionUniversitaria} onChange={e => this.setState({
          MisionUniversitaria: e.target.value
        })}>
          <option value="Primera">Primera</option>
          <option value="Segunda">Segunda</option>
          <option value="Tercera">Tercera</option>
          <option value="General">General</option>
        </select>
        <label>Nombre del indicador</label>
        <input type="text" value={this.state.nombre} onChange={e => this.setState({
          nombre: e.target.value
        })}/>
        <label>Tipo de Indicador</label>
        <select value={this.state.TipoIndicador} onChange={e => this.setState({
          TipoIndicador: e.target.value
        })}>
          <option value="Entrada resultado">Entrada resultado</option>
          <option value="Resultado">Resultado</option>
          <option value="Proceso">Proceso</option>
          <option value="Impacto">Impacto</option>
        </select>
        <label>Eje al que pertenece</label>
        <select value={this.state.eje} onChange={e => this.setState({
          eje: e.target.value
        })}>
          <option value="Gobernanza y Sinergias">Gobernanza y Sinergias</option>
          <option value="Gestión del Cambio y Capital Humano Avanzado">Gestión del Cambio y Capital Humano Avanzado</option>
          <option selected value="I+D Aplicado y Vínculo con Sector Productivo">I+D Aplicado y Vínculo con Sector Productivo</option>
          <option value="Comercialización de Tecnología y Emprendimiento de Base Tecnológica">Comercialización de Tecnología y Emprendimiento de Base Tecnológica</option>
          <option value="Alianzas Internacionales">Alianzas Internacionales</option>
          <option value=" Armonización Curricular y postgrados tecnológicos"> Armonización Curricular y postgrados tecnológicos</option>
        </select>
         <label>Unidad de medida</label>
        <input type="text" value={this.state.Unidad} onChange={e => this.setState({
          Unidad: e.target.value
        })}/>
        <label>Fuente de Informacion</label>
        <input type="text" value={this.state.FuenteInformacion} onChange={e => this.setState({
          FuenteInformacion: e.target.value
        })}/>
        <label>Responsable</label>
        <input type="text" value={this.state.Responsable} onChange={e => this.setState({
          Responsable: e.target.value
        })}/>
        <label>Frecuencia de medición</label>
        <select value={this.state.Frecuencia} onChange={e => this.setState({
          Frecuencia: e.target.value
        })}>
          <option value="Diario">Diario</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensual">Mensual</option>
          <option value="Trimestral">Trimestral</option>
          <option value="Semestral">Semestral</option>
          <option value="Anual">Anual</option>
        </select>

        <label>Metrica</label>
        <select value={this.state.idMetrica} onChange={e => this.setState({
          idMetrica: e.target.value
        })}>
          <option value={0}>-</option>
          {this.props.metricas.map((x, i) =>
          x.Aprobado === 1 ?
          <option value={x.id}>{x.nombre}</option>
          :
          <div/>
          )}
        </select>

        <label>Meta</label>
        <select value={this.state.idMeta} onChange={e => this.setState({
          idMeta: e.target.value
        })}>
          <option value={0}>-</option>
          {this.props.metas.map((x, i) => 
          x.Aprobado === 1 ?
          <option value={x.id}>{x.nombre}</option>
          :
          <div/>
          )}
        </select>

        <button onClick={
          () => this.onAddClick()
        }>Enviar solicitud</button>
      </form>
    );
  }
}

export default AddIndicador;