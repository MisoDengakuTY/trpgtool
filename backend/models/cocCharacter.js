const mongoose = require('mongoose');


const CoCschema = new mongoose.Schema({
    _id: Number,
    name: String,
    san: Number,
    statuses:Array,
    skills:Array
},{collection: "CoCCharacters"});

const Characters = mongoose.connection.useDb('Characters');

'mongooseは3つ目の引数名のコレクションを処理対象として認識します'
'（デフォルトは一つ目の引数の頭小文字＋複数形）'

module.exports = Characters.model('CoCCharacters', CoCschema);