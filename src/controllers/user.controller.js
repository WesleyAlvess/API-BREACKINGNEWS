const soma = (req, res) => {
    const soma = 5 + 50
    res.json({soma: soma})
}

module.exports = { soma }