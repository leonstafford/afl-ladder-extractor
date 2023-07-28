**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 19 | 64 | 132.7 | 16 | 3 | 0 | 1759 | 1326 |
| 2 | Port Adelaide | 18 | 56 | 113.7 | 14 | 4 | 0 | 1695 | 1491 |
| 3 | Brisbane Lions | 18 | 52 | 130 | 13 | 5 | 0 | 1753 | 1348 |
| 4 | Melbourne | 18 | 48 | 123.7 | 12 | 6 | 0 | 1626 | 1315 |
| 5 | Carlton | 19 | 42 | 116.5 | 10 | 8 | 1 | 1625 | 1395 |
| 6 | Western Bulldogs | 18 | 40 | 106.4 | 10 | 8 | 0 | 1467 | 1379 |
| 7 | St Kilda | 18 | 40 | 104.7 | 10 | 8 | 0 | 1358 | 1297 |
| 9 | Geelong Cats | 18 | 38 | 121 | 9 | 8 | 1 | 1692 | 1398 |
| 10 | Richmond | 18 | 38 | 99.9 | 9 | 8 | 1 | 1466 | 1468 |
| 11 | Essendon | 18 | 36 | 98.4 | 9 | 9 | 0 | 1513 | 1537 |
| 12 | Sydney Swans | 18 | 34 | 111.8 | 8 | 9 | 1 | 1609 | 1439 |
| 13 | Adelaide Crows | 18 | 32 | 113.5 | 8 | 10 | 0 | 1703 | 1500 |
| 14 | Gold Coast Suns | 18 | 32 | 92.3 | 8 | 10 | 0 | 1408 | 1525 |
| 15 | Fremantle | 18 | 28 | 88.1 | 7 | 11 | 0 | 1405 | 1594 |
| 16 | Hawthorn | 18 | 20 | 78.5 | 5 | 13 | 0 | 1305 | 1662 |
| 17 | North Melbourne | 18 | 8 | 66.6 | 2 | 16 | 0 | 1238 | 1859 |
| 18 | West Coast Eagles | 18 | 4 | 48.9 | 1 | 17 | 0 | 1071 | 2192 |

**AFL Ladder Data JSON/Markdown**

This is a Node.js script that extracts the current ladder data from the AFL website (http://www.afl.com.au/ladder) and saves it as a JSON file. The script uses the Axios library to fetch the HTML content of the website, and Cheerio to parse the HTML and extract the data.

**Requirements**

- Node.js (version 14 or later)
- NPM (Node Package Manager)

**Installation**

To install the required packages, run the following command:

 - `npm install`

**Usage**

To run the script, use the following command:

 - `npm start`

The script will fetch the ladder data from the AFL website and save it as a JSON file. The JSON file will be named `afl-ladder.json` and will be located in the same directory as the script. The `README.md` file will then have the latest ladder included as Markdown.

Please note that web scraping may be subject to legal and ethical considerations, and you should ensure that your use of this script is in compliance with any applicable laws and regulations. This repo serves as a demonstration only. For consumption of AFL data via API, you will be better to search for one of the many services offering comprehensive data.
