**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 23 | 72 | 127 | 18 | 5 | 0 | 2142 | 1687 |
| 2 | Brisbane Lions | 23 | 68 | 123.1 | 17 | 6 | 0 | 2180 | 1771 |
| 3 | Port Adelaide | 22 | 64 | 111.5 | 16 | 6 | 0 | 2055 | 1843 |
| 4 | Melbourne | 22 | 60 | 124.8 | 15 | 7 | 0 | 2002 | 1604 |
| 5 | Carlton | 22 | 54 | 116.1 | 13 | 8 | 1 | 1849 | 1592 |
| 6 | St Kilda | 23 | 52 | 107.8 | 13 | 10 | 0 | 1775 | 1647 |
| 7 | Sydney Swans | 22 | 50 | 111.6 | 12 | 9 | 1 | 1994 | 1786 |
| 9 | Western Bulldogs | 22 | 44 | 107.6 | 11 | 11 | 0 | 1815 | 1687 |
| 10 | Essendon | 23 | 44 | 89.7 | 11 | 12 | 0 | 1838 | 2050 |
| 11 | Geelong Cats | 22 | 42 | 114.7 | 10 | 11 | 1 | 2009 | 1751 |
| 12 | Richmond | 22 | 42 | 94.9 | 10 | 11 | 1 | 1793 | 1889 |
| 13 | Adelaide Crows | 22 | 40 | 115.1 | 10 | 12 | 0 | 2070 | 1799 |
| 14 | Fremantle | 23 | 40 | 96.7 | 10 | 13 | 0 | 1835 | 1898 |
| 15 | Gold Coast Suns | 23 | 36 | 91.7 | 9 | 14 | 0 | 1839 | 2006 |
| 16 | Hawthorn | 23 | 28 | 80.2 | 7 | 16 | 0 | 1686 | 2101 |
| 17 | North Melbourne | 23 | 12 | 71.5 | 3 | 20 | 0 | 1657 | 2318 |
| 18 | West Coast Eagles | 22 | 12 | 52.5 | 3 | 19 | 0 | 1340 | 2551 |

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
