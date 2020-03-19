const fs = require('fs');
const file = 'video.mp4';

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4'); //for writing new file
let progress = 0;

fs.stat(file, (err, data) => {
    const total = data.size;

    readStream.on('data', (chunk) => {
        progress += chunk.length;
        console.log(Math.round((100 * progress) / total) + '%');
    });

    readStream.on('end', () => {
        console.log('Reading done !');
        // console.log(progress);
    });
    writeStream.on('finish', () => {
        console.log('new file has been created.');
    })

});