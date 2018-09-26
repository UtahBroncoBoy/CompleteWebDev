const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('The route is working')
})

app.listen(3000, ()=>{
    console.log('The Face Recognition Server is running on port 3000');
})