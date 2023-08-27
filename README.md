**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 23 | 72 | 127 | 18 | 5 | 0 | 2142 | 1687 |
| 2 | Brisbane Lions | 23 | 68 | 123.1 | 17 | 6 | 0 | 2180 | 1771 |
| 3 | Port Adelaide | 23 | 68 | 112.7 | 17 | 6 | 0 | 2149 | 1906 |
| 4 | Melbourne | 23 | 64 | 125.2 | 16 | 7 | 0 | 2079 | 1660 |
| 5 | Carlton | 23 | 54 | 113.3 | 13 | 9 | 1 | 1922 | 1697 |
| 6 | St Kilda | 23 | 52 | 107.8 | 13 | 10 | 0 | 1775 | 1647 |
| 7 | GWS Giants | 23 | 52 | 107.1 | 13 | 10 | 0 | 2018 | 1885 |
| 9 | Western Bulldogs | 23 | 48 | 108.7 | 12 | 11 | 0 | 1919 | 1766 |
| 10 | Adelaide Crows | 23 | 44 | 116.8 | 11 | 12 | 0 | 2193 | 1877 |
| 11 | Essendon | 23 | 44 | 89.7 | 11 | 12 | 0 | 1838 | 2050 |
| 12 | Geelong Cats | 23 | 42 | 112.6 | 10 | 12 | 1 | 2088 | 1855 |
| 13 | Richmond | 23 | 42 | 93.6 | 10 | 12 | 1 | 1856 | 1983 |
| 14 | Fremantle | 23 | 40 | 96.7 | 10 | 13 | 0 | 1835 | 1898 |
| 15 | Gold Coast Suns | 23 | 36 | 91.7 | 9 | 14 | 0 | 1839 | 2006 |
| 16 | Hawthorn | 23 | 28 | 80.2 | 7 | 16 | 0 | 1686 | 2101 |
| 17 | North Melbourne | 23 | 12 | 71.5 | 3 | 20 | 0 | 1657 | 2318 |
| 18 | West Coast Eagles | 23 | 12 | 53 | 3 | 20 | 0 | 1418 | 2674 |

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
