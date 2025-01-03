const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serveronfig');
const Apiroutes = require('./routes/index');

const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/api', Apiroutes);

app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})
