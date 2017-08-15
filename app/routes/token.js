module.exports = function (app) 
{
    const ctrl = app.controllers.token;

    app.post("/token", async (req, res) =>{
        try {
            res.jsonp(await ctrl.token(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });
};