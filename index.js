var fs= require('fs');
var colors = require('colors');

var StatMode=require('stat-mode');

fs.stat('./photo.jpg', function(err, stats){
    var statMode=new StatMode(stats);
    console.log(stats);

});

fs.readdir('./node_modules', 'utf-8', function(err, data) {
    console.log("czytam-folder".red);
    console.log(data);
    fs.writeFile('./tekst1.txt', data ,  function(err){
        if(err) throw err;
        console.log('zapisano dane'.magenta);
    });
});


