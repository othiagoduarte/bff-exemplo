module.exports = function (app) 
{
    const ctrl = app.controllers.produtos;

    app.get("/produtos", async (req, res) =>{
        try {
            res.jsonp(await ctrl.getAll(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });
    
    app.get("/produtos/:id", async (req, res) =>{
        try {
            res.jsonp(await ctrl.get(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });

    app.post("/produtos", async (req, res) =>{
        try {
            res.jsonp(await ctrl.add(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });

    app.put("/produtos", async (req, res) =>{
        try {
            res.jsonp(await ctrl.save(req, res));   
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.toString());
        }
    });
};