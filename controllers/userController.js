
const userService = require('../services/userService');
const constants = require('../constants');

module.exports.signup = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await userService.signup(req.body);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: controller: signup', error)
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.login = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await userService.login(req.body);
        response.status = 200;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: controller: login', error)
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}


