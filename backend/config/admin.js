module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', "12o3ij12oi3jo123joi2j3"),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "qwoidjoeij12odij12odi1j2"),
  },
});
