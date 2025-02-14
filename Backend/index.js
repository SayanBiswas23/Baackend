// require('dotenv').config()
import express from 'express'
const app = express()
const port = process.env.PORT || 4000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.get('/api/instagram',(req,res) =>{
    res.send('@sayanarius')
})

app.get('/api/login', (req,res)=>{
    res.send("<h1>login at this web host</h1>")
})

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { 
            id: 1, 
            title: "Chemistry Humor",
            joke: "Why don't scientists trust atoms? Because they make up everything!" 
        },
        
        { 
            id: 2, 
            title: "Farm Jokes",
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" 
        },
        { 
            id: 3, 
            title: "Spooky Humor",
            joke: "Why don't skeletons fight each other? They don't have the guts." 
        },
        { 
            id: 4, 
            title: "Food Puns",
            joke: "What do you call fake spaghetti? An impasta!" 
        },
        { 
            id: 5, 
            title: "Transportation Jokes",
            joke: "Why did the bicycle fall over? Because it was two-tired!" 
        }
    ];
    res.json(jokes);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})