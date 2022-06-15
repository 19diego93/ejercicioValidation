const fs = require('fs');
const path = require('path');

const adminController = {
    admin: (req,res) => {
 return res.send('¡ Hola admin '+ req.query.user +' <3 !')
    },
};


module.exports = adminController;