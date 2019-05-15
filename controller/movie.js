const Spider = require("../tools/spider");

function spider_item(url) {
    Spider.start(url,function($){
        let movie_detail = {};
        movie_detail.title = $($("#content h1 span")[0]).text();
        movie_detail.releaseYear = $("#content h1 span.year").text();
        movie_detail.poster = $("#mainpic a img").attr('src');
        movie_detail.director = $("#info span a[rel='v:directedBy']").text();
        let actors = [];
        $("#info span a[rel='v:starring']").each(function(){  
            actors.push( $(this).text() );
        });
        movie_detail.actors = actors.join(' ');

        let types = [];
        $("#info span[property='v:genre']").each(function(){  
            types.push( $(this).text() );
        });
        movie_detail.type = types.join(' ');
        movie_detail.date = $("#content span[property='v:initialReleaseDate']").text();
        movie_detail.duration = $("#content span[property='v:runtime']").text();
        movie_detail.summary = Text.removeStains( $("#link-report span[property='v:summary']").text() );
        console.log(movie_detail);

    },function(error){
        console.log(error);
    });
}
// spider_item('https://movie.douban.com/subject/26835471/');
module.exports = { spider_item }