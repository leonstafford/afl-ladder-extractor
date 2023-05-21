**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 10 | 36 | 131.3 | 9 | 1 | 0 | 907 | 691 |
| 2 | Brisbane Lions | 10 | 32 | 129.9 | 8 | 2 | 0 | 1003 | 772 |
| 3 | Port Adelaide | 10 | 32 | 111.5 | 8 | 2 | 0 | 911 | 817 |
| 4 | Melbourne | 10 | 28 | 138.4 | 7 | 3 | 0 | 1038 | 750 |
| 5 | St Kilda | 10 | 28 | 120.1 | 7 | 3 | 0 | 811 | 675 |
| 6 | Western Bulldogs | 10 | 28 | 108.6 | 7 | 3 | 0 | 780 | 718 |
| 7 | Geelong Cats | 10 | 20 | 120.6 | 5 | 5 | 0 | 1017 | 843 |
| 9 | Essendon | 10 | 20 | 102.6 | 5 | 5 | 0 | 882 | 860 |
| 10 | Fremantle | 10 | 20 | 101.6 | 5 | 5 | 0 | 866 | 852 |
| 11 | Carlton | 10 | 18 | 99.6 | 4 | 5 | 1 | 793 | 796 |
| 12 | Sydney Swans | 10 | 16 | 98.3 | 4 | 6 | 0 | 868 | 883 |
| 13 | Gold Coast Suns | 10 | 16 | 96.1 | 4 | 6 | 0 | 795 | 827 |
| 14 | Richmond | 10 | 14 | 99.5 | 3 | 6 | 1 | 779 | 783 |
| 15 | GWS Giants | 10 | 12 | 85.5 | 3 | 7 | 0 | 803 | 939 |
| 16 | Hawthorn | 10 | 8 | 73.7 | 2 | 8 | 0 | 682 | 926 |
| 17 | North Melbourne | 10 | 8 | 66 | 2 | 8 | 0 | 674 | 1021 |
| 18 | West Coast Eagles | 10 | 4 | 55.4 | 1 | 9 | 0 | 641 | 1158 |

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
