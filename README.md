
### Token
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

### Renovar Token
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
