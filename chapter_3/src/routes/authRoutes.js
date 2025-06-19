import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()
//Register a user
 router.post('/register',(req, res)=>{
   console.log(req.body.username)
   res.sendStatus(201)

 }
)

//Login user
router.post('/login', (req,res)=>{
})

export default router;