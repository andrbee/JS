
var db = require('db');
db.connect();

var User =require('./user');
var log=require('logger')(module);

function run() {
    var vasya=new User("Вася");
    var petya=new User("Петя");
    vasya.hello(vasya);
    log(db.getPhrases("Run success"));
}

if(module.parent){
    exports.run=run;
    console.log("exports.run=run;");
} else {
    run();
}


