Geração de token
Para gerar o token, são 4 passos:
#
1. Primeiro precisa do e-mail de login e da senha. Concatene os dois, separados por dois-pontos (:), e então
codifique em base 64. Exemplo:
E-mail de login: email@email.com.br
Senha: 123senha
Concatenado: email@email.com.br:123senha
Codificado em base 64: ZW1haWxAZW1haWwuY29tLmJyOjEyM3Nlbmhh
#
2. Depois, com o base 64, deve-se obter a lista de licenças que o usuário pode logar. Caso o usuário
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
#
3. Depois de obter a licença, deve-se deve-se gerar um código de integração do ERP com a licença. Caso o
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
4. Já com o código da licença e o código da integração, pode-se gerar o token Para isso, deve ser feito uma
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