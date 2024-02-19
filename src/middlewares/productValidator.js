export const productValidator = (req, res, next) =>{
    if(
        req.body.name === undefined || typeof req.body.name !== 'string' || 
        req.body.description === undefined || typeof req.body.description !== 'string' ||
        req.body.code === undefined || typeof req.body.code !== 'string' ||
        req.body.price === undefined || typeof req.body.price !== 'number' ||
        req.body.stock === undefined || typeof req.body.stock !== 'number' ||
        req.body.category === undefined || typeof req.body.category !== 'string' 
  ) {
    console.log(
      `You must to complete all fields with the correct data type: 
      \n name: must be => "string" 
      \n description: must be => "string" 
      \n code: must be => "string" 
      \n price: must be => "number" 
      \n stock: must be => "number"
      \n category: must be => "string"`
    );
    res.status(400).send(
      `You must to complete all fields with the correct data type: 
      \n name: must be => "string" 
      \n description: must be => "string" 
      \n code: must be => "string" 
      \n price: must be => "number" 
      \n stock: must be => "number"
      \n category: must be => "string"`
    );7
  } else {
    next();
  }
};

export default productValidator;