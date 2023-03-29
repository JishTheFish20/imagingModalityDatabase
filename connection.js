const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "2080",
    database: "hospitalscans"
})

module.exports = client 

// client.connect();

// client.query('Select * from scansused', (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }
//     client.end;
// })