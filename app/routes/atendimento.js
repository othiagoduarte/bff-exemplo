module.exports = function (app) 
{
    const ctrl = app.controllers.atendimento;
    
    app.get("/atendimentos", async (req, res) =>{
        try {
            res.jsonp(await ctrl.getAll(req, res));   
        } catch (error) {
            console.log(error.error);
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                        
        }
    });
    
    app.get("/atendimentos/:id", async (req, res) =>{
        try {
            res.jsonp(await ctrl.get(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                    
        }
    });

    app.post("/atendimentos", async (req, res) =>{
        try {
            res.jsonp(await ctrl.add(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                    
        }
    });

    app.put("/atendimentos", async (req, res) =>{
        try {
            res.jsonp(await ctrl.save(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                    
        }
    });
};