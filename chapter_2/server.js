//The address is: http://localhost:8383
//ip:127.0.0.1:8383
const express = require('express') //require in the package 
const app = express()  //create backend app object that can be used to configure and run the server
const PORT = 8383


// HTTP VERBS && Routes (or paths)

app.get('/', (req, res)=>{
  res.send('good');
})

// Website endpoints {these send back html and typically come when a user enters a url}

//API endpoints {usually JSON AND XML(raw data) main purpose fetching data}
app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))

