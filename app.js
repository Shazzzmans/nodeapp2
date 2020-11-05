const express = require('express');
const pug = require('pug')
const app = new express();
app.set('view engine', 'pug');
const name = process.env.USER_NAME|| 'VIVEK GHARTAN'
const PORT = process.env.APP_PORT||3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index',{
        name: name,
        description:'It not easy' 
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ` + PORT);
});