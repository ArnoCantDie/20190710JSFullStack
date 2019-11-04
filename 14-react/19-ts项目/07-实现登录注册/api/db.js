let mongoose = require('mongoose');
let { url } = require('./settings');
let conn = mongoose.createConnection(url, { useUnifiedTopology: true, useNewUrlParser: true });
let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    avatar: String,
    phone: String
});
let User = conn.model('User', UserSchema);
let SliderSchema = new mongoose.Schema({
    url: String
});
let Slider = conn.model('Slider', SliderSchema);
let MovieSchema = new mongoose.Schema({
    order: Number,//顺序
    title: String,//标题
    video: String,//视频
    poster: String, //海报
    url: String,//url地址
    price: String,//价格
    category: String,//分类  react vue
});
let Movie = conn.model('Movie', MovieSchema);
module.exports = {
    User,
    Slider,
    Movie
}