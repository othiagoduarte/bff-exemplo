const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE + "clientes";
    const ctrlToken = app.controllers.token;
    
    async function getAll(req, res){   
        const token = req.headers.authorization;
        return await obterClientes(token, req.query.registro_inicial, req.query.numero_registros);
    }
    
    async function get(req, res){
        const token = req.headers.authorization;
        return await obterClientesPorId(req.params.id, token);        
    }

    async function add(req, res){
        const token = req.headers.authorization;
        return await addCliente(req.body, token);                
    }

    async function save(req, res){
        const token = req.headers.authorization;
        return await saveCliente(req.body, token);                        
    }

    async function deletar(req, res){
        validarRequisicao(req);
        const token = req.headers.authorization;
        if(!req.params || !req.params.id) throw new Error("Código do cliente é um parametro obrigatório");
        return await deletarCliente(req.params.id, token);                        
    }

    async function obterClientes(dadosToken, registro_inicial, numero_registros){
        let urlPaginacao = registro_inicial ? `&registro_inicial=${registro_inicial}` : "";
        urlPaginacao += numero_registros ? `&numero_registros=${numero_registros}`: "";
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}?token=${dadosToken}${urlPaginacao}`,
            json: true,
        })
    } 
    
    async function obterClientesPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addCliente(dadosCliente, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        });
    } 

    async function saveCliente(dadosCliente, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        })
    } 

    async function deletarCliente(id, dadosToken){
        return  await requestPromise({
            method: 'DELETE',
            uri: `${CONST_URI_BASE}/${id}?token=${dadosToken}`,
            json: true,
        })
    } 

    return {getAll, get, add, save, deletar}
}