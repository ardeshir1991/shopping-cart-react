const express = require('express');
const app = express();
require('./backend/db/db')();
const router = require('./backend/routes/index');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));



app.use('/api', router);

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server is listening on port ${port}`));
