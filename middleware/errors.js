const notFound = (req, res, next) => {
    res.status(404).json({
        status: 404,
        error:'Non trovato',
    });
}

const serverError = (err, req, res, next) => { 
    res.status(500).json({
        status: 500,
        error: err.message,
    })
}


module.exports = {
    notFound,
    serverError
}