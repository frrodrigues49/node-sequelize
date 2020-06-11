const api = require('axios');

exports.checkPermission = async (req, res, permission) => {
    let configRequest = {
        headers: {
           Authorization: req.headers.authorization
        },
        baseURL: process.env.ADM_ENDPOINT,
        params: {
            permission: permission
        }
    }
    try{
        var authReturn = await api.get('/auth/validate', configRequest);
        res.locals.user = authReturn.user;
        return true;
    } catch(error) {
        res.send(error.response.data);
        return false;
    }
};
