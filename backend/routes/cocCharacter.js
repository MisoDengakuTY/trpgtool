const Router = require('koa-router');

const router = new Router();
const BASE_URL = `/cocCharacter`;

const CoCCharacter = require('../models/cocCharacter');

function getCoCCharacter() {
    return new Promise((resolve, reject) => {
        var query = CoCCharacter.find({"_id":0});
        query.exec((err, results) => {
            if (err) {
                resolve(err);
            } else {
                resolve(results);
            }
        });
    });
}

router.get(BASE_URL + '/test', async (ctx) => {
    try {
        ctx.body = await getCoCCharacter();
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;