// require('dotenv').config()
import express from 'express'
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/instagram',(req,res) =>{
    res.send('@sayanarius')
})

app.get('/login', (req,res)=>{
    res.send("<h1>login at this web host</h1>")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})