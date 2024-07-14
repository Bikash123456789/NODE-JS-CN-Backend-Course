const validateRequest = (req, res, next) => {
    let {name, price, imageUrl} = req.body
    let errors = []
    
    
    if(!name || name.trim() == '')
    errors.push('Name is invalid')
    
    
    if(price < 0)
    errors.push('Price is invalid')
    
    
    try{
    const validURL = new URL(imageUrl)
    }catch(e){
    errors.push(e)
    }
    if(errors.length != 0)
    res.render('new-product', { errorMsg: errors[0] })
    else
    next()
    }
    
export default validateRequest    