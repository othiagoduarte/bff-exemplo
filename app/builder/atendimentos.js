const _ = require ('underscore')
module.exports = function(app)
{
    function atendimento(pedido){
        return { 
            "DATA_CRIACAO": pedido.creationDate,
            "DATA_ALTERACAO":null,
            "UNIDADE":1,
            "SITUACAO":null,
            "DATA":new Date(),
            "DATA_VISUALIZACAO":null,
            "CONSUMIDOR_FINAL":null,
            "CANAL_VENDA":3,
            "REFERENCIA":null,
            "MOTIVO_CANCELAMENTO":null,
            "FRETE_MODALIDADE":null,
            "FRETE_VALOR":null,
            "TOTAL_PRODUTOS":null,
            "TOTAL_IPI":null,
            "TOTAL_ICMS_ST":null,
            "TOTAL_DESCONTO_PERCENTUAL":null,
            "TOTAL_DESCONTO_VALOR":null,
            "TOTAL_ACRESCIMO_VALOR":null,
            "TOTAL":null,
            "TOTAL_PAGO":"8.28000",
            "TROCO":"0.00000",
            "PESO_TOTAL":0,
            "TIPO_ATENDIMENTO":tipoAtendimentoBuilder(pedido),
            "CLIENTE": clienteBuilder(pedido),
            "VENDEDOR": vendedorBuilder(pedido),
            "INTERMEDIARIO":null,
            "LOCALIZACAO": localicaxaoBuilder(pedido),
            "FORMA_ENTREGA":null,
            "TRANSPORTADORA":null,
            "ENDERECO": enderecoBuilder(pedido),
            "HISTORICOS":listaHistoricoBuilder(pedido),
            "ITENS":listaItemBuilder(pedido),
            "PAGAMENTOS": listaPagamentosBuilder(pedido),
            "TEXTOS": textosBuilder(pedido)
        }
    }

    function listaItemBuilder(itens){
        return _.map(itens, item => itemBuilder(item));
    }

    function itemBuilder(item){
        return {       
            "CODIGO":item.id,
            "UNIDADE":null,
            "ITEM":null,
            "PESO":null,
            "QUANTIDADE":item.quantity,
            "QUANTIDADE_RESERVA":null,
            "QUANTIDADE_ATENDIDA":null,
            "VALOR_UNITARIO":item.sellingPrice,
            "DESCONTO_PERCENTUAL":null,
            "DESCONTO_VALOR":item.discount,
            "ACRESCIMO_PERCENTUAL":null,
            "ACRESCIMO_VALOR":null,
            "VALOR_TOTAL":item.quantity * item.sellingPrice,
            "VALOR_IPI":null,
            "VALOR_ICMS_ST":null,
            "RESERVAR":"N",
            "OBSERVACAO":null,
            "REGRA_PRECIFICACAO":null,
            "PRODUTO":{  
                "NOME":null
            },
            "USUARIO_AUTORIZACAO":null,
            "USUARIO_AUTORIZACAO_ESTOQUE":null
        }

    }

    function listaHistoricoBuilder(){
        return _.map(historicos, item => historicoBuilder(item) )
    }

    function historicoBuilder(historico){
        return {  
            "TIPO":null,
            "DATA":null,
            "OBSERVACAO":null,
            "RESPONSAVEL":{  
                "NOME":null
            }
        }
    }
    function clienteBuilder(cliente){
        return {
            "NOME":cliente.corporateName
        }
    }

    function vendedorBuilder(vendedor){
        return {
            "NOME":null
        }        
    }

    function atendimento(atendimento){
        return{
            "TIPO":null,
            "DESCRICAO":null
        }
    }

    function localicaxaoBuilder(localizacao){
        return {
            "TIPO":null,
            "NOME":null
        }
    }

    function enderecoBuilder(endereco){
        return {
            "TIPO":null,
            "PRINCIPAL":null,
            "CEP":null,
            "ENDERECO":null,
            "NUMERO":null,
            "COMPLEMENTO":null,
            "BAIRRO":null,
            "CAIXA_POSTAL":null,
            "DESCRICAO":null,
            "CONTATO_ALTERNATIVO":null,
            "POSICIONAMENTO_LATITUDE":null,
            "POSICIONAMENTO_LONGITUDE":null,
            "PAIS":{  
                "NOME":null
            },
            "ESTADO":{  
                "SIGLA":null
            },
            "CIDADE":{  
                "NOME":null
            }
        }
    }

    function listaPagamentosBuilder(pagamentos){
        return _.map(pagamentos, item => pagamentoBuilder(item));
    }
    function pagamentoBuilder(pagamento){
        return { 
            "CODIGO":1,
            "UNIDADE":1,
            "VALOR":null,
            "MEIO_PAGAMENTO":{  
                "NOME":null
            },
            "CONDICAO_PAGAMENTO":{  
                "NOME":null
            }
        }
    }

    function textosBuilder(textos){
        return {  
            "OBSERVACAO":null,
            "OBSERVACAO_ENTREGA":null,
            "POSICIONAMENTO_LATITUDE":null,
            "POSICIONAMENTO_LONGITUDE":null
        }
    }

    return {atendimento}
}