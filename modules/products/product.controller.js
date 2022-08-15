

async function getProductList(req, res) {
    res.send({"data": ["hii", "helllo"]})
}


module.exports = {
    getProductList
}