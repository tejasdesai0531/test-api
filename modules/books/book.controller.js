

async function getList(req, res) {
    res.send({"data": ["hii", "helllo"]})
}

module.exports = {
    getList
}