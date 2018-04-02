var fs = require('fs');

function module1(directory, extension, callback) {


    fs.readdir(directory, (err, files) => {
        if (err) return callback(err);
        callback(null, files.filter(f => f.endsWith("." + extension)));
    });
};

module.exports = module1;