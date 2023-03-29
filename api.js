const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Server is now listening at port 3000");
})

client.connect();

//Print Database 
app.get('/scansused', (req, res)=>{
    client.query('Select * from scansused', (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

//Only Print a rows with certain firstname
app.get('/scansused/:firstname', (req, res)=>{
    client.query(`Select * from scansused where firstname=${req.params.firstname}`, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// Adds new data to table
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/scansused', (req,res)=> {
    const user = req.body;
    let insertQuery = `insert into scansused(firstname, lastname, time_stamp, xrayamount, mriamount, ctamount)
                        values('${user.firstname}', '${user.lastname}','${user.time_stamp}', ${user.xrayamount},${user.mriamount},'${user.ctamount}')`
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Successful Insertion');
        }else{
            console.log(err.message)
        }
    });
    client.end;
})

app.put('/scansused/:firstname', (req,res)=>{
    let user = req.body;
    let updateQuery = `update scansused set 
                       firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       time_stamp = '${user.time_stamp}',
                       xrayamount = ${user.xrayamount},
                       mriamount = ${user.mriamount},
                       ctamount = ${user.ctamount}`
    client.query(updateQuery, (err,result)=>{
        if(!err){
            res.send('Update was successful')
        }else{
            console.log(err.message)
        }
    })
    client.end;
})

app.delete('/scansused/:firstname', (req, res)=>{
    let user = req.body;
    let insertQuery = `delete from scansused where firstname = '${user.firstname}'`;

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }else{
            console.log(err.message)
        }
    })
    client.end;
})