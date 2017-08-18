const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE + "produtos";

    async function getAll(req, res){
        const token = req.headers.authorization;
        return await obterProdutos(token);
    }
    
    async function get(req, res){
        const token = req.headers.authorization;
        return await obterProdutoPorId(req.params.id, token);                
    }

    async function add(req, res){
        const token = req.headers.authorization;
        return await addProduto(req.body, token);                
    }

    async function save(req, res){
        const token = req.headers.authorization;
        return await saveProduto(req.body, token);                        
    }

    async function deletar(req, res){
        const token = req.headers.authorization;
        if(!req.params || !req.params.id) throw new Error("Código do produto é um parametro obrigatório");
        return await deletarProduto(req.params.id, token);                        
    }

    async function obterProdutos(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true
        })
    } 
    
    async function obterProdutoPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addProduto(dadosProduto, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosProduto
        });
    } 

    async function saveProduto(dadosProduto, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosProduto
        })
    }

    async function deletarProduto(id, dadosToken){
        return  await requestPromise({
            method: 'DELETE',
            uri: `${CONST_URI_BASE}/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    return {getAll, get, add, save}
}