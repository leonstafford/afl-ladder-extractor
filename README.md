**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Port Adelaide | 14 | 48 | 119.3 | 12 | 2 | 0 | 1356 | 1137 |
| 2 | Collingwood | 13 | 44 | 135.1 | 11 | 2 | 0 | 1194 | 884 |
| 3 | Melbourne | 13 | 36 | 132.3 | 9 | 4 | 0 | 1237 | 935 |
| 4 | Brisbane Lions | 13 | 36 | 119.6 | 9 | 4 | 0 | 1251 | 1046 |
| 5 | St Kilda | 13 | 32 | 113.1 | 8 | 5 | 0 | 1039 | 919 |
| 6 | Essendon | 13 | 32 | 110.6 | 8 | 5 | 0 | 1169 | 1057 |
| 7 | Adelaide Crows | 13 | 28 | 116.5 | 7 | 6 | 0 | 1238 | 1063 |
| 9 | Richmond | 14 | 26 | 102.4 | 6 | 7 | 1 | 1131 | 1104 |
| 10 | Geelong Cats | 13 | 24 | 113.6 | 6 | 7 | 0 | 1260 | 1109 |
| 11 | GWS Giants | 14 | 24 | 97 | 6 | 8 | 0 | 1197 | 1234 |
| 12 | Gold Coast Suns | 13 | 24 | 94.7 | 6 | 7 | 0 | 1052 | 1111 |
| 13 | Fremantle | 13 | 24 | 94.3 | 6 | 7 | 0 | 1051 | 1115 |
| 14 | Carlton | 14 | 22 | 98.1 | 5 | 8 | 1 | 1060 | 1081 |
| 15 | Sydney Swans | 13 | 20 | 98.3 | 5 | 8 | 0 | 1092 | 1111 |
| 16 | Hawthorn | 13 | 16 | 78.5 | 4 | 9 | 0 | 964 | 1228 |
| 17 | North Melbourne | 13 | 8 | 68.8 | 2 | 11 | 0 | 918 | 1334 |
| 18 | West Coast Eagles | 13 | 4 | 51.4 | 1 | 12 | 0 | 796 | 1548 |

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
