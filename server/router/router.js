const router = require('koa-router')();
const news = require('../controller/news');

router.post('/api/news/list', news.list);

module.exports = router;
