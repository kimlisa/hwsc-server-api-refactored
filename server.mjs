// add the protocols to create our server

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log('node server started on port', port);
