const getCryptoData = require("./src/getData");

// Schedule getCryptoData to run every 1 minute (60000 milliseconds)
setInterval(getCryptoData, 60000);
