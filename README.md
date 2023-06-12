**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 13 | 44 | 135.1 | 11 | 2 | 0 | 1194 | 884 |
| 2 | Port Adelaide | 13 | 44 | 117 | 11 | 2 | 0 | 1246 | 1065 |
| 3 | Melbourne | 13 | 36 | 132.3 | 9 | 4 | 0 | 1237 | 935 |
| 4 | Brisbane Lions | 12 | 32 | 119.6 | 8 | 4 | 0 | 1154 | 965 |
| 5 | St Kilda | 12 | 32 | 116.9 | 8 | 4 | 0 | 969 | 829 |
| 6 | Essendon | 13 | 32 | 110.6 | 8 | 5 | 0 | 1169 | 1057 |
| 7 | Adelaide Crows | 13 | 28 | 116.5 | 7 | 6 | 0 | 1238 | 1063 |
| 9 | Geelong Cats | 12 | 24 | 118.9 | 6 | 6 | 0 | 1188 | 999 |
| 10 | Fremantle | 12 | 24 | 100.6 | 6 | 6 | 0 | 1015 | 1009 |
| 11 | Gold Coast Suns | 12 | 24 | 100 | 6 | 6 | 0 | 991 | 991 |
| 12 | Richmond | 13 | 22 | 100.7 | 5 | 7 | 1 | 1041 | 1034 |
| 13 | Sydney Swans | 12 | 20 | 99.7 | 5 | 7 | 0 | 1011 | 1014 |
| 14 | GWS Giants | 13 | 20 | 91.1 | 5 | 8 | 0 | 1091 | 1198 |
| 15 | Carlton | 13 | 18 | 92.2 | 4 | 8 | 1 | 940 | 1020 |
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
