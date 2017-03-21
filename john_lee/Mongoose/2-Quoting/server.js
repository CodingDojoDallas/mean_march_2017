// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Require Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
//
mongoose.Promise = global.Promise;
//
var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String,
 date: Date,
})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

// Routes
// Root Request
app.get('/', function(req, res) {
  res.render('index');
})

app.get('/quotes', function(req, res){
  Quote.find({}, null, {sort: {'date':-1}}, function(err, quotes) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log(" we found users");
      res.render('quotes', {quotes:quotes});
    }
  })
})

app.post('/quotes', function(req, res) {
  var quote = new Quote({quote: req.body.quote, name: req.body.name, date:Date() });
  quote.save(function(err) {
   if(err) {
     console.log(err.message);
     console.log('something went wrong in the quote save function');
   } else {
     console.log('successfully added a user!');
     res.redirect('/quotes');
   }
  })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
