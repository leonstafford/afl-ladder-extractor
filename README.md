**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 14 | 48 | 132.4 | 12 | 2 | 0 | 1276 | 964 |
| 2 | Port Adelaide | 14 | 48 | 119.3 | 12 | 2 | 0 | 1356 | 1137 |
| 3 | Brisbane Lions | 14 | 40 | 121.1 | 10 | 4 | 0 | 1335 | 1102 |
| 4 | Melbourne | 14 | 36 | 128.3 | 9 | 5 | 0 | 1300 | 1013 |
| 5 | St Kilda | 14 | 32 | 109.2 | 8 | 6 | 0 | 1095 | 1003 |
| 6 | Essendon | 14 | 32 | 107 | 8 | 6 | 0 | 1230 | 1150 |
| 7 | Western Bulldogs | 14 | 32 | 102.9 | 8 | 6 | 0 | 1122 | 1090 |
| 9 | Geelong Cats | 14 | 28 | 114.2 | 7 | 7 | 0 | 1338 | 1172 |
| 10 | Gold Coast Suns | 14 | 28 | 100.7 | 7 | 7 | 0 | 1153 | 1145 |
| 11 | Fremantle | 14 | 28 | 97.3 | 7 | 7 | 0 | 1144 | 1176 |
| 12 | Richmond | 14 | 26 | 102.4 | 6 | 7 | 1 | 1131 | 1104 |
| 13 | Sydney Swans | 14 | 24 | 113.3 | 6 | 8 | 0 | 1297 | 1145 |
| 14 | GWS Giants | 14 | 24 | 97 | 6 | 8 | 0 | 1197 | 1234 |
| 15 | Carlton | 14 | 22 | 98.1 | 5 | 8 | 1 | 1060 | 1081 |
| 16 | Hawthorn | 14 | 16 | 75.1 | 4 | 10 | 0 | 998 | 1329 |
| 17 | North Melbourne | 14 | 8 | 69.6 | 2 | 12 | 0 | 1002 | 1439 |
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
