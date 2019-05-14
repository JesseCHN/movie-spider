// const Crawler = require("crawler");

// let c = new Crawler({
//     callback: function (error, res, done) {
//         if (error) {
//             console.log(error);
//         } else {
//             var $ = res.$;
//             // $ 默认为 Cheerio 解析器
//             // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
//             console.log($("title").text());
//         }
//         done();
//     }
// });

// c.queue(['http://www.google.com/']);