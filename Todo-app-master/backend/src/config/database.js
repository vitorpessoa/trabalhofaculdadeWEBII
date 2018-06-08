const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://jaspion:123456@ds215380.mlab.com:15380/todos')
