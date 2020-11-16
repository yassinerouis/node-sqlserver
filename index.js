const express = require('express');
const app = express();
const routes = require('./routers/routes');
app.use('/',routes);
app.listen(3000,console.log("listening at port 3000 ..."));