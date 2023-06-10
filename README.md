**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 12 | 44 | 138.4 | 11 | 1 | 0 | 1132 | 818 |
| 2 | Port Adelaide | 13 | 44 | 117 | 11 | 2 | 0 | 1246 | 1065 |
| 3 | Melbourne | 12 | 32 | 134.1 | 8 | 4 | 0 | 1171 | 873 |
| 4 | Brisbane Lions | 12 | 32 | 119.6 | 8 | 4 | 0 | 1154 | 965 |
| 5 | St Kilda | 12 | 32 | 116.9 | 8 | 4 | 0 | 969 | 829 |
| 6 | Adelaide Crows | 13 | 28 | 116.5 | 7 | 6 | 0 | 1238 | 1063 |
| 7 | Essendon | 12 | 28 | 107.8 | 7 | 5 | 0 | 1083 | 1005 |
| 9 | Geelong Cats | 12 | 24 | 118.9 | 6 | 6 | 0 | 1188 | 999 |
| 10 | Fremantle | 12 | 24 | 100.6 | 6 | 6 | 0 | 1015 | 1009 |
| 11 | Gold Coast Suns | 12 | 24 | 100 | 6 | 6 | 0 | 991 | 991 |
| 12 | Richmond | 13 | 22 | 100.7 | 5 | 7 | 1 | 1041 | 1034 |
| 13 | Sydney Swans | 12 | 20 | 99.7 | 5 | 7 | 0 | 1011 | 1014 |
| 14 | Carlton | 12 | 18 | 95.1 | 4 | 7 | 1 | 888 | 934 |
| 15 | GWS Giants | 12 | 16 | 88 | 4 | 8 | 0 | 988 | 1123 |
| 16 | Hawthorn | 13 | 16 | 78.5 | 4 | 9 | 0 | 964 | 1228 |
| 17 | North Melbourne | 12 | 8 | 68.5 | 2 | 10 | 0 | 843 | 1231 |
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
