const books = require('./books.json')

async function getList(req, res) {
    console.log(new Date())
    res.send(books)
}

module.exports = {
    getList
}