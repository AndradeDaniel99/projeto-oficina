module.exports = (req, res, next) => {
    const [{ username, password}] = req.body
    console.log(req.body)
    if (username && password) {
        return next()
    }
    return res.json({ 
        message: 'usuário e/ou senha incorreta!'
    })
}