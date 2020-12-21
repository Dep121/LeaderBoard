const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const url = require('url');

require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares');
const logs = require('./api/logs');
const team = require('./api/leaderBoard');
const login = require('./api/login');
const { urlGoogle, oAuthClient } = require('./google-util');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.get('/api/login', (req, res, next) => {
  try {
    console.log("in login");
    const loginUrl = urlGoogle();
    res.json({
      url: loginUrl,
    });
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.redirect(url);
  } catch (error) {
    console.log('in error');
    next(error);
  }
});

app.get('/auth/google/callback', async (req, res, next) => {
  const qs = new url.URL(req.url, 'http://travel-log.com').searchParams;
  console.log(qs.getAll());
  const code = qs.get('code');
  console.log(`Code is ${code}`);
  const r = await oAuthClient.getToken(code);
  oAuthClient.setCredentials(r.tokens);
  const dataurl = 'https://people.googleapis.com/v1/people/me?personFields=names';
  const response = await oAuthClient.request({ dataurl });
  console.log(`this is data\n${response.data}`);
  const tokenInfo = await oAuthClient.getTokenInfo(
    oAuthClient.credentials.access_token,
  );
  
  console.log(`token info \n ${tokenInfo}`);
});

app.use('/api/teams', team);

app.use('/api/logs', logs);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
