var fs=require('fs'); /*Llamamos a la libreria fs*/

fs.readFile('/home/hector/node/archprog3.txt','utf8',function callback(err,data){
	var str=data.toString();	
	var splt=str.split("\n");
	console.log(splt.length)
})

