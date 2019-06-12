const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
 const app = express();

 app.use(bodyParser.json());
app.use(cors());
app.get('/',function(request,response){
    response.send("hello from server");
})

app.post('/enroll',function(request,response){
    console.log(request.body);
    response.status(200).send({"message":"data recived"});
})

app.listen(PORT,function(){
    console.log("server is running in the port:"+PORT)
})