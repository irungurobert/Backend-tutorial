import express from 'express';

const app = express()
const PORT = process.env.PORT || 8000

console.log('hey bobops')
app.listen(PORT, ()=>{
  console.log(`server has started on port: ${PORT}`)
})
