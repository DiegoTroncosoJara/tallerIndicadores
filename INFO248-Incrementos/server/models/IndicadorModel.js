const connection = require('../db');
const servicios = require('./HistorialModel')
const sHistorial = new servicios.historialServicios();

class indicadoresServicios{

    async getIndicadores(res) {
        const TASK_QUERY = "select * from indicadores"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }

    async createIndicador(res,req) {
        const ADD_QUERY = `insert into indicadores values ('${req.body.id}','${req.body.CalificacionCORFO}','${req.body.NumeroIndicador}','${req.body.MisionUniversitaria}','${req.body.nombre}','${req.body.TipoIndicador}','${req.body.eje}','${req.body.Unidad}','${req.body.FuenteInformacion}', '${req.body.Responsable}', '${req.body.Frecuencia}', 0, 'Añadir', ${req.body.idMetrica}, ${req.body.idMeta}, 0)`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
            else res.send('addindicadores')
        })
    }

    async setMetricas(res,req) {
        for(let i=0; i < req.body.idIndicadores.length ; i++){ 
            const ADD_QUERY = `UPDATE indicadores SET idMetrica = ${req.body.id} WHERE id = "${req.body.idIndicadores[i]}";`
            connection.query(ADD_QUERY, (err) =>{
                if(err) console.log(err)
            })   
        }
    }

    async setMetas(res,req) {
        for(let i=0; i < req.body.idIndicadores.length ; i++){ 
            const ADD_QUERY = `UPDATE indicadores SET idMeta = '${req.body.id}' WHERE id = "${req.body.idIndicadores[i]}";`
            connection.query(ADD_QUERY, (err) =>{
                if(err) console.log(err)
            })   
        }
    }

    async setAprobado(res,id) {
        const myArray = id.split("-");
        id = myArray[0];
        const solicitud = myArray[1];
        const UPDATE_QUERY = `UPDATE indicadores SET Aprobado = 1 WHERE id = "${id}";`
        connection.query(UPDATE_QUERY, (err) =>{
            if(err) console.log(err)
        })

        var today = new Date();
        var now = today.toLocaleString();

        if(solicitud === 'Añadir'){
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 1, solicitud: 'Añadir', estado: 'Aprobado', fecha: now }} );
        }else{
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 1, solicitud: 'Eliminar', estado: 'Rechazado', fecha: now }} );  
        }
    }

    async setPeticion(res,id) {
        const ADD_QUERY = `UPDATE indicadores SET Peticion = 'Eliminar', Aprobado = 0 WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }

    async EditarIndicador(res,id) {
        const ADD_QUERY = `UPDATE indicadores SET Peticion = 'Eliminar', Aprobado = 0 WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }

    async deleteIndicador(res, id){
        const myArray = id.split("-");
        id = myArray[0];
        const solicitud = myArray[1];

        const D = Math.random().toString(36).substr(2,18);

        const ADD_QUERY = `UPDATE indicadores SET id ='${D}',Aprobado = 2, antiguaid = '${id}' WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })

        sHistorial.setHistorial(0,{body: { D: D, id: id, tipo: 1}} ); 
        
        var today = new Date();
        var now = today.toLocaleString();

        if(solicitud === 'Eliminar'){
            sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Eliminar', estado: 'Aprobado', fecha: now }} ); 
        }else{
            sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Añadir', estado: 'Rechazado', fecha: now }} );   
        }
    }
}

module.exports = {
    indicadoresServicios
};