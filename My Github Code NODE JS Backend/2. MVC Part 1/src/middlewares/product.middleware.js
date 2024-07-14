import {body, validationResult} from 'express-validator'


const validateRequest = async (req, res, next) => {
//Step 1: Setup rules for validation
const rules = [
body('name').isLength({min : 1}).withMessage('Name is required'),
body('imageUrl').isURL().withMessage('Image URL is missing'),
body('price').isInt({min : 1}).withMessage('Price should be greater than 1')
]
//Step 2: Run the rules
await Promise.all(rules.map((rule) => rule.run(req)))
let validationErrors = validationResult(req)


console.log(validationErrors)
//Check if there was any validation error
if(!validationErrors.isEmpty()){
res.render('new-product', { errorMsg: validationErrors.array()[0].msg
})
}else{
next()
}
}
export default validateRequest

