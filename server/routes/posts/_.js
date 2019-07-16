const Post = require('../../models/posts')

module.exports = async (req, res, next) => {
  const { option, value } = req.query

  try {
    const data = await Post.list({ option, value })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}
