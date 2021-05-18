const express= require('express')
const app = express()

app.get('/', (_, res)=> res.send('It worked'))

app.listen(process.env.PORT||8080, ()=> console.log('http://localhost:8080/'))