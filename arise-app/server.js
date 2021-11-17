const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const database = {
    users: [
        {
            id: '1',
            name: 'Wally',
            email: 'wally@arise.ph',
            password: 'sendai',
            role: 'secretariat',
            joined: new Date()
        },
        {
            id: '2',
            name: 'Irma',
            email: 'irma@apc.org',
            password: 'kmsportal',
            role: 'member',
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', ( req , res ) => {
    if (req.body.email == database.users[0].email &&
        req.body.password == database.users[0].password) {
            res.json('success');
        } else {
            res.status(400).json('signin error');
        }
})

app.post('/register', ( req , res ) => {
    const { email, name, password } = req.body;
    database.users.push({
            id: '3',
            name: name,
            email: email,
            password: password,
            role: 'member',
            joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
});

/*
/searchfilter --> POST = project true/false
/form --> POST = project
/projects/:projectId --> GET = project
/dashboard --> PUT --> metrics --> reports
*/