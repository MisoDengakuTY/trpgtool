const Router = require('koa-router');

const router = new Router();
const BASE_URL = `/cocCharacter`;

/////////////////////////test json file//////////////////////////////////////
const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('./test2.json', 'utf8'));
/////////////////////////////////////////////////////////////////////////////


const CoCCharacter = require('../models/cocCharacter');

function getCoCCharacter(a) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'undefined'){
            var query = CoCCharacter.find();
        }else{
            var query = CoCCharacter.find({"_id":a});
        }
        query.exec((err, results) => {
            if (err) {
                resolve(err);
            } else {
                resolve(results);
            }
        });
    });
}

function createCoCCharacter() {
    return new Promise((resolve, reject) => {
        var query = CoCCharacter.push(jsonObject);
        query.exec((err, results) => {
            if (err) {
                resolve(err);
            } else {
                resolve(results);
            }
        });
    });
}

router.get(BASE_URL, async (ctx) => {
    try {
        ctx.body = await getCoCCharacter();
    } catch (err) {
        console.log(err)
    }
})

router.get(BASE_URL + '/:id', async (ctx) => {
    try {
        ctx.body = await getCoCCharacter(ctx.params.id);
    } catch (err) {
        console.log(err)
    }
})

router.post(BASE_URL  + '/addTest' , async (ctx) => {
    try {
        ctx.body = await addCoCCharacter();
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;