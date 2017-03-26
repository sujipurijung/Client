var express = require('express'),
	app = express(),
	cookieParser = require('cookie-parser');

app.use(cookieParser('keyboard cat'))

app.get('/ck_get', function(req, res) {
	res.send(req.cookies)
})
app.get('/ck_set', function(req, res) {
	res.cookie('a', 10)
	res.cookie('foo', 'My Foo Text')
	res.cookie('bar', 'My Bar Text')
	res.send('OK')
})

app.listen(8000);
console.log('server is running on 8000')