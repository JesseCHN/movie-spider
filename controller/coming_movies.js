const Spider = require("../tools/spider");
const Text = require("../tools/text");
const Movie = require("./movie");

Spider.start('https://movie.douban.com/coming', function ($) {
    let coming_movies = $("#wrapper #content .article tbody tr");
    console.log(coming_movies.length);
    let movies_arr = [];
    for (let i = 0; i < coming_movies.length; i++) {
        let cur_movie = $(coming_movies[i]);
        let movie_detail = cur_movie.children();

        let movie = {};
        movie.date = Text.replace($(movie_detail[0]).text());
        movie.title = Text.replace($(($(movie_detail[1]).children())[0]).text());
        movie.type = Text.replace($(movie_detail[2]).text());
        movie.country = Text.replace($(movie_detail[3]).text());
        movie.fork = Text.replace($(movie_detail[4]).text()); // 想看
        movie.detailUrl = Text.replace($(($(movie_detail[1]).children())[0]).attr("href")); // 海报、剧情简介等
        movies_arr.push(movie);

        Movie.spider_item(movie.detailUrl);
    }

}, function (error) {
    console.log(error);
});

/*
let c = new Crawler({
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            let $ = res.$;
            let coming_movies = $("#wrapper #content .article tbody tr");
            console.log(coming_movies.length);
            let movies_arr = [];
            for (let i = 0; i < coming_movies.length; i++) {
                let cur_movie = $(coming_movies[i]);
                let movie_detail = cur_movie.children();

                let movie = {};
                movie.date = Text.replace($(movie_detail[0]).text());
                movie.title = Text.replace($(($(movie_detail[1]).children())[0]).text());
                movie.type = Text.replace($(movie_detail[2]).text());
                movie.country = Text.replace($(movie_detail[3]).text());
                movie.fork = Text.replace($(movie_detail[4]).text()); // 想看
                movie.detailUrl = Text.replace($(($(movie_detail[1]).children())[0]).attr("href")); // 海报、剧情简介等


                Movie.spider_item(movie.detailUrl);

                // c.queue([{
                //     uri: movie.detailUrl,
                //     key: movie.title,
                //     // The global callback won't be called
                //     callback: function (error, res, done) {
                //         if (error) {
                //             console.log(error);
                //         } else {
                //             let extraInfo = {};
                //             let $ = res.$;
                //             let picPath = $("#mainpic img").attr("src");
                //             extraInfo.title = res.options.key;
                //             extraInfo.poster = picPath;
                //             // @todo 添加其他字段
                //             // @todo 组装数组 or 放置在另一张表中(✔️) 外键索引
                //             for (let k = 0; k < movies_arr.length; k++) {
                //                 if (movies_arr[k]['title'] == extraInfo['title']) {
                //                     Object.assign(movies_arr[k], extraInfo);
                //                     if (k === coming_movies.length - 1) {
                //                         setTimeout(() => {
                //                             console.log('最终的结果', movies_arr);
                //                         }, 10000); // 避免倒数第二个图片加载比倒数第一慢！！！
                //                     } else {
                //                         break;
                //                     }
                //                 }
                //             }
                //         }
                //         done();
                //     }
                // }]);

                movies_arr.push(movie);
            }

            // console.log('最终的结果', movies_arr);
        }
        done();
    }
});

c.queue(['https://movie.douban.com/coming']);
*/