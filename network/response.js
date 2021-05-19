

/**
 * Función para responder a la petición de manera satisfactoria
 * @param {*} req 
 * @param {*} res 
 * @param {*} data 
 * @param {String} message 
 * @param {Number} statusCode 
 */
function success(req, res, data, message, statusCode = 200){

    res.status(statusCode).send({
        status_code: statusCode,
        message,
        data,
        ok: true
    });
}

/**
 * Función para responder a la petición de forma error controlada
 * @param {*} req 
 * @param {*} res 
 * @param {*} error 
 * @param {String} message 
 * @param {Number} statusCode 
 */
function error (req, res, error, message, statusCode = 500){
    
    console.log(`[Response error] ${error}`);
    res.status(statusCode).send({
        status_code: statusCode,
        message,
        data: [],
        ok: false
    });
}

module.exports = {
    success, 
    error
}