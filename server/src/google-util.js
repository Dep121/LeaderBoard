const { OAuth2Client, auth } = require('google-auth-library');
const OAuth2Data = require('../google_key.json');

const googleConfig = {
  clientId: OAuth2Data.web.client_id,
  clientScrete: OAuth2Data.web.client_secret,
  redirect: OAuth2Data.web.redirect_uris[0],
};

function createConnection() {
  return new OAuth2Client(
    googleConfig.clientId,
    googleConfig.clientScrete,
    googleConfig.redirect,
  );
}

const oAuthClient = createConnection();

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
];

function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: 'offline',
    scope: defaultScope,
  });
}

function urlGoogle() {
  const url = getConnectionUrl(oAuthClient);
  return url;
}

module.exports = {
  urlGoogle,
  oAuthClient,
};
