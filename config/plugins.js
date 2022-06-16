// node -e "console.log(require('crypto').randomBytes(16).toString('base64'));"
module.exports = ({ env }) => ({
    "jwt-secret": env('JWT_SECRET', '0.0.0.0')
});

