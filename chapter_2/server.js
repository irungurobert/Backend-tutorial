const express = require('express') //require in the package 
const app = express()  //create backend app
const PORT = 8383

app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))

