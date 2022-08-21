const zomatoHomePageData = require('./zomato_home.json')

async function getList(req, res) {

    const restaurants = require('./restaurant.json')

    let page = req.query.page || 1
    let limit = req.query.limit || 5

    page = parseInt(page)
    limit = parseInt(limit)

    let start = (page - 1) * limit
    let end = start + limit
    let filteredRestaurants = restaurants[0].restaurants.slice(start, end)

    let response = [
        {
            total_restaurants: restaurants[0].total_restaurants,
            restaurants: filteredRestaurants
        }
    ]

    res.send(response)
}

async function zomatoHome(req, res) {
    res.send(zomatoHomePageData)
}

module.exports = {
    getList,
    zomatoHome
}