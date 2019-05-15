const Crawler = require("crawler");

function start(url,successCb,failureCb){
    let c = new Crawler({
        callback : function (error, res, done) {
            if(error){
                failureCb(error)
            }else{
                let $ = res.$;
                successCb($)
            }
            done();
        }
    });
    
    c.queue([url]);
}

module.exports = { start };

