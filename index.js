var express = require('express')
var app = express()
var PORT = process.env.PORT || 8008

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
	res.render('index.ejs')
})

app.listen(PORT, function() {
	console.log('Server @ '+ PORT)	
})