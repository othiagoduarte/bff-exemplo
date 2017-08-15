module.exports = function (app) 
{

    function optionsRequest (method, uri, body = null) {
        return {
            method: method,
            uri: uri,
            body: body,
            json: true // Automatically stringifies the body to JSON 
        }    
    };

    return {optionsRequest}
}