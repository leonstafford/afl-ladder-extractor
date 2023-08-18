**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 22 | 68 | 123.2 | 17 | 5 | 0 | 2041 | 1656 |
| 2 | Brisbane Lions | 22 | 64 | 123.2 | 16 | 6 | 0 | 2108 | 1711 |
| 3 | Port Adelaide | 21 | 60 | 111 | 15 | 6 | 0 | 1981 | 1785 |
| 4 | Melbourne | 21 | 56 | 124 | 14 | 7 | 0 | 1915 | 1544 |
| 5 | Carlton | 21 | 50 | 116.8 | 12 | 8 | 1 | 1758 | 1505 |
| 6 | St Kilda | 21 | 48 | 107 | 12 | 9 | 0 | 1627 | 1520 |
| 7 | Sydney Swans | 21 | 46 | 112.1 | 11 | 9 | 1 | 1920 | 1713 |
| 9 | Essendon | 21 | 44 | 99.1 | 11 | 10 | 0 | 1771 | 1787 |
| 10 | GWS Giants | 21 | 44 | 98.6 | 11 | 10 | 0 | 1751 | 1776 |
| 11 | Geelong Cats | 21 | 42 | 117.5 | 10 | 10 | 1 | 1954 | 1663 |
| 12 | Adelaide Crows | 21 | 40 | 115.8 | 10 | 11 | 0 | 1997 | 1725 |
| 13 | Richmond | 21 | 38 | 93.1 | 9 | 11 | 1 | 1692 | 1817 |
| 14 | Fremantle | 21 | 36 | 95.2 | 9 | 12 | 0 | 1684 | 1768 |
| 15 | Gold Coast Suns | 21 | 36 | 92.8 | 9 | 12 | 0 | 1655 | 1783 |
| 16 | Hawthorn | 21 | 28 | 81.7 | 7 | 14 | 0 | 1570 | 1921 |
| 17 | North Melbourne | 21 | 8 | 68.5 | 2 | 19 | 0 | 1453 | 2120 |
| 18 | West Coast Eagles | 21 | 8 | 50.6 | 2 | 19 | 0 | 1248 | 2466 |

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
