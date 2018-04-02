//Défi 1
//console.log("HELLO WORLD");

//Défi 2
// console.log(process.argv);
// var sum = 0;
// for (i = 2; i < process.argv.length; i++) {
//     sum = sum + Number(process.argv[i]);
//      // équivalent à sum += Number(process.argv[i]);
// }
// console.log(sum);

//Défi 3
// const fs = require('fs');
// const buffer = fs.readFileSync(process.argv[2]);
// const file = buffer.toString();
// const lines = file.split("\n").length - 1;
// console.log(lines);

// Pour éviter d’avoir à appeler `.toString()`
// on précise un encodage 'utf8' comme second argument pour
// `readFileSync`, ce qui renvoie une `String`!
// const fs = require('fs');
// const buffer = fs.readFileSync(process.argv[2], 'utf8');
// const lines = buffer.split("\n").length - 1;
// console.log(lines);

//Défi 4
// const fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function (err, data) {
// if (err) throw Error(err); 
// else console.log(data.split("\n").length - 1);
// });

// Défi 5
// A corriger
// console.log("Voici la liste des fichiers contenant l'extension .docx dans le dossier Documents");

// const fs = require('fs');
// const path = require('path');
// var file;
// fs.readdir('/Users/sophie/Documents', 'utf8', function (err, files) {
//     if (err) throw Error(err);
//     else 
//     for (i = 0; i < files.length; i++) {
//             file = path.extname('.docx');
//             if (this.file) {
//                 this.files.push(this.file);
//             }
//         }
//     console.log(files);
// });

// Corrigé Défi 5
// fs.readdir(process.argv[2],function(err,list){
// 	for (let i = 0; i < list.length ; i++){
// 		if(list[i].endsWith('.'+process.argv[3])){
// 			console.log(list[i]);
// 		}
// 	}
// });

//  Défi 6 à corriger
// const fileFilter = require('./fileFilterService');
// const path = process.argv[2];
// const ext = process.argv[3];

// const parseFiles = (err, file) => {
//     try {
//         if (err) throw err;
//         files.forEach(f => console.log(f));

//     } catch (error) {
//         console.error(error);
//     }

// };
// fileFilter(path, ext, parseFiles);

// Corrigé Défi 6
// var module = require('./module.js');

// module(process.argv[2], process.argv[3], function(err,data){
// 	try {
// 		if(err) throw err;
// 		data.forEach(f =>console.log(f));
// 	}catch(err){
// 		console.error(err);
// 	}
// });

// Défi 7
// var http = require('http');
// http.get(process.argv[2],function (response) {
// 	response.setEncoding("utf8");
// 	response.on("data", function (data) {
// 		console.log(data);
// 	});
// 	response.on("error", function (error) {
// 		console.log(error);
// 	});
// });

