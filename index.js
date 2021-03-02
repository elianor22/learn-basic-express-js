const express = require('express');

const app = express();
const router = express.Router();

router.use("/",(req,res,next)=>{
    console.log("Request", req)
})


app.use('/', router);

app.listen(3232)