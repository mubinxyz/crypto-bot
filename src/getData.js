const axios = require("axios");
const fs = require("fs");

// Function to get crypto data and save it
function getCryptoData() {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "24b824f9-5d63-441a-85c5-710cb133e0cb",
        },
      }
    )
    .then((response) => {
      const json = response.data["data"];
      fs.writeFile("./src/data/cryptoData.txt", JSON.stringify(json), (err) => {
        if (err) {
          console.error("Error saving crypto data:", err);
        } else {
          console.log("New crypto data saved!");
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching crypto data:", error);
    });
}

module.exports = getCryptoData;
