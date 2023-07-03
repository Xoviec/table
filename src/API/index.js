const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

const headers = {
    'x-apikey': process.env.REACT_APP_RAPID_API_KEY
  };


app.get('/', (req, res) =>{
    res.json(`e`)
})

app.get('/accounts', (req, res) =>{
    axios.get('https://recruitmentdb-508d.restdb.io/rest/accounts', { headers })
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        console.error(error);
    });
})


app.get('/accounttypes', (req, res) =>{
    axios.get('https://recruitmentdb-508d.restdb.io/rest/accounttypes', { headers })
    .then(response => {
        
        const accountsData = response.data;
        res.json(accountsData)
    })
    .catch(error => {
        console.error(error);
    });
})
    





app.listen(8000, ()=> console.log('working'))