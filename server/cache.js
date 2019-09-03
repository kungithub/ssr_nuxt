const config = require('../nuxt.config.js')

module.exports = async function (req, res, next) {
    if (process.env.NODE_ENV === "development") {
        next();
        return;
    }

    const redis = require('redis').createClient(config.redis);
    const lru = require('redis-lru');
    const cache = lru(redis, 100);

    // 获取缓存的key值
    let key = req.originalUrl
    const value = await cache.get(key)
    if (value) {
        console.log('cached output', key);
        return res.end(value, 'utf-8')
    }
    res._end = res.end
    res.end = async function (data) {
        if (res._headers['content-type'].startsWith('text/html')
            && res.statusCode === 200) {
            await cache.set(key, data)
        }
        res._end(data, 'utf-8')
    }
    next();
}

