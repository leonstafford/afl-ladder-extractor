**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 19 | 64 | 132.7 | 16 | 3 | 0 | 1759 | 1326 |
| 2 | Port Adelaide | 19 | 56 | 109.8 | 14 | 5 | 0 | 1760 | 1603 |
| 3 | Brisbane Lions | 19 | 52 | 125.2 | 13 | 6 | 0 | 1808 | 1444 |
| 4 | Melbourne | 19 | 52 | 124.3 | 13 | 6 | 0 | 1756 | 1413 |
| 5 | Western Bulldogs | 20 | 44 | 109 | 11 | 9 | 0 | 1666 | 1528 |
| 6 | St Kilda | 19 | 44 | 106.5 | 11 | 8 | 0 | 1480 | 1390 |
| 7 | GWS Giants | 19 | 44 | 102.4 | 11 | 8 | 0 | 1581 | 1544 |
| 9 | Geelong Cats | 19 | 38 | 119.5 | 9 | 9 | 1 | 1756 | 1469 |
| 10 | Sydney Swans | 19 | 38 | 111.2 | 9 | 9 | 1 | 1710 | 1538 |
| 11 | Richmond | 20 | 38 | 94.8 | 9 | 10 | 1 | 1635 | 1724 |
| 12 | Adelaide Crows | 19 | 36 | 116 | 9 | 10 | 0 | 1815 | 1565 |
| 13 | Essendon | 19 | 36 | 98.4 | 9 | 10 | 0 | 1612 | 1638 |
| 14 | Gold Coast Suns | 19 | 36 | 95.2 | 9 | 10 | 0 | 1504 | 1580 |
| 15 | Fremantle | 19 | 32 | 89 | 8 | 11 | 0 | 1476 | 1658 |
| 16 | Hawthorn | 19 | 20 | 78.4 | 5 | 14 | 0 | 1398 | 1784 |
| 17 | North Melbourne | 19 | 8 | 67.6 | 2 | 17 | 0 | 1305 | 1931 |
| 18 | West Coast Eagles | 19 | 8 | 50.6 | 2 | 17 | 0 | 1143 | 2259 |

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
