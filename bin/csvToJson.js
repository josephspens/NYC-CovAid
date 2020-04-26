const fs = require('fs');

const zips = ['11377','11209','10016'];

const lines = fs.readFileSync(__dirname + '/../src/data.csv', 'utf8').split("\n");
const headers = lines.shift().split(",");
const records = lines.map(line => {
    const currentline = line.split(",");
    const record = headers.reduce((memo, header, index) => (
        { ...memo, [header]: currentline[index] }
    ), {});
    return zips.includes(record['Zip Code']) ? record : null;
}).filter(record => record !== null)
fs.writeFileSync(__dirname + '/../src/data.json', JSON.stringify(records))