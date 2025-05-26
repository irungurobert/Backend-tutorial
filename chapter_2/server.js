//The address is: http://localhost:8383
//ip:127.0.0.1:8383
const express = require('express') //require in the package 
const app = express()  //create backend app object that can be used to configure and run the server
const PORT = 8383

let data = ['james','bob']
// HTTP VERBS && Routes (or paths)

//CRUD -create-post read-get update-put and delete-delete 

//Middleware - configuring the server
//between incoming request and interpretation


app.use(express.json())



app.get('/', (req, res)=>{
  res.send(`
    <body>
    <h1>
    DATA:
    </h1>
    <p>
    ${data}
    </p>
    </body>
    `);
})

app.get('/api/data', (req,res)=>{
  res.sendStatus(202);
})

app.post('/api/data', (req,res)=>{
      //someone wants to create a user using certain information
      //user clicks sign up button after entering credentials, 
      // and browser sends out the request to server to handle that action

      const newEntry = req.body
      data.push(newEntry.name)
      console.log(data)
      res.sendStatus(201)
      
})

// Website endpoints {these send back html and typically come when a user enters a url}

//API endpoints {usually JSON AND XML(raw data) main purpose fetching data}
app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))

