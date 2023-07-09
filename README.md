**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 16 | 56 | 137.1 | 14 | 2 | 0 | 1485 | 1083 |
| 2 | Port Adelaide | 16 | 56 | 119.9 | 14 | 2 | 0 | 1540 | 1284 |
| 3 | Brisbane Lions | 16 | 48 | 133.2 | 12 | 4 | 0 | 1585 | 1190 |
| 4 | Melbourne | 16 | 40 | 127.4 | 10 | 6 | 0 | 1424 | 1118 |
| 5 | Essendon | 16 | 36 | 107.1 | 9 | 7 | 0 | 1419 | 1325 |
| 6 | St Kilda | 16 | 36 | 106.8 | 9 | 7 | 0 | 1238 | 1159 |
| 7 | Western Bulldogs | 16 | 36 | 103.9 | 9 | 7 | 0 | 1301 | 1252 |
| 9 | Adelaide Crows | 16 | 32 | 116.6 | 8 | 8 | 0 | 1553 | 1332 |
| 10 | GWS Giants | 16 | 32 | 98.4 | 8 | 8 | 0 | 1329 | 1351 |
| 11 | Carlton | 16 | 30 | 107.8 | 7 | 8 | 1 | 1270 | 1178 |
| 12 | Richmond | 16 | 30 | 96.9 | 7 | 8 | 1 | 1272 | 1313 |
| 13 | Gold Coast Suns | 16 | 28 | 92.5 | 7 | 9 | 0 | 1268 | 1371 |
| 14 | Fremantle | 16 | 28 | 91.7 | 7 | 9 | 0 | 1262 | 1376 |
| 15 | Sydney Swans | 16 | 26 | 110.8 | 6 | 9 | 1 | 1426 | 1287 |
| 16 | Hawthorn | 16 | 16 | 73.5 | 4 | 12 | 0 | 1122 | 1526 |
| 17 | North Melbourne | 16 | 8 | 66.8 | 2 | 14 | 0 | 1137 | 1702 |
| 18 | West Coast Eagles | 16 | 4 | 48.2 | 1 | 15 | 0 | 942 | 1954 |

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
