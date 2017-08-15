module.exports = function (app) 
{
    const ctrl = app.controllers.registros;

    app.get("/registros", async (req, res) =>{
        try {
            res.jsonp(await ctrl.getAll(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });
    
    app.get("/registros/:id", async (req, res) =>{
        try {
            res.jsonp(await ctrl.get(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });

    app.post("/registros", async (req, res) =>{
        try {
            res.jsonp(await ctrl.add(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });

    app.put("/registros", async (req, res) =>{
        try {
            res.jsonp(await ctrl.save(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });
};