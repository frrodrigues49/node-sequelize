const express = require('express');
const router = express.Router();
const auth = require('../services/auth');

router.get('/', async (req, res) => {
    //Check Permission
    // if (await auth.checkPermission(req, res, 'upload-comprovante') == false) {
    //     return;
    // }
    
    return res.send('Teste de api realizado com sucesso!');
})

module.exports = app => app.use('/purchase', router);
