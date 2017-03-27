var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))
app.set('views','./views')
app.set('view engine','ejs')

app.get('/', function(req, res){
	res.render('fruit', 
		{fruits: ['banana', 'apple','mango'],
		vegetables: ['carrot', 'chilli'],
		foo : 'bar'
		}
	)
})

app.listen(8000)
console.log('Web server is sunning...')