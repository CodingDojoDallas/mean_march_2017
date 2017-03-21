var mongoose = require('mongoose')

var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
	likes: Number
}, {timestamps: true})

var Quote = mongoose.model('Quote', QuoteSchema)
// mongoose.model("Quote", QuoteSchema);
// var Quote = mongoose.model("Quote")