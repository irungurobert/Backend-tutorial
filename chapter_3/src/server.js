import express from 'express';
import path, { dirname } from 'path'
import { json } from 'stream/consumers';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 8000

//Get the file path from the URL of the current module
 
const __filename = fileURLToPath(import.meta.url)
//Get the directory name from the file path
const __dirname = dirname(__filename)
 //console.log(__filename)
//middleware
app.use(express.json())

//Serves the HTML file from the public directory
//Tells express to serve all files from the public folder 
// as static assets/file. Any requests for the css files will be resolved to the public directory



//Serving upthe Html file from the /public directory



app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'../public','index.html'))
  })

  

  app.use(express.static(path.join(__dirname, '../public')))

//Routes
//app.use('/auth', authRoutes)


app.listen(PORT, ()=>{ 
  console.log(`server has started on port: ${PORT}`)
})
