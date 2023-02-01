const express =require('express');
const connectDb = require('./config/connectDb');
const contactRouter = require('./routes/contact');
const app = express();
// var bodyParser =require('body-parser')
const PORT= 5001;

app.use(express.json());  
app.use('/api/user',contactRouter);

connectDb()




//run  server
app.listen(PORT,(err)=>{
err? console.error(err):console.log(`server running with success in:${PORT}`)

})