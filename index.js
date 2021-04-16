const express = require('express');
const PORT = 3000;
const app = express();

app.get('/heloo',(req,res, next)=>{
	res.json('sarvesh node express')	
});

app.listen(PORT, ()=>{
	console.log('Server is running on PORT', PORT);
});