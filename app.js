var bodyParser  = require('body-parser'),
    express     = require('express'),
    app         = express();
    
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.render('index');
});

// 404 Error redirect
app.get('*', function(req, res){
    res.redirect('/');
});

app.listen(8084, function(){
    console.log('Gallery Filter server started!');
});