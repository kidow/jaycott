const mongoose = require('mongoose')
const { NODE_ENV, MONGO_URI } = process.env

module.exports = () => {
  if (NODE_ENV === 'development') mongoose.set('debug', true)
  const options = {
    dbName: 'jaycott',
    useNewUrlParser: true,
    useCreateIndex: true
  }

  mongoose.connect(MONGO_URI, options, err => {
    if (err) console.error('mongoDB connecting error :', err)
    else console.log('mongoDB connected')
  })

  require('./posts')
}
