const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

const postSchema =  mongoose.Schema({
  title: {type: String , required: true},
  content: {type: String, required: true}
});

module.exports =  mongoose.model('Post',postSchema);
