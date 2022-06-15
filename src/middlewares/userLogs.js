const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'../../userLogs.txt')

function logsMiddleware(req,res,next){
    fs.appendFileSync('userLogs.txt','El usuario ingresó a la ruta: ' + req.url + "\r\n")
next();
};

module.exports = logsMiddleware;