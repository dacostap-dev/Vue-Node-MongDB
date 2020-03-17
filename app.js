const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//aplication/x-www-form-urlencoded
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.send('holissssss');
})

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Escuchando puerto: ', app.get('puerto'));
})