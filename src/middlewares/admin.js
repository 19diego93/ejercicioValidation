const elegidos = ["Ada", "Greta", "Vim" , "Tim"];

module.exports = (req,res,next)=>{
    elegidos.forEach(user=>{
       if (user == req.query.user){
        next();
       }
    });
    res.send('no tenes permiso :P ')
}