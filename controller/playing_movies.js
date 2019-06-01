const Spider = require("../tools/spider");
const Text = require("../tools/text");
const Movie = require("./movie");
const Playing = require("../model/playing_movies");

Spider.start('https://movie.douban.com/cinema/nowplaying/shanghai/', function ($) {
    let playing_movies = $("#wrapper #content .article #nowplaying .lists li.list-item");
    // console.log(playing_movies.length);
    let movies_arr = [];
    for (let i = 0; i < playing_movies.length; i++) {
        let cur_movie = $(playing_movies[i]);
        let movie = {};
        movie.title = Text.removeStains(cur_movie.attr("data-title"));
        movie.dbScore = Text.removeStains(cur_movie.attr("data-score"));
        movie.releaseYear = Text.removeStains(cur_movie.attr("data-release")); // 上映年份
        movie.duration = Text.removeStains(cur_movie.attr("data-duration")); // 片长
        movie.region = Text.removeStains(cur_movie.attr("data-region")); // 制片国家地区
        movie.director = Text.removeStains(cur_movie.attr("data-director"));
        movie.actors = Text.removeStains(cur_movie.attr("data-actors"));
        movie.detailUrl = 'https://movie.douban.com/subject/' + Text.removeStains(cur_movie.attr("data-subject")) + '/';
        movies_arr.push(movie);
        Movie.spider_item(movie.detailUrl);

    }

    console.log('正在热映的', movies_arr.length);

    Playing.create(movies_arr,function(err,playings){
        if (err) console.log(err);
        // console.log('playings插入数据库成功',playings);
    });

}, function (error) {
    console.log(error);
});