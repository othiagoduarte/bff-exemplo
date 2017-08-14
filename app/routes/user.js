module.exports = function (app) 
{
    const ctrl = app.controllers.user;

    app.post("/login", async (req, res) =>{
        const R = await ctrl.login(req, res);
        res.status(R.status).jsonp(R.data);
    });
};