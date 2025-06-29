import jwt from 'jsonwebtoken'


//handle all the authentication between client-server side and the backend -frontend

function authMiddleware(req,res,next){
  const token = req.headers['authorization']

  if(!token){
    return res.status(401).json({message:'no token provided'})
  }

  jwt.verify(token,process.env.JWT_SECRET, (err,decoded)=>{
      
    if(err){
     return res.status(401).json({message:'invalid token'})
    }

    req.userId = decoded.id

    next()
  })
}