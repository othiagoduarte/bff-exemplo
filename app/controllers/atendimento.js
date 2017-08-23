const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE + "atendimentos";
    const atendimentosBuilder = app.builder.atendimentos;

    async function getAll(req, res){
        const token = req.headers.authorization;
        return await obterRegistros(token);
    }
    
    async function get(req, res){
        const token = req.headers.authorization;
        return await obterRegistrosPorId(req.params.id, token);                        
    }

    async function add(req, res){
        const token = req.headers.authorization;
        return await addRegistro(atendimentosBuilder.atendimento(req.body), token);                
    }

    async function save(req, res){
        const token = req.headers.authorization;
        return await saveRegistro(atendimentosBuilder.atendimento(req.body), token);                        
    }
    
    async function obterRegistros(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function obterRegistrosPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addRegistro(dadosRegistro, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosRegistro
        });
    } 

    async function saveRegistro(dadosRegistro, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosRegistro
        })
    } 

    return {getAll, get, add, save}
}