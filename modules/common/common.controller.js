const restaurants = require('./restaurant.json')

async function getList(req, res) {
    res.send(restaurants)
}

module.exports = {
    getList
}