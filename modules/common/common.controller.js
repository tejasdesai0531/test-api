const restaurants = require('./restaurant.json')
const zomatoHomePageData = require('./zomato_home.json')

async function getList(req, res) {
    res.send(restaurants)
}

async function zomatoHome(req, res) {
    res.send(zomatoHomePageData)
}

module.exports = {
    getList,
    zomatoHome
}