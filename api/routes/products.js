const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET requests to /products'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling POST requests to /products'
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID'
        })}
    else {
        res.status(200).json({
        message: 'handling POST requests to /products'
    })};
})

router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID;
    res.status(200).json({
        message: 'Updated product'
    })})

router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID;
    res.status(200).json({
        message: 'Deleted product'
    })}
})

module.exports = router;

