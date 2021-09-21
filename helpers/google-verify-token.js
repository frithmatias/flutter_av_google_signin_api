const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID_WEB);

const validarGoogleToken = async ( token ) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                process.env.CLIENT_ID_IOS, 
                process.env.CLIENT_ID_ANDROID, 
                process.env.CLIENT_ID_WEB
            ],  
        });

        const payload = ticket.getPayload();

        return {
            name: payload['name'], 
            picture: payload['picture'], 
            email: payload['email'], 
        };

    } catch(error) {
        return null;
    }
}

module.exports = { validarGoogleToken };