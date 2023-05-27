**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 10 | 36 | 131.3 | 9 | 1 | 0 | 907 | 691 |
| 2 | Brisbane Lions | 10 | 32 | 129.9 | 8 | 2 | 0 | 1003 | 772 |
| 3 | Port Adelaide | 10 | 32 | 111.5 | 8 | 2 | 0 | 911 | 817 |
| 4 | Melbourne | 11 | 28 | 133.9 | 7 | 4 | 0 | 1110 | 829 |
| 5 | St Kilda | 11 | 28 | 116.5 | 7 | 4 | 0 | 889 | 763 |
| 6 | Western Bulldogs | 11 | 28 | 106.9 | 7 | 4 | 0 | 857 | 802 |
| 7 | Essendon | 11 | 24 | 107.9 | 6 | 5 | 0 | 978 | 906 |
| 9 | Geelong Cats | 11 | 20 | 118.1 | 5 | 6 | 0 | 1091 | 924 |
| 10 | Adelaide Crows | 10 | 20 | 107.4 | 5 | 5 | 0 | 882 | 821 |
| 11 | Sydney Swans | 11 | 20 | 101.2 | 5 | 6 | 0 | 945 | 934 |
| 12 | Gold Coast Suns | 11 | 20 | 97.2 | 5 | 6 | 0 | 879 | 904 |
| 13 | Carlton | 11 | 18 | 96.7 | 4 | 6 | 1 | 844 | 873 |
| 14 | GWS Giants | 11 | 16 | 87.3 | 4 | 7 | 0 | 884 | 1013 |
| 15 | Richmond | 10 | 14 | 99.5 | 3 | 6 | 1 | 779 | 783 |
| 16 | Hawthorn | 11 | 12 | 76.7 | 3 | 8 | 0 | 770 | 1004 |
| 17 | North Melbourne | 10 | 8 | 66 | 2 | 8 | 0 | 674 | 1021 |
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
