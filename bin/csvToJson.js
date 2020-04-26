const fs = require('fs');

const lines = fs.readFileSync(__dirname + '/../src/data.csv', 'utf8').split("\n");
const headers = lines.shift().split(",");
const records = lines.map(line => {
    const currentline = line.split(",");
    return headers.reduce((memo, header, index) => (
        { ...memo, [header]: currentline[index] }
    ), {});
})
fs.writeFileSync(__dirname + '/../src/data.json', JSON.stringify(records))