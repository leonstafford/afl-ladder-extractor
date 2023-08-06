**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 20 | 64 | 128 | 16 | 4 | 0 | 1832 | 1431 |
| 2 | Melbourne | 20 | 56 | 125.3 | 14 | 6 | 0 | 1859 | 1484 |
| 3 | Port Adelaide | 20 | 56 | 108.5 | 14 | 6 | 0 | 1845 | 1700 |
| 4 | Brisbane Lions | 19 | 52 | 125.2 | 13 | 6 | 0 | 1808 | 1444 |
| 5 | Western Bulldogs | 20 | 44 | 109 | 11 | 9 | 0 | 1666 | 1528 |
| 6 | St Kilda | 19 | 44 | 106.5 | 11 | 8 | 0 | 1480 | 1390 |
| 7 | GWS Giants | 20 | 44 | 101.6 | 11 | 9 | 0 | 1666 | 1640 |
| 9 | Carlton | 19 | 42 | 116.5 | 10 | 8 | 1 | 1625 | 1395 |
| 10 | Sydney Swans | 20 | 42 | 111.3 | 10 | 9 | 1 | 1806 | 1623 |
| 11 | Adelaide Crows | 20 | 40 | 117.1 | 10 | 10 | 0 | 1904 | 1626 |
| 12 | Essendon | 20 | 40 | 98.5 | 10 | 10 | 0 | 1685 | 1710 |
| 13 | Richmond | 20 | 38 | 94.8 | 9 | 10 | 1 | 1635 | 1724 |
| 14 | Gold Coast Suns | 20 | 36 | 93.8 | 9 | 11 | 0 | 1565 | 1669 |
| 15 | Fremantle | 19 | 32 | 89 | 8 | 11 | 0 | 1476 | 1658 |
| 16 | Hawthorn | 20 | 24 | 80.9 | 6 | 14 | 0 | 1503 | 1857 |
| 17 | North Melbourne | 20 | 8 | 67.6 | 2 | 18 | 0 | 1376 | 2034 |
| 18 | West Coast Eagles | 20 | 8 | 52.1 | 2 | 18 | 0 | 1215 | 2332 |

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
