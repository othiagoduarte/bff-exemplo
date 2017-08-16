const _ = require ('underscore')
const requestPromise = require('request-promise');
const base64 = require('base-64');
const utf8 = require('utf8');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE; 
    const CONST_FINALIDADE = app.enuns.dados.CONST_FINALIDADE;

    async function renovarToken(req, res){
        validarRequisicao(req)
        return await renovar(req.query.token);
    }

    function validarRequisicao(req){
        if(!req.query || !req.query.token) throw new Error("Token é um parametro obrigatório");
    }

    async function gerarToken (req, res) {
        const builderToken = builderTokenUsuario(req.body)
        const retornoLicenca = builderRetornoLicencas(await obterLicencas(builderToken));
        let retornoCadastroIntegracao = await obterListaIntegracao(retornoLicenca, builderToken);
        if(retornoCadastroIntegracao){
            retornoCadastroIntegracao = buscarIntegracaoporDescricao(retornoCadastroIntegracao, retornoLicenca.NOME);
        }else{
            retornoCadastroIntegracao = builderRetornoIntegracao(await cadastrarIntegracao(retornoLicenca, builderToken));                        
        }
        return  await obterToken(retornoLicenca.CODIGO, retornoCadastroIntegracao.CODIGO, CONST_FINALIDADE, builderToken);
    }

    function buscarIntegracaoporDescricao(retornoCadastroIntegracao, descricao){
        return _.find(retornoCadastroIntegracao.REGISTROS, (item) => item.DESCRICAO == descricao);
    }

    async function obterLicencas(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}licencas`,
            json: true,
            headers: {
                'Authorization': tokenToAuthorization(dadosToken)
            },
        })
    }

    async function cadastrarIntegracao(dadosIntegracao, token){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}integracoes?licenca=${dadosIntegracao.CODIGO}`,
            json: true,
            headers: {
                'Authorization': tokenToAuthorization(token)
            },
            body:{ 
                DESCRICAO: dadosIntegracao.NOME
            }
        });
    }

    async function obterListaIntegracao(dadosIntegracao, token){
        console.log(`${CONST_URI_BASE}integracoes?licenca=${dadosIntegracao.CODIGO}`, dadosIntegracao);
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}integracoes?licenca=${dadosIntegracao.CODIGO}`,
            json: true,
            headers: {
                'Authorization': tokenToAuthorization(token)
            }
        });        
    }
    
    async function obterToken(licenca, integracao, finalidade, token){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}token?licenca=${licenca}&integracao=${integracao}&finalidade=${finalidade}`,
            json: true,
            headers: {
                'Authorization': tokenToAuthorization(token)
            }
        });        
    }

    function validarLogin(body){
        if(!body.email) throw new Error("E-mail obrigatório");
        if(!body.senha) throw new Error("Senha obrigatória");
    }

    function builderTokenUsuario(dadosUsuario){
        validarLogin(dadosUsuario);
        return toBase64(dadosUsuario.email + ":" + dadosUsuario.senha); 
    }

    function toBase64(word){
        return base64.encode(utf8.encode((word)));
    }

    function tokenToAuthorization(token){
        return "Basic " + token;
    }

    function builderRetornoLicencas(retornoLicencas){
        return _.first(retornoLicencas);
    }

    function builderRetornoIntegracao(retornoIntegracao){
        return retornoIntegracao.REFERENCIAS
    }

    async function renovar(tokenValido){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}renovar-token?token=${tokenValido}`,
            json: true,
        })    
    } 

    return {gerarToken, renovarToken};
};