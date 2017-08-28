const _ = require ('underscore')
module.exports = function(app)
{
    function atendimento(pedidoHub){
        return { 
            "DATA_CRIACAO": pedidoHub.creationDate,
            "DATA_ALTERACAO":null,
            "UNIDADE":1,
            "SITUACAO":1,
            "DATA_VISUALIZACAO":null,
            "CONSUMIDOR_FINAL":"S",
            "CANAL_VENDA":1,
            "REFERENCIA":null,
            "MOTIVO_CANCELAMENTO":null,
            "FRETE_MODALIDADE":"S",
            "FRETE_VALOR":pedidoHub.shippingAmount,
            "TIPO_ATENDIMENTO":{  
                "TIPO":1
            },
            "TOTAL_PRODUTOS":valoTotalPedidos(pedidoHub.items),
            "TOTAL_IPI":0,
            "TOTAL_ICMS_ST":0,
            "TOTAL_DESCONTO_PERCENTUAL":0,
            "TOTAL_DESCONTO_VALOR":pedidoHub.discount,
            "TOTAL_ACRESCIMO_VALOR":0,
            "TOTAL":pedidoHub.value,
            "TOTAL_PAGO":pedidoHub.value,
            "TROCO":0,
            "PESO_TOTAL":0,
            "CLIENTE": clienteBuilder(pedidoHub.clientProfileData),
            "VENDEDOR": 1,
            "INTERMEDIARIO":null,
            "LOCALIZACAO": null,
            "FORMA_ENTREGA":formaEntraga(pedidoHub.logisticsinfo),
            "TRANSPORTADORA":null,
            "ENDERECO": null,
            "HISTORICOS":null,
            "ITENS":listaItemBuilder(pedidoHub.items),
            "PAGAMENTOS": null,
            "TEXTOS": textosBuilder(pedidoHub)
        }
    }

    function listaItemBuilder(itens = []){
        return _.map(itens, item => itemBuilder(item));
    }

    function itemBuilder(item){
        return {       
            "UNIDADE":1,
            "ITEM":1,
            "PESO":null,/*BUSCAR O PESO DO PRODUTO */
            "QUANTIDADE":item.quantity,
            "QUANTIDADE_RESERVA":0,
            "QUANTIDADE_ATENDIDA":0,
            "VALOR_UNITARIO":item.sellingPrice,
            "DESCONTO_PERCENTUAL":0,
            "DESCONTO_VALOR":item.discount,
            "ACRESCIMO_PERCENTUAL":0,
            "ACRESCIMO_VALOR":0,
            "VALOR_TOTAL":item.sellingPrice,
            "VALOR_IPI":0,
            "VALOR_ICMS_ST":0,
            "RESERVAR":"N",
            "OBSERVACAO":null,
            "REGRA_PRECIFICACAO":0,
            "PRODUTO":{  
                "NOME":"TESTE DE INCLUSÃO" /**BUSCAR O NOME DO PRODUTO */,
                "CATEGORIA":{  
                    "CODIGO":1,
                    "TIPO":0,
                    "NOME":"Alimentos"
                 },
                 "UNIDADE_MEDIDA_VENDA":{  
                    "SIGLA":"PCT"
                 },
                 "PRECOS":[  
                    {  
                       "UNIDADE":0,
                       "MARGEM_CUSTO_REAL":"0.00000",
                       "PRECO_CUSTO":null,
                       "PRECO_CUSTO_ANTERIOR":null,
                       "PRECO_CUSTO_REAL":null,
                       "PRECO_MEDIO":null,
                       "PRECO_VENDA":"3.75000",
                       "PRECO_VENDA_ANTERIOR":null,
                       "DESCONTO_MAXIMO":null,
                       "DATA_ALTERACAO":"2017-03-29 09:38:17"
                    }
                 ],
                 "FABRICANTE":{  
                    "NOME":"Peruchi"
                 },
               
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
    function clienteBuilder(cliente = {}){
        return {  
                "CODIGO":22628,
                "NOME":cliente.tradeName,
                "TIPO_PESSOA":cliente.documentType == "cpf" ? "F" : "J",
                "SITUACAO":"A",
                "DOCUMENTO":cliente.document,
                "EXCLUIDO":"N",
                "RESPONSAVEL":{  
                   "NOME":"SITE"
                },
                "EMAILS":[  
                    {
                        "EMAIL": cliente.email,
                        "PRINCIPAL": "S",
                        "EXCLUSIVO": "S",
                        "PADRAO_NFE": "S"    
                    }
                ],
                "ENDERECOS":[  
                   {  
                      "TIPO":"C",
                      "PRINCIPAL":"S",
                      "CEP":"11630-970",
                      "ENDERECO":"Rua Gerson Peres de Araújo",
                      "NUMERO":"22",
                      "COMPLEMENTO":"",
                      "BAIRRO":"Barra Velha",
                      "PAIS":{  
                         "NOME":"Brasil"
                      },
                      "ESTADO":{  
                         "SIGLA":"SP"
                      },
                      "CIDADE":{  
                         "NOME":"Ilhabela",
                         "CODIGO_IBGE":3550902
                      }
                   }
                ]
             }            
    }

    function vendedorBuilder(vendedor){
        return {
            "NOME":1
        }        
    }
    
    function formaEntraga(forma = []){
        if(forma.length == 0) return null;
        return{
            NOME: forma[0].deliveryIds.courierName
        }
    }

    function listaPagamentosBuilder(pagamentos = []){
        return _.map(_.first(pagamentos), item => pagamentoBuilder(item));
    }
    function pagamentoBuilder(pagamento){
        return { 
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
            "OBSERVACAO":1,
            "OBSERVACAO_ENTREGA":null,
            "POSICIONAMENTO_LATITUDE":null,
            "POSICIONAMENTO_LONGITUDE":null
        }
    }

    function valoTotalPedidos(itens = []){
        return _.reduce(itens,(item,result = 0 ) => item.sellingPrice * item.quantity + result);
    }
    return {atendimento}
}