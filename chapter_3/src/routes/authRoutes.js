import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()
//Register a user
 router.post('/register',(req, res)=>{
  const { username, password } = req.body

  let hashedPassword = bcrypt.hashSync(password, 10)
   console.log(hashedPassword)
   res.sendStatus(201)

 }
)

//Login user
router.post('/login', (req,res)=>{
})

export default router;