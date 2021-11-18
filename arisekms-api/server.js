const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
const database = {
    users: [
        {
            id: '1',
            name: 'Wally',
            email: 'wally@arise.ph',
            password: 'sendai',
            role: 'secretariat',
            org: 'Arise Philippines',
            joined: new Date(),
            projects: [
                {
                    id: '1',
                    title: 'MSME Sendai Handbook',
                    type: 'Document',
                    desc: 'Sendai Framework Handbook for Arise Network and Members',
                    status: 'Completed',
                    category: '1',
                    sdg: '11',
                    location: 'NCR',
                    start: 2020-02-20,
                    end: 2020-03-20,
                    submitted: new Date(),
                    targets: [
                        {
                            id: '1',
                            unit: 'downloads',
                            value: '100'
                        },
                        {
                            id: '2',
                            unit: 'views',
                            value: '100'
                        }
                    ],
                    actuals: [
                        {
                            id: '1',
                            unit: 'downloads',
                            value: '50'
                        },
                        {
                            id: '2',
                            unit: 'views',
                            value: '200'
                        }
                    ]
                
                },
                {
                    id: '2',
                    title: 'Investment Monitoring Tools',
                    type: 'Training',
                    desc: 'Using Investment Monitoring',
                    status: 'Completed',
                    category: '5',
                    sdg: '9',
                    location: 'Calabarzon',
                    start: 2020-02-20,
                    end: 2020-03-20,
                    submitted: new Date(),
                    targets: [
                        {
                            id: '1',
                            unit: 'trainees',
                            value: '100'
                        },
                        {
                            id: '2',
                            unit: 'hours',
                            value: '24'
                        }
                    ],
                    actuals: [
                        {
                            id: '1',
                            unit: 'trainees',
                            value: '50'
                        },
                        {
                            id: '2',
                            unit: 'views',
                            value: '24'
                        }
                    ]

                },
                {
                    id: '3',
                    title: 'COVID-19 Resilience Webinar',
                    type: 'Webinar',
                    desc: 'COVID-19 Resilience Webinar - Business Continuity',
                    status: 'Completed',
                    category: '4',
                    sdg: '8',
                    location: 'NCR',
                    start: 2020-02-20,
                    end: 2020-03-20,
                    submitted: new Date(),
                    targets: [
                        {
                            id: '1',
                            unit: 'attendees',
                            value: '100'
                        },
                        {
                            id: '2',
                            unit: 'hours',
                            value: '24'
                        }
                    ],
                    actuals: [
                        {
                            id: '1',
                            unit: 'attendees',
                            value: '100'
                        },
                        {
                            id: '2',
                            unit: 'hours',
                            value: '24'
                        }
                    ]

                }
            ]
        },
        {
            id: '2',
            name: 'Irma',
            email: 'irma@apc.org',
            password: 'kmsportal',
            role: 'member',
            org: 'SM Foundation',
            joined: new Date(),
            projects: [
                {
                targets: [
                    {}
                ],
                actuals: [
                    {}
                ]
                }
            ]
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

app.put('/profile/:id/form', ( req , res ) => {
    const { id, title, type, desc, status, category, sdg, location, start, end} = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            database.users.projects.push({
                id: '4',
                title: title,
                type: type,
                desc: desc,
                status: status,
                category: category,
                sdg: sdg,
                location: location,
                start: start,
                end: end,
                submitted: new Date()
        })
            user.projects++
            return res.json(database.users[database.users.length]);
        } 
    })
    if (!found) {
        res.status(400).json('error finding');
    }

})

app.get('/profile/:id/project/:id', ( req  , res ) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user.projects);
        } 
    })
    if (!found) {
        res.status(400).json('error finding');
    }
})

app.get('/profile/:id/projects', ( req , res ) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach (user => {
        if (user.id === id) {
            found = true;
            return res.json(user.projects);
            
        }
        })
        if (!found) {
            res.status(400).json('error finding');
        }
        
})

app.listen(3001, () => {
    console.log('app is running on port 3001');
});

/*
/searchfilter --> POST = project true/false
/form --> POST = project
/projects/:projectId --> GET = project
/dashboard --> PUT --> metrics --> reports
*/