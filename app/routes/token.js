module.exports = function (app) 
{
    const ctrl = app.controllers.token;

    app.post("/token", async (req, res) =>{
        try {
            res.jsonp(await ctrl.gerarToken(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                                
        }
    });
    
    app.get("/renovarToken", async (req, res) =>{
        try {
            res.jsonp(await ctrl.renovarToken(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                                
        }
    });
};