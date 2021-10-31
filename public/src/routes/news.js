const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')


newsRouter.get('', async (req, res) => {
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts`)

        res.render('news', { articles: newsAPI.data })

    } catch (err) {
        if (err.response) {
            res.render('news', { articles: null })

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

newsRouter.get('/:id', async (req, res) => {
    let articleId = req.params.id;
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleId}`)

        res.render('newsSingle', { article: newsAPI.data })

    } catch (err) {
        if (err.response) {
            res.render('newsSingle', { article: null })

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

newsRouter.post('', async (req, res) => {
    let search = req.body.search;

    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)

        res.render('newsSearch', { articles: newsAPI.data })

    } catch (err) {
        if (err.response) {
            res.render('newsSearch', { articles: null })

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