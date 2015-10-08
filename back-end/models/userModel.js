var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
	name: {type: String, required: true},
  email: {type: String, required: true}
});

var User = Mongoose.model("User", userSchema);

module.exports = User;
