const express = require('express');
const app = express();

const config = require('./config');

const router = require('./network/routes');
router(app);


// Servir archivos estáticos
app.use(express.static('public/'));

app.listen(config.port, function(){
    console.log(`[Server] Running on port ${config.port}`);
});