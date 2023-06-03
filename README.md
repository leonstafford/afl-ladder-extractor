**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 12 | 44 | 138.4 | 11 | 1 | 0 | 1132 | 818 |
| 2 | Port Adelaide | 12 | 40 | 116.2 | 10 | 2 | 0 | 1139 | 980 |
| 3 | Melbourne | 12 | 32 | 134.1 | 8 | 4 | 0 | 1171 | 873 |
| 4 | Brisbane Lions | 11 | 32 | 124.7 | 8 | 3 | 0 | 1081 | 867 |
| 5 | St Kilda | 11 | 28 | 116.5 | 7 | 4 | 0 | 889 | 763 |
| 6 | Western Bulldogs | 12 | 28 | 103.7 | 7 | 5 | 0 | 932 | 899 |
| 7 | Geelong Cats | 12 | 24 | 118.9 | 6 | 6 | 0 | 1188 | 999 |
| 9 | Essendon | 11 | 24 | 107.9 | 6 | 5 | 0 | 978 | 906 |
| 10 | Fremantle | 11 | 24 | 102.3 | 6 | 5 | 0 | 945 | 924 |
| 11 | Sydney Swans | 11 | 20 | 101.2 | 5 | 6 | 0 | 945 | 934 |
| 12 | Gold Coast Suns | 11 | 20 | 97.2 | 5 | 6 | 0 | 879 | 904 |
| 13 | Carlton | 12 | 18 | 95.1 | 4 | 7 | 1 | 888 | 934 |
| 14 | GWS Giants | 11 | 16 | 87.3 | 4 | 7 | 0 | 884 | 1013 |
| 15 | Richmond | 11 | 14 | 98.4 | 3 | 7 | 1 | 846 | 860 |
| 16 | Hawthorn | 12 | 12 | 75 | 3 | 9 | 0 | 866 | 1155 |
| 17 | North Melbourne | 11 | 8 | 66.1 | 2 | 9 | 0 | 744 | 1126 |
| 18 | West Coast Eagles | 12 | 4 | 54.1 | 1 | 11 | 0 | 744 | 1374 |

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
