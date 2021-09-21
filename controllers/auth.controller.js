const { response } = require('express');
const { validarGoogleToken } = require('../helpers/google-verify-token');

const googleAuth = async (req, res = response) => {

    const gtoken = req.body.gtoken;
   
    if( !gtoken ) {
        return res.json({
            ok: false, 
            msg: 'No se recibio el token de Google'
        });
    }

    const guser = await validarGoogleToken( gtoken )

    if (!guser) { // null
        return res.status(400).json({
            ok: false, 
            msg: 'Error al obtener el usuario'
        });
    }

    res.json({
        ok: true,
        user: guser
    });
}

module.exports = { 
    googleAuth // exportación por nombre {}
}

