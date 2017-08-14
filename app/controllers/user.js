const _ = require('underscore');       
module.exports = function(app)
{
    const R = app.builder.retorno;

    async function login (req, res) {
        try {
            return R.sucesso("teste 123");
        }
        catch(error){
            return R.erroServidor(error);
        }        
  }    
    return {login};
};