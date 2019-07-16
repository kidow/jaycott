const mongoose = require('mongoose')

const Post = new mongoose.Schema(
  {
    title: String,
    description: String,
    url: String,
    category: String
  },
  { timestamps: true }
)

// Post.statics.write = require('./write')
Post.statics.list = function({ option, value }) {
  const query = Object.assign(
    {},
    option
      ? {
          category: new RegExp(option, 'ig')
        }
      : {},
    value
      ? { title: new RegExp(value, 'ig'), description: new RegExp(value, 'ig') }
      : {}
  )
  return this.find(query)
}

module.exports = mongoose.model('Post', Post)
