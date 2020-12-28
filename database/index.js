const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('We are connected to MongoDB!');
});

const userSchema = new mongoose.Schema({
  age: Number,
  name: String,
});

userSchema.methods.greeting = () => {
  const greeting = this.name
  ? "My name is " + this.name
  : "I forgot my name";
  console.log(greeting);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
