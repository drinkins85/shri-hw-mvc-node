const express = require('express');
const bodyParser = require('body-parser');
const config = require('./app.config');
const router = require('./routes/router');

const app = express();

const port = process.env.PORT || config.port;
const host = config.host;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));

router(app);

app.listen(port, host, () => {
  console.log(`App listen on port ${port}`);
});

