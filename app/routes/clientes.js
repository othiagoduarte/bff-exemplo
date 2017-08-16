module.exports = function (app) 
{
    const ctrl = app.controllers.clientes;

    app.get("/clientes", async (req, res) =>{
        try {
            res.jsonp(await ctrl.getAll(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || error.toString());                        
        }
    });
    
    app.get("/clientes/:id", async (req, res) =>{
        try {
            res.jsonp(await ctrl.get(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || error.toString());                        
        }
    });

    app.post("/clientes", async (req, res) =>{
        try {
            res.jsonp(await ctrl.add(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || error.toString());                                    
        }
    });

    app.put("/clientes", async (req, res) =>{
        try {
            res.jsonp(await ctrl.save(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || error.toString());                        
        }
    });
    
    app.delete("/clientes/:id", async (req, res) =>{
        try {
            res.jsonp(await ctrl.deletar(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || error.toString());                        
        }
    });

};