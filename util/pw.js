const status = "AUTOMATIC";
const botName = "imsleepy";
const version = "Latest@ v3.5"; 
const startTime = Date.now();

function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);


  console.log(`\x1b[1m\x1b[36m             ${botName}     `);
  console.log(`\x1b[1m\x1b[36m             Authorization : ${status}    `);
  console.log(`\x1b[1m\x1b[36m             Version: ${version}`);
  console.log(`\x1b[1m\x1b[36m             Uptime: ${uptimeInSeconds}s`);
}

module.exports = {
  printWatermark,
};


