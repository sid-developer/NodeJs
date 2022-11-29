module.exports = reqFilter = (req, res, next) =>{

    if(req.query.age){

        if(req.query.age < 18){
            res.end('Age should be Greater then 18')
        }

        next()

    }else{
        res.end('Please provide the Age')
    }

}