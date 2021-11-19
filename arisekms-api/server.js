const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
var pg = require('pg');
const { DefaultDeserializer } = require('v8');
const { title } = require('process');
const { timeStamp } = require('console');

//CONNECT PSQL DB TO NODE SERVER
const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'admin',
      database : 'postgres'
    }
  });


const app = express();
app.use(bodyParser.json());
app.use(cors());

//LOCAL SAMPLE "FAKE" DATABASE
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

//INDEX
app.get('/', () => {
    console.log('welcome to arise kms portal');
})

//SIGNIN USER
app.post('/signin', ( req , res ) => {
    const { email, password } = req.body;
    // if (email == db.login[0].email &&
    //     password == db.login[0].password) {
            res.json('success');
//         } else {
//             res.status(400).json('signin error');
//         }
})

//REGISTER USER
app.post('/register', ( req , res ) => {
    const { email, username, password ,org, role, tel, title } = req.body;
    // db.('login').insert({
    // email: email, password: password, user_role: role
    // }),
    db('users').insert({        
        name: username,
        org: org,
        tel: tel,
        email: email,
        title: title,
        joined: new Date(),
    })
})

//LIST PROJECTS
app.get('/projects', ( req , res ) => {
//const { userid } = req.params;
        
    // let found = false;
    // db.users.forEach (user => {
    //     if (user.id === id) {
    //         found = true;
           
                db.select('*').from('projects')
                .then(projects => {
                    console.log(projects.length);
                    res.json(projects[0]);
                });


        
})

//ADD PROJECT FORM
app.put('/projects/form', ( req , res ) => {
    const { id, title, type, desc, status, category, sdg, location, start, end} = req.body;
    
     db('projects').insert({
        id: id,
        title: title, 
        type: type, 
        desc: desc, 
        status: status,
        category: category,
        sdg: sdg, 
        location: location,
        start: start,
        end: end,
        submitted: Date('today') 
    });
    console.log(db('projects.length'));
    res.json('projects[0]');
})


    
//VIEW PROJECT DETAILS
app.get('/projects/:id', ( req, res ) => {
    const { id } = req.params;
    db.select('*').from('projects').where({id})
    .then(project => {
        console.log(project[0]);
    });
    res.json('success');
})
    


app.listen(3001, () => {
    console.log('app is running on port 3001');
});



//SEARCH RESULTS

//VIEW DASHBOARD


//EDIT PROJECT DETAILS

/*
/searchfilter --> POST = project true/false
/dashboard --> PUT --> metrics = reports
/editproject --> PUT
*/