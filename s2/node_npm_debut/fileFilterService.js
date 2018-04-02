const fs = require('fs');
const fileFilterService = (path, ext, clbk) => {
    fs.readdir(path, (err, files) => {
        if (err) return clbk(err);
        clbk(null, files.filter(f => f.endsWith("." + ext)));
    });
};

module.exports = fileFilterService;