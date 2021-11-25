const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');



//ROUTES
const express = require('express');
const app = express();

//DATABASE
const knex = require('knex');
var pg = require('pg');
<<<<<<< Updated upstream
=======
const { QueryClient } = require('react-query');
const queryClient = new QueryClient();
>>>>>>> Stashed changes

const postgres = knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : 'admin',
      database : 'ariseph_db'
    }
  });

<<<<<<< Updated upstream
// postgres.select('*').from('projects');
postgres.select('*').from('users').then(data => {
    console.log(data);
});  


const app = express();

app.use(bodyParser.json());
app.use(cors());
=======
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//LOCAL SAMPLE "FAKE" DATABASE
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
app.get('/', (req, res) => {
    res.send(database.users);
=======
//INDEX
app.get('/', ( req , res) => {
    
    db.select().from('projects').orderBy('id')
    .then(data => {
        res.send(data);
        console.log('welcome to arise kms portal');
    })
>>>>>>> Stashed changes
})

app.post('/signin', ( req , res ) => {
<<<<<<< Updated upstream
    if (req.body.email == database.users[0].email &&
        req.body.password == database.users[0].password) {
=======
    const { email, password } = req.body;
    // if (email == db.login[0].email &&
    //     password == db.login[0].password) {
            console.log(req.body)
>>>>>>> Stashed changes
            res.json('success');
        } else {
            res.status(400).json('signin error');
        }
})

app.post('/register', ( req , res ) => {
<<<<<<< Updated upstream
    const { email, name, password } = req.body;
    db
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
=======
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
    console.log();
})

//LIST PROJECTS
app.get('/projects', ( req , res ) => {
//const { userid } = req.params;
        
    // let found = false;
    // db.users.forEach (user => {
    //     if (user.id === id) {
    //         found = true;
           
    db.select('*').from('projects')
    .orderBy('id')
    .then(projects => {
        console.log(projects.length);
        res.send(projects);
    });
        
})

//ADD PROJECT FORM
app.post('/projects/form', ( req , res ) => {
    const { title, type, desc, status, category, sdg, location, start, end} = req.body;
    
     db.insert({        
        project_title: title, 
        project_type: type, 
        project_desc: desc, 
        project_status: status,
        project_category: category,
        sendai_id: sdg, 
        project_location: location,
        project_tstart: new Date(start),
        project_tend: new Date(end),
        submitted: new Date()
    }).into('projects').returning('*')
    .then(data => {
        console.log(projects.length);
        res.send(data);
    });
    
>>>>>>> Stashed changes
})

app.get('/profile/:id/projects', ( req , res ) => {
    const { id } = req.params;
<<<<<<< Updated upstream
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
        
=======
    db('projects').where({id}).select()
    .then(project => {
        console.log(project[0]);
    });
    res.send(project);
>>>>>>> Stashed changes
})

app.listen(3001, () => {
    console.log('app is running on port 3001');
});

<<<<<<< Updated upstream
=======


//SEARCH RESULTS
app.get('/searchresults', ( req , res ) => {
    const { keyword, filter } = req.body;
               
        db.select('*')
        .where({filter: keyword})
        .from('projects')
        .orderBy('id')
        .then(projects => {
            console.log(filter);
            res.send(projects);
        });
            
    })



//VIEW DASHBOARD

//EDIT PROJECT DETAILS

//DELETE PROJECT
app.delete('/projects/:id', (req , res ) => {
    db('ariseph').where({id: req.params.id}).del()
    .then(projects => {
        console.log(projects.length);
        res.json({ success: true });
    })
})
>>>>>>> Stashed changes
/*
/searchfilter --> POST = project true/false
/form --> POST = project
/projects/:projectId --> GET = project
/dashboard --> PUT --> metrics --> reports
*/