**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 12 | 44 | 138.4 | 11 | 1 | 0 | 1132 | 818 |
| 2 | Port Adelaide | 13 | 44 | 117 | 11 | 2 | 0 | 1246 | 1065 |
| 3 | Melbourne | 12 | 32 | 134.1 | 8 | 4 | 0 | 1171 | 873 |
| 4 | Brisbane Lions | 11 | 32 | 124.7 | 8 | 3 | 0 | 1081 | 867 |
| 5 | St Kilda | 12 | 32 | 116.9 | 8 | 4 | 0 | 969 | 829 |
| 6 | Essendon | 12 | 28 | 107.8 | 7 | 5 | 0 | 1083 | 1005 |
| 7 | Western Bulldogs | 13 | 28 | 101.1 | 7 | 6 | 0 | 1017 | 1006 |
| 9 | Adelaide Crows | 12 | 24 | 105.2 | 6 | 6 | 0 | 1064 | 1011 |
| 10 | Fremantle | 11 | 24 | 102.3 | 6 | 5 | 0 | 945 | 924 |
| 11 | Gold Coast Suns | 12 | 24 | 100 | 6 | 6 | 0 | 991 | 991 |
| 12 | Sydney Swans | 12 | 20 | 99.7 | 5 | 7 | 0 | 1011 | 1014 |
| 13 | Richmond | 12 | 18 | 99.2 | 4 | 7 | 1 | 956 | 964 |
| 14 | Carlton | 12 | 18 | 95.1 | 4 | 7 | 1 | 888 | 934 |
| 15 | GWS Giants | 12 | 16 | 88 | 4 | 8 | 0 | 988 | 1123 |
| 16 | Hawthorn | 12 | 12 | 75 | 3 | 9 | 0 | 866 | 1155 |
| 17 | North Melbourne | 12 | 8 | 68.5 | 2 | 10 | 0 | 843 | 1231 |
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
