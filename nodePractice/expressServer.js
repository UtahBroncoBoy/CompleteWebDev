const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const user = {
    name: 'Sally',
    beautiful: false,
    nickname: 'Woof-Woof'
  }
  res.send(user);
});

app.get('/profile', (req, res) => {
  res.send('This is your profile');
});

app.get('/monkey', (req, res) => {
  res.send('<img src="https://media.istockphoto.com/photos/closeup-of-mixedbreed-monkey-between-chimpanzee-and-bonobo-smiling-picture-id507714936?k=6&m=507714936&s=612x612&w=0&h=X_r4XsnwHNZf3wSzXeTYvC6DelESliAsDus4EiSXXu0=" alt="Monkey">')
});

app.get('/alec', (req, res) => {
  res.send('<h1>Alec is Awesome!</h1>')
});

app.post('/profile', (req, res) => {
  console.log(req.body);
  res.send('New user added!');
});

app.listen(3000);