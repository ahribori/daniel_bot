import fs from 'fs';
import path from 'path';

const filePathList = fs.readdirSync(__dirname);
const filter = process.env.NODE_ENV === 'production' ? new RegExp(/(.js)$/) : new RegExp(/(.dev.js)$/);
filePathList.forEach(file => {
    if (file !== 'index.js' && filter.test(file)) {
        console.log(file)
        require(path.join(__dirname, file));
    }
});