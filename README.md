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

### Buscar todos os clientes

Método        | URL
------------- | -------------
GET           | http://localhost:3008/clientes?token=asdasdasdasdasdasda

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
GET           | http://localhost:3008/clientes/{ID}?token=asdasdasdasdasdasda

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
POST           | http://localhost:3008/clientes?token=asdasdasdasdasdasda

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
PUT           | http://localhost:3008/clientes?token=asdasdasdasdasdasda

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
DELETE           | http://localhost:3008/clientes/{ID}?token=asdasdasdasdasdasda

#### Exemplo Response
```json
{  

}
```
### Buscar todos os produtos

Método        | URL
------------- | -------------
GET           | http://localhost:3008/produtos?token=asdasdasdasdasdasda

#### Exemplo Response

```json
{
}
```

### Buscar produto por ID

Método        | URL
------------- | -------------
GET           | http://localhost:3008/produtos/{ID}?token=asdasdasdasdasdasda

#### Exemplo Response
```json
{  
}
```

### Incluir um novo produto

Método        | URL
------------- | -------------
POST           | http://localhost:3008/produtos?token=asdasdasdasdasdasda

#### Exemplo Request
```json
{  
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
PUT           | http://localhost:3008/produtos?token=asdasdasdasdasdasda

#### Exemplo Request
```json
{
   
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
DELETE           | http://localhost:3008/produtos/{ID}?token=asdasdasdasdasdasda

#### Exemplo Response
```json
{  

}
```
### Buscar todos os Registros de atendimentos

Método        | URL
------------- | -------------
GET           | http://localhost:3008/registros?token=asdasdasdasdasdasda

#### Exemplo Response

```json
{  
}
```

### Buscar registro por ID

Método        | URL
------------- | -------------
GET           | http://localhost:3008/registros/{ID}?token=asdasdasdasdasdasda

#### Exemplo Response
```json
{  
 
}
```

### Incluir um novo registro

Método        | URL
------------- | -------------
POST           | http://localhost:3008/clientes?token=asdasdasdasdasdasda

#### Exemplo Request
```json
{  
  
}
```
#### Exemplo Response
```json
{  
  
}
```

### Atualizar os dados do registro

Método        | URL
------------- | -------------
PUT           | http://localhost:3008/clientes?token=asdasdasdasdasdasda

#### Exemplo Request
```json
{
   "CODIGO":3,
  
}
```
#### Exemplo Response
```json
{  
 
}
```






Geração de token
Para gerar o token, são 4 passos:

#1. 
Primeiro precisa do e-mail de login e da senha. Concatene os dois, separados por dois-pontos (:), e então

codifique em base 64. Exemplo:
E-mail de login: email@email.com.br
Senha: 123senha
Concatenado: email@email.com.br:123senha
Codificado em base 64: ZW1haWxAZW1haWwuY29tLmJyOjEyM3Nlbmhh
#2. Depois, com o base 64, deve-se obter a lista de licenças que o usuário pode logar. Caso o usuário
possua mais de uma licença, deve-se solicitar qual licença ele irá utilizar. Para obter a lista, deve ser feito
uma chamada do tipo GET para https://api.alkord.com/licencas, e no header do Request, deve ser
adicionado o parâmetro Authorization: Basic ZW1haWxAZW1haWwuY29tLmJyOjEyM3Nlbmhh
A chamada irá retornar um array JSON no seguinte formato:
[
{
"CODIGO": 2,
"ATIVA": "S",
"GRATUITA": "N",
"PAIS": 1,
"NOME": "VendasExternas - Brasil",
"APELIDO": "VendasExternas - Brasil",
"DOCUMENTO": "25.072.977/0001-45"
}
]
O campo CODIGO será utilizado para a geração do token.
#3. Depois de obter a licença, deve-se deve-se gerar um código de integração do ERP com a licença. Caso o
cadastro já tenha feito, pode-se apenas obter a lista, para confirmar o código.
Para cadastrar, deve-se enviar uma chamada POST para a URL https://api.alkord.com/integracoes,
informando novamente o header Authorization no request, e informando o parâmetro licenca, com o
código da licença, obtido no passo 2: https://api.alkord.com/integracoes?licenca=2. No corpo do request,
deve ser enviado um objeto JSON com o campo DESCRICAO contendo o nome do ERP:
{
"DESCRICAO":"Nome ERP"
}
A chamada irá retornar um objeto JSON contendo o outro objeto chamado REFERENCIAS onde estará o
campo CODIGO, com o código de integração a ser utilizado:
{
"REFERENCIAS": {
"CODIGO": "1"
}
}
Para obter a lista de integraçãos, basta fazer uma chamada GET na mesma
URL, https://api.alkord.com/integracoes?licenca=2, informando o header Authorization no request, que
irá retornar um array JSON:
{
"TOTAL_REGISTROS": 1,
"REGISTROS": [
{
"CODIGO": 1,
"DESCRICAO": "Nome ERP"
}
]
}
#4. Já com o código da licença e o código da integração, pode-se gerar o token Para isso, deve ser feito uma
chamada GET para a URL https://api.alkord.com/token, informando o header Authorization no request,
com os
parâmetros licenca, integracao e finalidade: https://api.alkord.com/token?licenca=2&integracao=1&fin
alidade=1. A finalidade é sempre 1, para indicar que é integração via ERP. A chamada irá retornar um
JSON com os campos token_acesso, token_renovacao e validade:
{
"token_acesso": "40bc2b5cd9193805d9688a4a61623da3",
"token_renovacao": "081a9bf2e9353cb06c6b79f443bca0fd",
"usuario": 1316,
"licenca": "2",
"validade": 3600
}
Depois de obtido o token, todas as outras chamadas devem ser feitas sem o envio do
header Authorization no request, e com o parâmetro token na URL:
https://api.alkord.com/clientes?token=40bc2b5cd9193805d9688a4a61623da3
Cadastro de clientes
Para integrar o cadastro de clientes, será utilizado a URL https://api.alkord.com/clientes.
Obtendo dados de clientes cadastrados
Para obter a lista de clientes cadastrados, deve ser feito uma chamada GET, sempre passando o token
como parâmetro: https://api.alkord.com/clientes?token=40bc2b5cd9193805d9688a4a61623da3
A chamada irá retornar um objeto JSON no seguinte formato:
{
 "TOTAL_REGISTROS": 1,
 "REGISTROS": [
 {
 "CODIGO": 3,
 "DATA_CRIACAO": "2017-03-28 12:54:22",
 "DATA_ALTERACAO": "2017-04-10 11:19:50",
 "NOME": "Adalberto João da Silva",
 "APELIDO": null,
 "TIPO_PESSOA": "F",
 "SITUACAO": "A",
 "RESTRICAO": null,
 "DOCUMENTO": "012.345.678-90",
 "DOCUMENTO2": null,
 "INTERNET": null,
 "ESTADO_CIVIL": null,
 "NASCIMENTO_CONSTITUICAO": null,
 "EXCLUIDO": "N",
 "RESPONSAVEL": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 },
 "EMAILS": [],
 "TELEFONES": [],
 "ENDERECOS": [
 {
 "CODIGO": 2,
 "TIPO": "C",
 "PRINCIPAL": "S",
 "CEP": "89023-430",
 "ENDERECO": "Rua Agronômica",
 "NUMERO": "350",
 "COMPLEMENTO": "",
 "BAIRRO": "Valparaiso",
 "CAIXA_POSTAL": null,
 "DESCRICAO": null,
 "CONTATO_ALTERNATIVO": null,
 "POSICIONAMENTO_LATITUDE": "-26.95400",
 "POSICIONAMENTO_LONGITUDE": "-49.07420",
 "PAIS": {
 "NOME": "Brasil"
 },
 "ESTADO": {
 "SIGLA": "SC"
 },
 "CIDADE": {
 "NOME": "Blumenau",
 "CODIGO_IBGE": 4202404
 }
 }
 ]
 }
 ]
}
As pesquisas retornam um número máximo de 100 registros por pesquisa. Para retornar todos os registros,
é necessário efetuar várias consultas usando o parâmetro registro_inicial. Por exemplo: para o primeiro
acesso o valor seria 0, para o segundo 100, para o terceiro 200 e assim por diante:
https://api.alkord.com/clientes?token=40bc2b5cd9193805d9688a4a61623da3&registro_inicial=100.
Por padrão, a chamada sempre retorna 100 registros, porém é possível retornar menos registros,
informando o parâmetro
https://api.alkord.com/clientes?token=40bc2b5cd9193805d9688a4a61623da3&registro_inicial=0&numero_re
gistros=25.
Para retornar os dados de um cliente específico, basta fazer uma chamada GET na URL
https://api.alkord.com/clientes, complementando com o código do cliente e o parâmetro token:
https://api.alkord.com/clientes/8?token=40bc2b5cd9193805d9688a4a61623da3.
Cadastrando um novo cliente
Para cadastrar um novo cliente, deve-se enviar uma chamada POST para a URL
https://api.alkord.com/clientes, enviando no corpo da chamada um objeto JSON com os dados do cliente, no
seguinte formado:
{
 "NOME": "Juliana Oliveira dos Santos",
 "TIPO_PESSOA": "F",
 "SITUACAO": "A",
 "DOCUMENTO": "454.047.772-22",
 "EXCLUIDO": "N",
 "RESPONSAVEL": {
"NOME": "Francisco Oliveira"
 },
 "EMAILS": [
 ],
 "ENDERECOS": [
{
 "TIPO": "C",
 "PRINCIPAL": "S",
 "CEP": "11630-970",
 "ENDERECO": "Rua Gerson Peres de Araújo",
 "NUMERO": "22",
 "COMPLEMENTO": "",
 "BAIRRO": "Barra Velha",
 "PAIS": {
"NOME": "Brasil"
 },
 "ESTADO": {
"SIGLA": "SP"
 },
 "CIDADE": {
"NOME": "Ilhabela",
"CODIGO_IBGE": 3550902
 }
}
 ]
}
A chamada irá retornar um objeto JSON com os códigos
{
 "REFERENCIAS": {
 "CODIGO": "30",
 "PESSOAS_ENDERECOS": [
 {
 "REFERENCIAS": {
 "CODIGO": "19"
 }
 }
 ]
 }
}
Alterando cadastro de cliente existente
Para alterar os dados de um cliente existente, deve-se enviar um chamada PUT para a URL
https://api.alkord.com/clientes, com código do cliente na URL, junto com o token:
https://api.alkord.com/clientes/8?token=40bc2b5cd9193805d9688a4a61623da3. No corpo da chamada
deve-se enviar um objeto JSON com os dados do cliente, nos moldes do enviado via POST.
Inativando um cadastro de cliente
Para inativar o cadastro de um cliente existente, deve-se enviar um chamada DELETE para a URL
https://api.alkord.com/clientes, com código do cliente na URL, junto com o token:
https://api.alkord.com/clientes/8?token=40bc2b5cd9193805d9688a4a61623da3.
Cadastro de produtos
Para integrar o cadastro de produtos, será utilizado a URL https://api.alkord.com/produtos.
Obtendo dados de produtos cadastrados
Para obter a lista de produtos cadastrados, deve ser feito uma chamada GET, sempre passando o token
como parâmetro: https://api.alkord.com/produtos?token=40bc2b5cd9193805d9688a4a61623da3
A chamada irá retornar um objeto JSON no seguinte formato:
{
 "TOTAL_REGISTROS": 7,
 "REGISTROS": [
 {
 "CODIGO": 1,
 "DATA_CRIACAO": "2017-03-29 09:38:17",
 "DATA_ALTERACAO": "2017-03-29 09:45:44",
 "CODIGO_BARRAS": "7896006718543",
 "NOME": "Arroz Peruchi 5KG",
 "FABRICACAO_PROPRIA": "N",
 "DISPONIBILIDADE": "D",
 "ORIGEM": 0,
 "NCM": "10063011",
 "CEST": null,
 "CATEGORIA": {
 "CODIGO": 1,
 "TIPO": 0,
 "NOME": "Alimentos"
 },
 "FABRICANTE": {
 "CODIGO": 5,
 "NOME": "Peruchi"
 },
 "UNIDADE_MEDIDA_VENDA": {
 "CODIGO": 11,
 "SIGLA": "PCT"
 },
 "ESTOQUES": [
 {
 "UNIDADE": 1,
 "LOCALIZACAO": 0,
 "QUANTIDADE_MINIMA": "0.00000",
 "QUANTIDADE_ATUAL": "1055.00000",
 "QUANTIDADE_RESERVA": "12.00000",
 "DATA_ALTERACAO": "2017-06-07 10:28:42"
 },
 {
 "UNIDADE": 1,
 "LOCALIZACAO": 2,
 "QUANTIDADE_MINIMA": "0.00000",
 "QUANTIDADE_ATUAL": "13.00000",
 "QUANTIDADE_RESERVA": "0.00000",
 "DATA_ALTERACAO": "2017-05-24 13:57:05"
 }
 ],
 "INFORMACOES_ADICIONAIS": {
 "ACESSO_RAPIDO": null,
 "ALTURA": null,
 "LARGURA": null,
 "COMPRIMENTO": null,
 "PESO": null
 },
 "PRECOS": [
 {
 "CODIGO": 1,
 "UNIDADE": 0,
 "MARGEM_CUSTO_REAL": "0.00000",
 "PRECO_CUSTO": null,
 "PRECO_CUSTO_ANTERIOR": null,
 "PRECO_CUSTO_REAL": null,
 "PRECO_MEDIO": null,
 "PRECO_VENDA": "3.75000",
 "PRECO_VENDA_ANTERIOR": null,
 "DESCONTO_MAXIMO": null,
 "DATA_ALTERACAO": "2017-03-29 09:38:17"
 }
 ],
 "SECAO_LOCALIZACAO": [
 {
 "CODIGO": 1,
 "UNIDADE": 1,
 "LOCALIZACAO": {
 "CODIGO": 1,
 "TIPO": "1",
 "NOME": "Geral"
 }
 }
 ],
 "TEXTOS": {
 "DESCRICAO": null,
 "OBSERVACAO": null
 },
 "TRIBUTARIOS": {
 "UNIDADE": 0,
 "ICMS_SIMPLES_NACIONAL": "T",
 "IPI_CST_ENTRADA": null,
 "IPI_CST_SAIDA": null,
 "IPI_ALIQUOTA": "0.00000",
 "IPI_VALOR_UNIDADE": "0.00000",
 "IPI_CLASSE_ENQUADRAMENTO": null,
 "PIS_CST": "99",
 "PIS_ALIQUOTA": "0.00000",
 "PIS_NATUREZA_RECEITA": null,
 "COFINS_CST": "99",
 "COFINS_ALIQUOTA": "0.00000",
 "COFINS_NATUREZA_RECEITA": null,
 "CONTRIBUICAO_SOCIAL_APURADA": null,
 "TOTAL_TRIBUTOS_TIPO": "P",
 "TOTAL_TRIBUTOS_VALOR": null,
 "TOTAL_TRIBUTOS_PERCENTUAL": "18.00000"
 },
 "TRIBUTARIOS_ICMS": {
 "UNIDADE": 1,
 "CST": "00",
 "ALIQUOTA_ORIGEM": "12.00000",
 "ALIQUOTA_DESTINO": "0.00000",
 "MVA": "0.00000",
 "MVA_AJUSTAR": "N",
 "ALIQUOTA_REDUCAO": "0.00000",
 "ALIQUOTA_REDUCAO_ST": "0.00000",
 "INTERESTADUAL_ALIQUOTA_FCP": "2.00000",
 "INTERESTADUAL_ALIQUOTA_DESTINO": "17.00000",
 "ESTADO": {
 "SIGLA": "SP"
 }
 }
 }
 ]
}
Para retornar os dados de um produto específico, basta fazer uma chamada GET na URL
https://api.alkord.com/produtos, complementando com o código do produto e o parâmetro token:
https://api.alkord.com/produtos/8?token=40bc2b5cd9193805d9688a4a61623da3.
Cadastrando um novo produto
Para cadastrar um novo produto, deve-se enviar uma chamada POST para a URL
https://api.alkord.com/produtos, enviando no corpo da chamada um objeto JSON com os dados do produto,
no seguinte formado:
{
 "CODIGO": 1,
 "DATA_CRIACAO": "2017-03-29 09:38:17",
 "DATA_ALTERACAO": "2017-03-29 09:45:44",
 "CODIGO_BARRAS": "7896006718543",
 "NOME": "Arroz Peruchi 5KG",
 "FABRICACAO_PROPRIA": "N",
 "DISPONIBILIDADE": "D",
 "ORIGEM": 0,
 "NCM": "10063011",
 "CEST": null,
 "CATEGORIA": {
"CODIGO": 1,
"TIPO": 0,
"NOME": "Alimentos"
 },
 "FABRICANTE": {
"CODIGO": 5,
"NOME": "Peruchi"
 },
 "UNIDADE_MEDIDA_VENDA": {
"CODIGO": 11,
"SIGLA": "PCT"
 },
 "ESTOQUES": [
{
 "UNIDADE": 1,
 "LOCALIZACAO": 0,
 "QUANTIDADE_MINIMA": "0.00000",
 "QUANTIDADE_ATUAL": "1055.00000",
 "QUANTIDADE_RESERVA": "12.00000",
 "DATA_ALTERACAO": "2017-06-07 10:28:42"
},
{
 "UNIDADE": 1,
 "LOCALIZACAO": 2,
 "QUANTIDADE_MINIMA": "0.00000",
 "QUANTIDADE_ATUAL": "13.00000",
 "QUANTIDADE_RESERVA": "0.00000",
 "DATA_ALTERACAO": "2017-05-24 13:57:05"
}
 ],
 "INFORMACOES_ADICIONAIS": {
"ACESSO_RAPIDO": null,
"ALTURA": null,
"LARGURA": null,
"COMPRIMENTO": null,
"PESO": null
 },
 "PRECOS": [
{
 "CODIGO": 1,
 "UNIDADE": 0,
 "MARGEM_CUSTO_REAL": "0.00000",
 "PRECO_CUSTO": null,
 "PRECO_CUSTO_ANTERIOR": null,
 "PRECO_CUSTO_REAL": null,
 "PRECO_MEDIO": null,
 "PRECO_VENDA": "3.75000",
 "PRECO_VENDA_ANTERIOR": null,
 "DESCONTO_MAXIMO": null,
 "DATA_ALTERACAO": "2017-03-29 09:38:17"
}
 ],
 "SECAO_LOCALIZACAO": [
{
 "CODIGO": 1,
 "UNIDADE": 1,
 "LOCALIZACAO": {
"CODIGO": 1,
"TIPO": "1",
"NOME": "Geral"
 }
}
 ],
 "TEXTOS": {
"DESCRICAO": null,
"OBSERVACAO": null
 },
 "TRIBUTARIOS": {
"UNIDADE": 0,
"ICMS_SIMPLES_NACIONAL": "T",
"IPI_CST_ENTRADA": null,
"IPI_CST_SAIDA": null,
"IPI_ALIQUOTA": "0.00000",
"IPI_VALOR_UNIDADE": "0.00000",
"IPI_CLASSE_ENQUADRAMENTO": null,
"PIS_CST": "99",
"PIS_ALIQUOTA": "0.00000",
"PIS_NATUREZA_RECEITA": null,
"COFINS_CST": "99",
"COFINS_ALIQUOTA": "0.00000",
"COFINS_NATUREZA_RECEITA": null,
"CONTRIBUICAO_SOCIAL_APURADA": null,
"TOTAL_TRIBUTOS_TIPO": "P",
"TOTAL_TRIBUTOS_VALOR": null,
"TOTAL_TRIBUTOS_PERCENTUAL": "18.00000"
 },
 "TRIBUTARIOS_ICMS": {
"UNIDADE": 1,
"CST": "00",
"ALIQUOTA_ORIGEM": "12.00000",
"ALIQUOTA_DESTINO": "0.00000",
"MVA": "0.00000",
"MVA_AJUSTAR": "N",
"ALIQUOTA_REDUCAO": "0.00000",
"ALIQUOTA_REDUCAO_ST": "0.00000",
"INTERESTADUAL_ALIQUOTA_FCP": "2.00000",
"INTERESTADUAL_ALIQUOTA_DESTINO": "17.00000",
"ESTADO": {
 "SIGLA": "SP"
}
 }
}
#
Alterando cadastro de produto existente
Para alterar os dados de um produto existente, deve-se enviar um chamada PUT para a URL
https://api.alkord.com/produtos, com código do produto na URL, junto com o token:
https://api.alkord.com/produtos/8?token=40bc2b5cd9193805d9688a4a61623da3. No corpo da chamada
deve-se enviar um objeto JSON com os dados do produto, nos moldes do enviado via POST.
Inativando um cadastro de produto
Para inativar o cadastro de um produto existente, deve-se enviar um chamada DELETE para a URL
https://api.alkord.com/produto, com código do produto na URL, junto com o token:
https://api.alkord.com/produtos/8?token=40bc2b5cd9193805d9688a4a61623da3.
Registros de atendimentos
Para obter e editar os registros de atendimentos salvos no VendasExternas, será utilizado a URL
https://api.alkord.com/atendimentos.
Obtendo os registros de atendimentos
Para obter a lista de atendimentos, deve ser feito uma chamada GET, sempre passando o token como
parâmetro: https://api.alkord.com/atendimentos?token=40bc2b5cd9193805d9688a4a61623da3
A chamada irá retornar um objeto JSON no seguinte formato:
{
 "TOTAL_REGISTROS": 99,
 "REGISTROS": [
 {
 "CODIGO": 1,
 "DATA_CRIACAO": "2017-03-29 09:57:05",
 "DATA_ALTERACAO": "2017-03-29 09:57:15",
 "UNIDADE": 1,
 "SITUACAO": "4",
 "DATA": "2017-03-29 09:56:40",
 "DATA_VISUALIZACAO": null,
 "CONSUMIDOR_FINAL": "N",
 "CANAL_VENDA": 3,
 "REFERENCIA": null,
 "MOTIVO_CANCELAMENTO": null,
 "FRETE_MODALIDADE": "S",
 "FRETE_VALOR": "0.00000",
 "TOTAL_PRODUTOS": "8.28000",
 "TOTAL_IPI": "0.00000",
 "TOTAL_ICMS_ST": "0.00000",
 "TOTAL_DESCONTO_PERCENTUAL": "0.00000",
 "TOTAL_DESCONTO_VALOR": "0.00000",
 "TOTAL_ACRESCIMO_VALOR": "0.00000",
 "TOTAL": "8.28000",
 "TOTAL_PAGO": "8.28000",
 "TROCO": "0.00000",
 "PESO_TOTAL": 0,
 "TIPO_ATENDIMENTO": {
 "CODIGO": 5,
 "TIPO": 5,
 "DESCRICAO": "Pronta entrega"
 },
 "CLIENTE": {
 "CODIGO": 3,
 "NOME": "Adalberto João da Silva"
 },
 "VENDEDOR": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 },
 "INTERMEDIARIO": null,
 "LOCALIZACAO": {
 "CODIGO": 2,
 "TIPO": "2",
 "NOME": "Furgão 1"
 },
 "FORMA_ENTREGA": null,
 "TRANSPORTADORA": null,
 "ENDERECO": {
 "CODIGO": 2,
 "TIPO": "C",
 "PRINCIPAL": "S",
 "CEP": "89023-430",
 "ENDERECO": "Rua Agronômica",
 "NUMERO": "350",
 "COMPLEMENTO": "",
 "BAIRRO": "Valparaiso",
 "CAIXA_POSTAL": null,
 "DESCRICAO": null,
 "CONTATO_ALTERNATIVO": null,
 "POSICIONAMENTO_LATITUDE": "-26.95400",
 "POSICIONAMENTO_LONGITUDE": "-49.07420",
 "PAIS": {
 "NOME": "Brasil"
 },
 "ESTADO": {
 "SIGLA": "SC"
 },
 "CIDADE": {
 "NOME": "Blumenau"
 }
 },
 "HISTORICOS": [
 {
 "CODIGO": 1,
 "TIPO": "1",
 "DATA": "2017-03-29 09:57:05",
 "OBSERVACAO": null,
 "RESPONSAVEL": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 }
 },
 {
 "CODIGO": 2,
 "TIPO": "6",
 "DATA": "2017-03-29 09:57:15",
 "OBSERVACAO": "Nota emitida: série 139 - número 62",
 "RESPONSAVEL": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 }
 },
 {
 "CODIGO": 3,
 "TIPO": "8",
 "DATA": "2017-03-29 09:57:15",
 "OBSERVACAO": null,
 "RESPONSAVEL": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 }
 },
 {
 "CODIGO": 4,
 "TIPO": "8",
 "DATA": "2017-03-29 10:01:53",
 "OBSERVACAO": "Nota cancelada: série 139 - número 62",
 "RESPONSAVEL": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 }
 },
 {
 "CODIGO": 8,
 "TIPO": "6",
 "DATA": "2017-03-29 20:39:01",
 "OBSERVACAO": "Nota emitida: série 139 - número 63",
 "RESPONSAVEL": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 }
 },
 {
 "CODIGO": 9,
 "TIPO": "8",
 "DATA": "2017-03-29 20:39:01",
 "OBSERVACAO": null,
 "RESPONSAVEL": {
 "CODIGO": 2,
 "NOME": "Roberto Machado"
 }
 }
 ],
 "ITENS": [
 {
 "CODIGO": 1,
 "UNIDADE": 1,
 "ITEM": 1,
 "PESO": 0,
 "QUANTIDADE": "1.00000",
 "QUANTIDADE_RESERVA": "0.00000",
 "QUANTIDADE_ATENDIDA": "0.00000",
 "VALOR_UNITARIO": "3.75000",
 "DESCONTO_PERCENTUAL": "0.00000",
 "DESCONTO_VALOR": "0.00000",
 "ACRESCIMO_PERCENTUAL": "0.00000",
 "ACRESCIMO_VALOR": "0.00000",
 "VALOR_TOTAL": "3.75000",
 "VALOR_IPI": "0.00000",
 "VALOR_ICMS_ST": "0.00000",
 "RESERVAR": "N",
 "OBSERVACAO": null,
 "REGRA_PRECIFICACAO": null,
 "PRODUTO": {
 "CODIGO": 1,
 "NOME": "Arroz Peruchi 5KG"
 },
 "USUARIO_AUTORIZACAO": null,
 "USUARIO_AUTORIZACAO_ESTOQUE": null
 },
 {
 "CODIGO": 2,
 "UNIDADE": 1,
 "ITEM": 2,
 "PESO": 0,
 "QUANTIDADE": "1.00000",
 "QUANTIDADE_RESERVA": "0.00000",
 "QUANTIDADE_ATENDIDA": "0.00000",
 "VALOR_UNITARIO": "2.55000",
 "DESCONTO_PERCENTUAL": "0.00000",
 "DESCONTO_VALOR": "0.00000",
 "ACRESCIMO_PERCENTUAL": "0.00000",
 "ACRESCIMO_VALOR": "0.00000",
 "VALOR_TOTAL": "2.55000",
 "VALOR_IPI": "0.00000",
 "VALOR_ICMS_ST": "0.00000",
 "RESERVAR": "N",
 "OBSERVACAO": null,
 "REGRA_PRECIFICACAO": null,
 "PRODUTO": {
 "CODIGO": 2,
 "NOME": "Coca-Cola 1,5L"
 },
 "USUARIO_AUTORIZACAO": null,
 "USUARIO_AUTORIZACAO_ESTOQUE": null
 },
 {
 "CODIGO": 3,
 "UNIDADE": 1,
 "ITEM": 3,
 "PESO": 0,
 "QUANTIDADE": "1.00000",
 "QUANTIDADE_RESERVA": "0.00000",
 "QUANTIDADE_ATENDIDA": "0.00000",
 "VALOR_UNITARIO": "1.98000",
 "DESCONTO_PERCENTUAL": "0.00000",
 "DESCONTO_VALOR": "0.00000",
 "ACRESCIMO_PERCENTUAL": "0.00000",
 "ACRESCIMO_VALOR": "0.00000",
 "VALOR_TOTAL": "1.98000",
 "VALOR_IPI": "0.00000",
 "VALOR_ICMS_ST": "0.00000",
 "RESERVAR": "N",
 "OBSERVACAO": null,
 "REGRA_PRECIFICACAO": null,
 "PRODUTO": {
 "CODIGO": 3,
 "NOME": "Vanish Super Barra"
 },
 "USUARIO_AUTORIZACAO": null,
 "USUARIO_AUTORIZACAO_ESTOQUE": null
 }
 ],
 "PAGAMENTOS": [
 {
 "CODIGO": 1,
 "UNIDADE": 1,
 "VALOR": "8.28000",
 "MEIO_PAGAMENTO": {
 "CODIGO": 1,
 "NOME": "Dinheiro"
 },
 "CONDICAO_PAGAMENTO": {
 "CODIGO": 1,
 "NOME": "À vista"
 }
 }
 ],
 "TEXTOS": {
 "OBSERVACAO": null,
 "OBSERVACAO_ENTREGA": null,
 "POSICIONAMENTO_LATITUDE": null,
 "POSICIONAMENTO_LONGITUDE": null
 }
 }
 ]
}
Alterando um registro de atendimento existente
Para alterar os dados de um atendimento, deve-se enviar um chamada PUT para a URL
https://api.alkord.com/atendimentos, com código do atendimento na URL, junto com o token:
https://api.alkord.com/atendimentoss/1?token=40bc2b5cd9193805d9688a4a61623da3. No corpo da
chamada deve-se enviar um objeto JSON com os dados a serem alterados:
{
 "CODIGO": 1,
 "SITUACAO": 3,
 "HISTORICOS": [
 {
 "TIPO": "9",
 "DATA": "2017-04-01 09:00:00",
 "OBSERVACAO": "Cliente desistiu do pedido",
 "RESPONSAVEL": {
 "NOME": "Roberto Machado"
 }
 }
}