#API de comunicação com o serviço alkord
##Autenticação
###Geração do Token de autenticação

Método        | URL
------------- | -------------
POST          | http://localhost:3008/token

##### Exemplo Request
```json
{
   "email":"email@provador.com.br",
   "senha":"senha"
}
```
#### Exemplo Response
```json
{
  "token_acesso": "40bc2b5cd9193805d9688a4a61623da3",
  "token_renovacao": "081a9bf2e9353cb06c6b79f443bca0fd", 
  "usuario": 1316, 
  "licenca": "2", 
  "validade": 3600 
}
```

### Renovação do Token de autenticação

Método        | URL
------------- | -------------
GET           | http://localhost:3008/renovarToken?token=asdasdasdasdasdasda

#### Exemplo Response
```json
{
  "token_acesso": "40bc2b5cd9193805d9688a4a61623da3",
  "token_renovacao": "081a9bf2e9353cb06c6b79f443bca0fd", 
  "usuario": 1316, 
  "licenca": "2", 
  "validade": 3600 
}
```
## Forma de autenticação
Para se autenticar na API será necessário enviar o token gerado do serviço "TOKEN" no header da requisição

HEADER        | value
------------- | -------------
Authorization | {token_gerado}

## Cadastro de produtos

### Buscar todos os clientes

Método        | URL
------------- | -------------
GET           | http://localhost:3008/clientes
GET           | http://localhost:3008/clientes?registro_inicial={opcional}?numero_registros{opcional}


#### Exemplo Response

```json
{  
   "TOTAL_REGISTROS":1,
   "REGISTROS":[  
      {  
         "CODIGO":3,
         "DATA_CRIACAO":"2017-03-28 12:54:22",
         "DATA_ALTERACAO":"2017-04-10 11:19:50",
         "NOME":"Adalberto João da Silva",
         "APELIDO":null,
         "TIPO_PESSOA":"F",
         "SITUACAO":"A",
         "RESTRICAO":null,
         "DOCUMENTO":"012.345.678-90",
         "DOCUMENTO2":null,
         "INTERNET":null,
         "ESTADO_CIVIL":null,
         "NASCIMENTO_CONSTITUICAO":null,
         "EXCLUIDO":"N",
         "RESPONSAVEL":{  
            "CODIGO":2,
            "NOME":"Roberto Machado"
         },
         "EMAILS":[  

         ],
         "TELEFONES":[  

         ],
         "ENDERECOS":[  
            {  
               "CODIGO":2,
               "TIPO":"C",
               "PRINCIPAL":"S",
               "CEP":"89023-430",
               "ENDERECO":"Rua Agronômica",
               "NUMERO":"350",
               "COMPLEMENTO":"",
               "BAIRRO":"Valparaiso",
               "CAIXA_POSTAL":null,
               "DESCRICAO":null,
               "CONTATO_ALTERNATIVO":null,
               "POSICIONAMENTO_LATITUDE":"-26.95400",
               "POSICIONAMENTO_LONGITUDE":"-49.07420",
               "PAIS":{  
                  "NOME":"Brasil"
               },
               "ESTADO":{  
                  "SIGLA":"SC"
               },
               "CIDADE":{  
                  "NOME":"Blumenau",
                  "CODIGO_IBGE":4202404
               }
            }
         ]
      }
   ]
}
```

### Buscar cliente por ID

Método        | URL
------------- | -------------
GET           | http://localhost:3008/clientes/{ID}

#### Exemplo Response
```json
{  
   "TOTAL_REGISTROS":1,
   "REGISTROS":[  
      {  
         "CODIGO":3,
         "DATA_CRIACAO":"2017-03-28 12:54:22",
         "DATA_ALTERACAO":"2017-04-10 11:19:50",
         "NOME":"Adalberto João da Silva",
         "APELIDO":null,
         "TIPO_PESSOA":"F",
         "SITUACAO":"A",
         "RESTRICAO":null,
         "DOCUMENTO":"012.345.678-90",
         "DOCUMENTO2":null,
         "INTERNET":null,
         "ESTADO_CIVIL":null,
         "NASCIMENTO_CONSTITUICAO":null,
         "EXCLUIDO":"N",
         "RESPONSAVEL":{  
            "CODIGO":2,
            "NOME":"Roberto Machado"
         },
         "EMAILS":[  

         ],
         "TELEFONES":[  

         ],
         "ENDERECOS":[  
            {  
               "CODIGO":2,
               "TIPO":"C",
               "PRINCIPAL":"S",
               "CEP":"89023-430",
               "ENDERECO":"Rua Agronômica",
               "NUMERO":"350",
               "COMPLEMENTO":"",
               "BAIRRO":"Valparaiso",
               "CAIXA_POSTAL":null,
               "DESCRICAO":null,
               "CONTATO_ALTERNATIVO":null,
               "POSICIONAMENTO_LATITUDE":"-26.95400",
               "POSICIONAMENTO_LONGITUDE":"-49.07420",
               "PAIS":{  
                  "NOME":"Brasil"
               },
               "ESTADO":{  
                  "SIGLA":"SC"
               },
               "CIDADE":{  
                  "NOME":"Blumenau",
                  "CODIGO_IBGE":4202404
               }
            }
         ]
      }
   ]
}
```

### Incluir um novo cliente

Método        | URL
------------- | -------------
POST           | http://localhost:3008/clientes

#### Exemplo Request
```json
{  
   "NOME":"Juliana Oliveira dos Santos",
   "TIPO_PESSOA":"F",
   "SITUACAO":"A",
   "DOCUMENTO":"454.047.772-22",
   "EXCLUIDO":"N",
   "RESPONSAVEL":{  
      "NOME":"Francisco Oliveira"
   },
   "EMAILS":[  

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
```
#### Exemplo Response
```json
{  
   "REFERENCIAS":{  
      "CODIGO":"30",
      "PESSOAS_ENDERECOS":[  
         {  
            "REFERENCIAS":{  
               "CODIGO":"19"
            }
         }
      ]
   }
}
```

### Atualizar os dados do cliente

Método        | URL
------------- | -------------
PUT           | http://localhost:3008/clientes

#### Exemplo Request
```json
{
   "CODIGO":3,
   "NOME":"Juliana Oliveira dos Santos",
   "TIPO_PESSOA":"F",
   "SITUACAO":"A",
   "DOCUMENTO":"454.047.772-22",
   "EXCLUIDO":"N",
   "RESPONSAVEL":{  
      "NOME":"Francisco Oliveira"
   },
   "EMAILS":[  

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
```
#### Exemplo Response
```json
{  
   "REFERENCIAS":{  
      "CODIGO":"30",
      "PESSOAS_ENDERECOS":[  
         {  
            "REFERENCIAS":{  
               "CODIGO":"19"
            }
         }
      ]
   }
}
```

### Deletar um cliente por ID

Método        | URL
------------- | -------------
DELETE           | http://localhost:3008/clientes/{ID}

#### Exemplo Response
```json
{  

}
```
##Cadastro de atendimentos

### Buscar todos os produtos

Método        | URL
------------- | -------------
GET           | http://localhost:3008/produtos

#### Exemplo Response

```json
{  
   "TOTAL_REGISTROS":99,
   "REGISTROS":[  
      {  
         "CODIGO":1,
         "DATA_CRIACAO":"2017-03-29 09:57:05",
         "DATA_ALTERACAO":"2017-03-29 09:57:15",
         "UNIDADE":1,
         "SITUACAO":"4",
         "DATA":"2017-03-29 09:56:40",
         "DATA_VISUALIZACAO":null,
         "CONSUMIDOR_FINAL":"N",
         "CANAL_VENDA":3,
         "REFERENCIA":null,
         "MOTIVO_CANCELAMENTO":null,
         "FRETE_MODALIDADE":"S",
         "FRETE_VALOR":"0.00000",
         "TOTAL_PRODUTOS":"8.28000",
         "TOTAL_IPI":"0.00000",
         "TOTAL_ICMS_ST":"0.00000",
         "TOTAL_DESCONTO_PERCENTUAL":"0.00000",
         "TOTAL_DESCONTO_VALOR":"0.00000",
         "TOTAL_ACRESCIMO_VALOR":"0.00000",
         "TOTAL":"8.28000",
         "TOTAL_PAGO":"8.28000",
         "TROCO":"0.00000",
         "PESO_TOTAL":0,
         "TIPO_ATENDIMENTO":{  
            "CODIGO":5,
            "TIPO":5,
            "DESCRICAO":"Pronta entrega"
         },
         "CLIENTE":{  
            "CODIGO":3,
            "NOME":"Adalberto João da Silva"
         },
         "VENDEDOR":{  
            "CODIGO":2,
            "NOME":"Roberto Machado"
         },
         "INTERMEDIARIO":null,
         "LOCALIZACAO":{  
            "CODIGO":2,
            "TIPO":"2",
            "NOME":"Furgão 1"
         },
         "FORMA_ENTREGA":null,
         "TRANSPORTADORA":null,
         "ENDERECO":{  
            "CODIGO":2,
            "TIPO":"C",
            "PRINCIPAL":"S",
            "CEP":"89023-430",
            "ENDERECO":"Rua Agronômica",
            "NUMERO":"350",
            "COMPLEMENTO":"",
            "BAIRRO":"Valparaiso",
            "CAIXA_POSTAL":null,
            "DESCRICAO":null,
            "CONTATO_ALTERNATIVO":null,
            "POSICIONAMENTO_LATITUDE":"-26.95400",
            "POSICIONAMENTO_LONGITUDE":"-49.07420",
            "PAIS":{  
               "NOME":"Brasil"
            },
            "ESTADO":{  
               "SIGLA":"SC"
            },
            "CIDADE":{  
               "NOME":"Blumenau"
            }
         },
         "HISTORICOS":[  
            {  
               "CODIGO":1,
               "TIPO":"1",
               "DATA":"2017-03-29 09:57:05",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":2,
               "TIPO":"6",
               "DATA":"2017-03-29 09:57:15",
               "OBSERVACAO":"Nota emitida: série 139 - número 62",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":3,
               "TIPO":"8",
               "DATA":"2017-03-29 09:57:15",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":4,
               "TIPO":"8",
               "DATA":"2017-03-29 10:01:53",
               "OBSERVACAO":"Nota cancelada: série 139 - número 62",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":8,
               "TIPO":"6",
               "DATA":"2017-03-29 20:39:01",
               "OBSERVACAO":"Nota emitida: série 139 - número 63",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":9,
               "TIPO":"8",
               "DATA":"2017-03-29 20:39:01",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            }
         ],
         "ITENS":[  
            {  
               "CODIGO":1,
               "UNIDADE":1,
               "ITEM":1,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"3.75000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"3.75000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":1,
                  "NOME":"Arroz Peruchi 5KG"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            },
            {  
               "CODIGO":2,
               "UNIDADE":1,
               "ITEM":2,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"2.55000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"2.55000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":2,
                  "NOME":"Coca-Cola 1,5L"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            },
            {  
               "CODIGO":3,
               "UNIDADE":1,
               "ITEM":3,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"1.98000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"1.98000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":3,
                  "NOME":"Vanish Super Barra"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            }
         ],
         "PAGAMENTOS":[  
            {  
               "CODIGO":1,
               "UNIDADE":1,
               "VALOR":"8.28000",
               "MEIO_PAGAMENTO":{  
                  "CODIGO":1,
                  "NOME":"Dinheiro"
               },
               "CONDICAO_PAGAMENTO":{  
                  "CODIGO":1,
                  "NOME":"À vista"
               }
            }
         ],
         "TEXTOS":{  
            "OBSERVACAO":null,
            "OBSERVACAO_ENTREGA":null,
            "POSICIONAMENTO_LATITUDE":null,
            "POSICIONAMENTO_LONGITUDE":null
         }
      }
   ]
}
```

### Buscar produto por ID

Método        | URL
------------- | -------------
GET           | http://localhost:3008/produtos/{ID}

#### Exemplo Response
```json
{  
   "TOTAL_REGISTROS":1,
   "REGISTROS":[  
      {  
         "CODIGO":1,
         "DATA_CRIACAO":"2017-03-29 09:57:05",
         "DATA_ALTERACAO":"2017-03-29 09:57:15",
         "UNIDADE":1,
         "SITUACAO":"4",
         "DATA":"2017-03-29 09:56:40",
         "DATA_VISUALIZACAO":null,
         "CONSUMIDOR_FINAL":"N",
         "CANAL_VENDA":3,
         "REFERENCIA":null,
         "MOTIVO_CANCELAMENTO":null,
         "FRETE_MODALIDADE":"S",
         "FRETE_VALOR":"0.00000",
         "TOTAL_PRODUTOS":"8.28000",
         "TOTAL_IPI":"0.00000",
         "TOTAL_ICMS_ST":"0.00000",
         "TOTAL_DESCONTO_PERCENTUAL":"0.00000",
         "TOTAL_DESCONTO_VALOR":"0.00000",
         "TOTAL_ACRESCIMO_VALOR":"0.00000",
         "TOTAL":"8.28000",
         "TOTAL_PAGO":"8.28000",
         "TROCO":"0.00000",
         "PESO_TOTAL":0,
         "TIPO_ATENDIMENTO":{  
            "CODIGO":5,
            "TIPO":5,
            "DESCRICAO":"Pronta entrega"
         },
         "CLIENTE":{  
            "CODIGO":3,
            "NOME":"Adalberto João da Silva"
         },
         "VENDEDOR":{  
            "CODIGO":2,
            "NOME":"Roberto Machado"
         },
         "INTERMEDIARIO":null,
         "LOCALIZACAO":{  
            "CODIGO":2,
            "TIPO":"2",
            "NOME":"Furgão 1"
         },
         "FORMA_ENTREGA":null,
         "TRANSPORTADORA":null,
         "ENDERECO":{  
            "CODIGO":2,
            "TIPO":"C",
            "PRINCIPAL":"S",
            "CEP":"89023-430",
            "ENDERECO":"Rua Agronômica",
            "NUMERO":"350",
            "COMPLEMENTO":"",
            "BAIRRO":"Valparaiso",
            "CAIXA_POSTAL":null,
            "DESCRICAO":null,
            "CONTATO_ALTERNATIVO":null,
            "POSICIONAMENTO_LATITUDE":"-26.95400",
            "POSICIONAMENTO_LONGITUDE":"-49.07420",
            "PAIS":{  
               "NOME":"Brasil"
            },
            "ESTADO":{  
               "SIGLA":"SC"
            },
            "CIDADE":{  
               "NOME":"Blumenau"
            }
         },
         "HISTORICOS":[  
            {  
               "CODIGO":1,
               "TIPO":"1",
               "DATA":"2017-03-29 09:57:05",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":2,
               "TIPO":"6",
               "DATA":"2017-03-29 09:57:15",
               "OBSERVACAO":"Nota emitida: série 139 - número 62",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":3,
               "TIPO":"8",
               "DATA":"2017-03-29 09:57:15",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":4,
               "TIPO":"8",
               "DATA":"2017-03-29 10:01:53",
               "OBSERVACAO":"Nota cancelada: série 139 - número 62",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":8,
               "TIPO":"6",
               "DATA":"2017-03-29 20:39:01",
               "OBSERVACAO":"Nota emitida: série 139 - número 63",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":9,
               "TIPO":"8",
               "DATA":"2017-03-29 20:39:01",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            }
         ],
         "ITENS":[  
            {  
               "CODIGO":1,
               "UNIDADE":1,
               "ITEM":1,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"3.75000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"3.75000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":1,
                  "NOME":"Arroz Peruchi 5KG"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            },
            {  
               "CODIGO":2,
               "UNIDADE":1,
               "ITEM":2,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"2.55000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"2.55000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":2,
                  "NOME":"Coca-Cola 1,5L"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            },
            {  
               "CODIGO":3,
               "UNIDADE":1,
               "ITEM":3,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"1.98000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"1.98000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":3,
                  "NOME":"Vanish Super Barra"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            }
         ],
         "PAGAMENTOS":[  
            {  
               "CODIGO":1,
               "UNIDADE":1,
               "VALOR":"8.28000",
               "MEIO_PAGAMENTO":{  
                  "CODIGO":1,
                  "NOME":"Dinheiro"
               },
               "CONDICAO_PAGAMENTO":{  
                  "CODIGO":1,
                  "NOME":"À vista"
               }
            }
         ],
         "TEXTOS":{  
            "OBSERVACAO":null,
            "OBSERVACAO_ENTREGA":null,
            "POSICIONAMENTO_LATITUDE":null,
            "POSICIONAMENTO_LONGITUDE":null
         }
      }
   ]
}
```

### Incluir um novo produto

Método        | URL
------------- | -------------
POST           | http://localhost:3008/produtos

#### Exemplo Request
```json
{  
 
   "DATA_CRIACAO":"2017-03-29 09:38:17",
   "DATA_ALTERACAO":"2017-03-29 09:45:44",
   "CODIGO_BARRAS":"7896006718543",
   "NOME":"Arroz Peruchi 5KG",
   "FABRICACAO_PROPRIA":"N",
   "DISPONIBILIDADE":"D",
   "ORIGEM":0,
   "NCM":"10063011",
   "CEST":null,
   "CATEGORIA":{  
      "CODIGO":1,
      "TIPO":0,
      "NOME":"Alimentos"
   },
   "FABRICANTE":{  
      "CODIGO":5,
      "NOME":"Peruchi"
   },
   "UNIDADE_MEDIDA_VENDA":{  
      "CODIGO":11,
      "SIGLA":"PCT"
   },
   "ESTOQUES":[  
      {  
         "UNIDADE":1,
         "LOCALIZACAO":0,
         "QUANTIDADE_MINIMA":"0.00000",
         "QUANTIDADE_ATUAL":"1055.00000",
         "QUANTIDADE_RESERVA":"12.00000",
         "DATA_ALTERACAO":"2017-06-07 10:28:42"
      },
      {  
         "UNIDADE":1,
         "LOCALIZACAO":2,
         "QUANTIDADE_MINIMA":"0.00000",
         "QUANTIDADE_ATUAL":"13.00000",
         "QUANTIDADE_RESERVA":"0.00000",
         "DATA_ALTERACAO":"2017-05-24 13:57:05"
      }
   ],
   "INFORMACOES_ADICIONAIS":{  
      "ACESSO_RAPIDO":null,
      "ALTURA":null,
      "LARGURA":null,
      "COMPRIMENTO":null,
      "PESO":null
   },
   "PRECOS":[  
      {  
         "CODIGO":1,
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
   "SECAO_LOCALIZACAO":[  
      {  
         "CODIGO":1,
         "UNIDADE":1,
         "LOCALIZACAO":{  
            "CODIGO":1,
            "TIPO":"1",
            "NOME":"Geral"
         }
      }
   ],
   "TEXTOS":{  
      "DESCRICAO":null,
      "OBSERVACAO":null
   },
   "TRIBUTARIOS":{  
      "UNIDADE":0,
      "ICMS_SIMPLES_NACIONAL":"T",
      "IPI_CST_ENTRADA":null,
      "IPI_CST_SAIDA":null,
      "IPI_ALIQUOTA":"0.00000",
      "IPI_VALOR_UNIDADE":"0.00000",
      "IPI_CLASSE_ENQUADRAMENTO":null,
      "PIS_CST":"99",
      "PIS_ALIQUOTA":"0.00000",
      "PIS_NATUREZA_RECEITA":null,
      "COFINS_CST":"99",
      "COFINS_ALIQUOTA":"0.00000",
      "COFINS_NATUREZA_RECEITA":null,
      "CONTRIBUICAO_SOCIAL_APURADA":null,
      "TOTAL_TRIBUTOS_TIPO":"P",
      "TOTAL_TRIBUTOS_VALOR":null,
      "TOTAL_TRIBUTOS_PERCENTUAL":"18.00000"
   },
   "TRIBUTARIOS_ICMS":{  
      "UNIDADE":1,
      "CST":"00",
      "ALIQUOTA_ORIGEM":"12.00000",
      "ALIQUOTA_DESTINO":"0.00000",
      "MVA":"0.00000",
      "MVA_AJUSTAR":"N",
      "ALIQUOTA_REDUCAO":"0.00000",
      "ALIQUOTA_REDUCAO_ST":"0.00000",
      "INTERESTADUAL_ALIQUOTA_FCP":"2.00000",
      "INTERESTADUAL_ALIQUOTA_DESTINO":"17.00000",
      "ESTADO":{  
         "SIGLA":"SP"
      }
   }
}  

```
#### Exemplo Response
```json
{  

}
```

### Atualizar os dados do produto

Método        | URL
------------- | -------------
PUT           | http://localhost:3008/produtos

#### Exemplo Request
```json
{  
   "CODIGO":1,
   "DATA_CRIACAO":"2017-03-29 09:38:17",
   "DATA_ALTERACAO":"2017-03-29 09:45:44",
   "CODIGO_BARRAS":"7896006718543",
   "NOME":"Arroz Peruchi 5KG",
   "FABRICACAO_PROPRIA":"N",
   "DISPONIBILIDADE":"D",
   "ORIGEM":0,
   "NCM":"10063011",
   "CEST":null,
   "CATEGORIA":{  
      "CODIGO":1,
      "TIPO":0,
      "NOME":"Alimentos"
   },
   "FABRICANTE":{  
      "CODIGO":5,
      "NOME":"Peruchi"
   },
   "UNIDADE_MEDIDA_VENDA":{  
      "CODIGO":11,
      "SIGLA":"PCT"
   },
   "ESTOQUES":[  
      {  
         "UNIDADE":1,
         "LOCALIZACAO":0,
         "QUANTIDADE_MINIMA":"0.00000",
         "QUANTIDADE_ATUAL":"1055.00000",
         "QUANTIDADE_RESERVA":"12.00000",
         "DATA_ALTERACAO":"2017-06-07 10:28:42"
      },
      {  
         "UNIDADE":1,
         "LOCALIZACAO":2,
         "QUANTIDADE_MINIMA":"0.00000",
         "QUANTIDADE_ATUAL":"13.00000",
         "QUANTIDADE_RESERVA":"0.00000",
         "DATA_ALTERACAO":"2017-05-24 13:57:05"
      }
   ],
   "INFORMACOES_ADICIONAIS":{  
      "ACESSO_RAPIDO":null,
      "ALTURA":null,
      "LARGURA":null,
      "COMPRIMENTO":null,
      "PESO":null
   },
   "PRECOS":[  
      {  
         "CODIGO":1,
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
   "SECAO_LOCALIZACAO":[  
      {  
         "CODIGO":1,
         "UNIDADE":1,
         "LOCALIZACAO":{  
            "CODIGO":1,
            "TIPO":"1",
            "NOME":"Geral"
         }
      }
   ],
   "TEXTOS":{  
      "DESCRICAO":null,
      "OBSERVACAO":null
   },
   "TRIBUTARIOS":{  
      "UNIDADE":0,
      "ICMS_SIMPLES_NACIONAL":"T",
      "IPI_CST_ENTRADA":null,
      "IPI_CST_SAIDA":null,
      "IPI_ALIQUOTA":"0.00000",
      "IPI_VALOR_UNIDADE":"0.00000",
      "IPI_CLASSE_ENQUADRAMENTO":null,
      "PIS_CST":"99",
      "PIS_ALIQUOTA":"0.00000",
      "PIS_NATUREZA_RECEITA":null,
      "COFINS_CST":"99",
      "COFINS_ALIQUOTA":"0.00000",
      "COFINS_NATUREZA_RECEITA":null,
      "CONTRIBUICAO_SOCIAL_APURADA":null,
      "TOTAL_TRIBUTOS_TIPO":"P",
      "TOTAL_TRIBUTOS_VALOR":null,
      "TOTAL_TRIBUTOS_PERCENTUAL":"18.00000"
   },
   "TRIBUTARIOS_ICMS":{  
      "UNIDADE":1,
      "CST":"00",
      "ALIQUOTA_ORIGEM":"12.00000",
      "ALIQUOTA_DESTINO":"0.00000",
      "MVA":"0.00000",
      "MVA_AJUSTAR":"N",
      "ALIQUOTA_REDUCAO":"0.00000",
      "ALIQUOTA_REDUCAO_ST":"0.00000",
      "INTERESTADUAL_ALIQUOTA_FCP":"2.00000",
      "INTERESTADUAL_ALIQUOTA_DESTINO":"17.00000",
      "ESTADO":{  
         "SIGLA":"SP"
      }
   }
}
   

```
#### Exemplo Response
```json
{  
}
```

### Deletar um produto por ID

Método        | URL
------------- | -------------
DELETE           | http://localhost:3008/produtos/{ID}

#### Exemplo Response
```json
{  

}
```
##Registros de atendimentos

### Buscar todos os Registros de atendimentos

Método        | URL
------------- | -------------
GET           | http://localhost:3008/atendimentos

#### Exemplo Response

```json
{  
   "TOTAL_REGISTROS":99,
   "REGISTROS":[  
      {  
         "CODIGO":1,
         "DATA_CRIACAO":"2017-03-29 09:57:05",
         "DATA_ALTERACAO":"2017-03-29 09:57:15",
         "UNIDADE":1,
         "SITUACAO":"4",
         "DATA":"2017-03-29 09:56:40",
         "DATA_VISUALIZACAO":null,
         "CONSUMIDOR_FINAL":"N",
         "CANAL_VENDA":3,
         "REFERENCIA":null,
         "MOTIVO_CANCELAMENTO":null,
         "FRETE_MODALIDADE":"S",
         "FRETE_VALOR":"0.00000",
         "TOTAL_PRODUTOS":"8.28000",
         "TOTAL_IPI":"0.00000",
         "TOTAL_ICMS_ST":"0.00000",
         "TOTAL_DESCONTO_PERCENTUAL":"0.00000",
         "TOTAL_DESCONTO_VALOR":"0.00000",
         "TOTAL_ACRESCIMO_VALOR":"0.00000",
         "TOTAL":"8.28000",
         "TOTAL_PAGO":"8.28000",
         "TROCO":"0.00000",
         "PESO_TOTAL":0,
         "TIPO_ATENDIMENTO":{  
            "CODIGO":5,
            "TIPO":5,
            "DESCRICAO":"Pronta entrega"
         },
         "CLIENTE":{  
            "CODIGO":3,
            "NOME":"Adalberto João da Silva"
         },
         "VENDEDOR":{  
            "CODIGO":2,
            "NOME":"Roberto Machado"
         },
         "INTERMEDIARIO":null,
         "LOCALIZACAO":{  
            "CODIGO":2,
            "TIPO":"2",
            "NOME":"Furgão 1"
         },
         "FORMA_ENTREGA":null,
         "TRANSPORTADORA":null,
         "ENDERECO":{  
            "CODIGO":2,
            "TIPO":"C",
            "PRINCIPAL":"S",
            "CEP":"89023-430",
            "ENDERECO":"Rua Agronômica",
            "NUMERO":"350",
            "COMPLEMENTO":"",
            "BAIRRO":"Valparaiso",
            "CAIXA_POSTAL":null,
            "DESCRICAO":null,
            "CONTATO_ALTERNATIVO":null,
            "POSICIONAMENTO_LATITUDE":"-26.95400",
            "POSICIONAMENTO_LONGITUDE":"-49.07420",
            "PAIS":{  
               "NOME":"Brasil"
            },
            "ESTADO":{  
               "SIGLA":"SC"
            },
            "CIDADE":{  
               "NOME":"Blumenau"
            }
         },
         "HISTORICOS":[  
            {  
               "CODIGO":1,
               "TIPO":"1",
               "DATA":"2017-03-29 09:57:05",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":2,
               "TIPO":"6",
               "DATA":"2017-03-29 09:57:15",
               "OBSERVACAO":"Nota emitida: série 139 - número 62",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":3,
               "TIPO":"8",
               "DATA":"2017-03-29 09:57:15",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":4,
               "TIPO":"8",
               "DATA":"2017-03-29 10:01:53",
               "OBSERVACAO":"Nota cancelada: série 139 - número 62",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":8,
               "TIPO":"6",
               "DATA":"2017-03-29 20:39:01",
               "OBSERVACAO":"Nota emitida: série 139 - número 63",
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            },
            {  
               "CODIGO":9,
               "TIPO":"8",
               "DATA":"2017-03-29 20:39:01",
               "OBSERVACAO":null,
               "RESPONSAVEL":{  
                  "CODIGO":2,
                  "NOME":"Roberto Machado"
               }
            }
         ],
         "ITENS":[  
            {  
               "CODIGO":1,
               "UNIDADE":1,
               "ITEM":1,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"3.75000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"3.75000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":1,
                  "NOME":"Arroz Peruchi 5KG"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            },
            {  
               "CODIGO":2,
               "UNIDADE":1,
               "ITEM":2,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"2.55000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"2.55000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":2,
                  "NOME":"Coca-Cola 1,5L"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            },
            {  
               "CODIGO":3,
               "UNIDADE":1,
               "ITEM":3,
               "PESO":0,
               "QUANTIDADE":"1.00000",
               "QUANTIDADE_RESERVA":"0.00000",
               "QUANTIDADE_ATENDIDA":"0.00000",
               "VALOR_UNITARIO":"1.98000",
               "DESCONTO_PERCENTUAL":"0.00000",
               "DESCONTO_VALOR":"0.00000",
               "ACRESCIMO_PERCENTUAL":"0.00000",
               "ACRESCIMO_VALOR":"0.00000",
               "VALOR_TOTAL":"1.98000",
               "VALOR_IPI":"0.00000",
               "VALOR_ICMS_ST":"0.00000",
               "RESERVAR":"N",
               "OBSERVACAO":null,
               "REGRA_PRECIFICACAO":null,
               "PRODUTO":{  
                  "CODIGO":3,
                  "NOME":"Vanish Super Barra"
               },
               "USUARIO_AUTORIZACAO":null,
               "USUARIO_AUTORIZACAO_ESTOQUE":null
            }
         ],
         "PAGAMENTOS":[  
            {  
               "CODIGO":1,
               "UNIDADE":1,
               "VALOR":"8.28000",
               "MEIO_PAGAMENTO":{  
                  "CODIGO":1,
                  "NOME":"Dinheiro"
               },
               "CONDICAO_PAGAMENTO":{  
                  "CODIGO":1,
                  "NOME":"À vista"
               }
            }
         ],
         "TEXTOS":{  
            "OBSERVACAO":null,
            "OBSERVACAO_ENTREGA":null,
            "POSICIONAMENTO_LATITUDE":null,
            "POSICIONAMENTO_LONGITUDE":null
         }
      }
   ]
}
```

### Buscar registro por ID

Método        | URL
------------- | -------------
GET           | http://localhost:3008/atendimentos/{ID}

#### Exemplo Response
```json
{}
```

### Incluir um novo registro

Método        | URL
------------- | -------------
POST           | http://localhost:3008/clientes

#### Exemplo Request
```json
{}

```
#### Exemplo Response
```json
{}
```

### Atualizar os dados do registro

Método        | URL
------------- | -------------
PUT           | http://localhost:3008/clientes?token=asdasdasdasdasdasda

#### Exemplo Request
```json
{  
   "CODIGO":1,
   "SITUACAO":3,
   "HISTORICOS":[  
      {  
         "TIPO":"9",
         "DATA":"2017-04-01 09:00:00",
         "OBSERVACAO":"Cliente desistiu do pedido",
         "RESPONSAVEL":{  
            "NOME":"Roberto Machado"
         }
      }
   }
```
#### Exemplo Response
```json
{  
 
}
```