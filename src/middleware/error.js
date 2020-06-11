
module.exports = (err, req, res, next) => {
    if (err.statusCode != undefined){
        res.status(err.statusCode).send(
            {
                memsagem: err.message
            }
        );
    }
    
}