**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 11 | 40 | 133 | 10 | 1 | 0 | 1012 | 761 |
| 2 | Port Adelaide | 11 | 36 | 111.8 | 9 | 2 | 0 | 988 | 884 |
| 3 | Brisbane Lions | 11 | 32 | 124.7 | 8 | 3 | 0 | 1081 | 867 |
| 4 | Melbourne | 11 | 28 | 133.9 | 7 | 4 | 0 | 1110 | 829 |
| 5 | St Kilda | 11 | 28 | 116.5 | 7 | 4 | 0 | 889 | 763 |
| 6 | Western Bulldogs | 11 | 28 | 106.9 | 7 | 4 | 0 | 857 | 802 |
| 7 | Adelaide Crows | 11 | 24 | 108.7 | 6 | 5 | 0 | 977 | 899 |
| 9 | Fremantle | 11 | 24 | 102.3 | 6 | 5 | 0 | 945 | 924 |
| 10 | Geelong Cats | 11 | 20 | 118.1 | 5 | 6 | 0 | 1091 | 924 |
| 11 | Sydney Swans | 11 | 20 | 101.2 | 5 | 6 | 0 | 945 | 934 |
| 12 | Gold Coast Suns | 11 | 20 | 97.2 | 5 | 6 | 0 | 879 | 904 |
| 13 | Carlton | 11 | 18 | 96.7 | 4 | 6 | 1 | 844 | 873 |
| 14 | GWS Giants | 11 | 16 | 87.3 | 4 | 7 | 0 | 884 | 1013 |
| 15 | Richmond | 11 | 14 | 98.4 | 3 | 7 | 1 | 846 | 860 |
| 16 | Hawthorn | 11 | 12 | 76.7 | 3 | 8 | 0 | 770 | 1004 |
| 17 | North Melbourne | 11 | 8 | 66.1 | 2 | 9 | 0 | 744 | 1126 |
| 18 | West Coast Eagles | 11 | 4 | 54.8 | 1 | 10 | 0 | 687 | 1254 |

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
