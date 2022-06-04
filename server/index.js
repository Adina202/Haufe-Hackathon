// TODO: start here
const axios = require('axios');
/*
axios
    .get('https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=5')
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data.result);
    })
    .catch(error => {
        console.error(error);
    });
    */


const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.send('smecher')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/cool', (req, res) => {
    res.send('si mai smecher')
})

app.get('/data', (req, res) => {
    axios
        .get('https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=5')
        .then(resp => {
            console.log(`statusCode: ${resp.status}`);
            console.log(resp.data.result);
            res.send(resp.data.result);
        })
        .catch(error => {
            console.error(error);
        });
    
})
