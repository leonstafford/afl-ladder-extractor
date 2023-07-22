**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 17 | 60 | 139 | 15 | 2 | 0 | 1598 | 1150 |
| 2 | Port Adelaide | 17 | 56 | 114.7 | 14 | 3 | 0 | 1612 | 1406 |
| 3 | Brisbane Lions | 18 | 52 | 130 | 13 | 5 | 0 | 1753 | 1348 |
| 4 | Melbourne | 17 | 44 | 125.1 | 11 | 6 | 0 | 1529 | 1222 |
| 5 | Western Bulldogs | 18 | 40 | 106.4 | 10 | 8 | 0 | 1467 | 1379 |
| 6 | Geelong Cats | 18 | 38 | 121 | 9 | 8 | 1 | 1692 | 1398 |
| 7 | Carlton | 18 | 38 | 116.1 | 9 | 8 | 1 | 1532 | 1319 |
| 9 | St Kilda | 17 | 36 | 104.3 | 9 | 8 | 0 | 1289 | 1236 |
| 10 | GWS Giants | 17 | 36 | 99.4 | 9 | 8 | 0 | 1400 | 1408 |
| 11 | Essendon | 18 | 36 | 98.4 | 9 | 9 | 0 | 1513 | 1537 |
| 12 | Adelaide Crows | 17 | 32 | 114.8 | 8 | 9 | 0 | 1610 | 1403 |
| 13 | Gold Coast Suns | 17 | 32 | 94.6 | 8 | 9 | 0 | 1345 | 1422 |
| 14 | Sydney Swans | 17 | 30 | 110.3 | 7 | 9 | 1 | 1504 | 1363 |
| 15 | Fremantle | 17 | 28 | 89.3 | 7 | 10 | 0 | 1329 | 1489 |
| 16 | Hawthorn | 18 | 20 | 78.5 | 5 | 13 | 0 | 1305 | 1662 |
| 17 | North Melbourne | 17 | 8 | 65.8 | 2 | 15 | 0 | 1177 | 1790 |
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
