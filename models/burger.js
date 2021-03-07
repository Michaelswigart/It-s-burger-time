const path = require('path');

var burger = {
    all:function(cb){
        orm.selectAll("burgers", res => {
            cb(res)
        })
    },
    //create:
};