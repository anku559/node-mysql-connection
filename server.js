require('dotenv').config({ path: './.env' });
require('./connection/db');

const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT);
