module.exports = function (app) 
{
    const ctrl = app.controllers.token;

    app.post("/token", async (req, res) =>{
        try {
            res.jsonp(await ctrl.token(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                                
        }
    });
};