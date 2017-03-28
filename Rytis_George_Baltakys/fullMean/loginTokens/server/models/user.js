var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')

var UserSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true,
		minlength: 2
	},
	last_name: {
		type: String,
		required: true,
		minlength: 2
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	birthday: {
		type: Date,
		required: false
	},
	password: {
		type: String,
		required: true
	}
}, {timestamps: true})

UserSchema.pre('save', function(done) {
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
	done()
})

var User = mongoose.model('User', UserSchema)