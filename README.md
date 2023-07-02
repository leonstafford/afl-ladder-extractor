**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 15 | 52 | 138.8 | 13 | 2 | 0 | 1396 | 1006 |
| 2 | Port Adelaide | 15 | 52 | 118.4 | 13 | 2 | 0 | 1434 | 1211 |
| 3 | Brisbane Lions | 15 | 44 | 127.2 | 11 | 4 | 0 | 1469 | 1155 |
| 4 | Melbourne | 14 | 36 | 128.3 | 9 | 5 | 0 | 1300 | 1013 |
| 5 | Western Bulldogs | 15 | 36 | 105.2 | 9 | 6 | 0 | 1224 | 1163 |
| 6 | Adelaide Crows | 15 | 32 | 119.6 | 8 | 7 | 0 | 1456 | 1217 |
| 7 | St Kilda | 14 | 32 | 109.2 | 8 | 6 | 0 | 1095 | 1003 |
| 9 | Geelong Cats | 15 | 30 | 113.5 | 7 | 7 | 1 | 1392 | 1226 |
| 10 | Fremantle | 15 | 28 | 95.2 | 7 | 8 | 0 | 1217 | 1278 |
| 11 | Gold Coast Suns | 15 | 28 | 94.5 | 7 | 8 | 0 | 1195 | 1265 |
| 12 | Sydney Swans | 15 | 26 | 112.7 | 6 | 8 | 1 | 1351 | 1199 |
| 13 | Carlton | 15 | 26 | 103.4 | 6 | 8 | 1 | 1172 | 1133 |
| 14 | Richmond | 15 | 26 | 95.6 | 6 | 8 | 1 | 1184 | 1238 |
| 15 | GWS Giants | 14 | 24 | 97 | 6 | 8 | 0 | 1197 | 1234 |
| 16 | Hawthorn | 15 | 16 | 72.9 | 4 | 11 | 0 | 1050 | 1441 |
| 17 | North Melbourne | 15 | 8 | 68.1 | 2 | 13 | 0 | 1074 | 1577 |
| 18 | West Coast Eagles | 14 | 4 | 47.3 | 1 | 13 | 0 | 830 | 1753 |

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
