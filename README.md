**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 17 | 60 | 139 | 15 | 2 | 0 | 1598 | 1150 |
| 2 | Port Adelaide | 17 | 56 | 114.7 | 14 | 3 | 0 | 1612 | 1406 |
| 3 | Brisbane Lions | 17 | 48 | 130.4 | 12 | 5 | 0 | 1689 | 1295 |
| 4 | Melbourne | 17 | 44 | 125.1 | 11 | 6 | 0 | 1529 | 1222 |
| 5 | Geelong Cats | 17 | 38 | 122.9 | 9 | 7 | 1 | 1639 | 1334 |
| 6 | St Kilda | 17 | 36 | 104.3 | 9 | 8 | 0 | 1289 | 1236 |
| 7 | Western Bulldogs | 17 | 36 | 103.5 | 9 | 8 | 0 | 1377 | 1330 |
| 9 | GWS Giants | 17 | 36 | 99.4 | 9 | 8 | 0 | 1400 | 1408 |
| 10 | Carlton | 17 | 34 | 111.4 | 8 | 8 | 1 | 1392 | 1250 |
| 11 | Adelaide Crows | 17 | 32 | 114.8 | 8 | 9 | 0 | 1610 | 1403 |
| 12 | Gold Coast Suns | 17 | 32 | 94.6 | 8 | 9 | 0 | 1345 | 1422 |
| 13 | Sydney Swans | 17 | 30 | 110.3 | 7 | 9 | 1 | 1504 | 1363 |
| 14 | Richmond | 16 | 30 | 96.9 | 7 | 8 | 1 | 1272 | 1313 |
| 15 | Fremantle | 17 | 28 | 89.3 | 7 | 10 | 0 | 1329 | 1489 |
| 16 | Hawthorn | 17 | 20 | 77.3 | 5 | 12 | 0 | 1210 | 1566 |
| 17 | North Melbourne | 17 | 8 | 65.8 | 2 | 15 | 0 | 1177 | 1790 |
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
