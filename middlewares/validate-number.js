function Validate(req,res,next) {

    if(!isNaN(+req.query.num)){
        req.num = Math.pow(+req.query.num,2)
        next()
    }else{
    next({
        message : 'it is not number '
    })
}
}

module.exports = Validate