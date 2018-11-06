const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('middleware says hello :D');
    next();
});

app.use((req, res, next) => {
    console.log('middleware says hello the second time :D');
    next();
});

app.use('/users', (req, res) => {
    const template = `<h1>This is our beautiful users page!</h1>
                      <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                      </ul>`;
    res.send(template);
});

app.use('/', (req, res) => {
    const template = '<h1>This is our beautiful(joking :D) home page! Hello buddy! :D</h1>';
    res.send(template);
});

app.listen(5000);
