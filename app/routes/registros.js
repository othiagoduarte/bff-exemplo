module.exports = function (app) 
{
    const ctrl = app.controllers.registros;
    
    app.get("/registros", async (req, res) =>{
        try {
            res.jsonp(await ctrl.getAll(req, res));   
        } catch (error) {
            console.log(error.error);
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                        
        }
    });
    
    app.get("/registros/:id", async (req, res) =>{
        try {
            res.jsonp(await ctrl.get(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                    
        }
    });

    app.post("/registros", async (req, res) =>{
        try {
            res.jsonp(await ctrl.add(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                    
        }
    });

    app.put("/registros", async (req, res) =>{
        try {
            res.jsonp(await ctrl.save(req, res));   
        } catch (error) {
            return res.status(error.statusCode || 504).json(error.error || {message: error.toString()});                                    
        }
    });
};