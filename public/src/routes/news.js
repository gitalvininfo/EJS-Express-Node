const express = require('express')
const newsRouter = express.Router();
const axios = require('axios')

newsRouter.get('', async (req, res) => {

    try {

        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts`)

        res.render('news', { articles: newsAPI.data })


    } catch (err) {
        if (err.response) {
            console.error(err.response.data)
            console.error(err.response.status)
            console.error(err.response.headers)
        } else if (err.request) {
            console.error(err.request)
        } else {
            console.error(`Error, ${err.message}`)
        }
    }








})

module.exports = newsRouter;