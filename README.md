**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Collingwood | 8 | 28 | 121.2 | 7 | 1 | 0 | 702 | 579 |
| 2 | Port Adelaide | 9 | 28 | 112.1 | 7 | 2 | 0 | 831 | 741 |
| 3 | Melbourne | 8 | 24 | 138.3 | 6 | 2 | 0 | 859 | 621 |
| 4 | St Kilda | 8 | 24 | 137.1 | 6 | 2 | 0 | 650 | 474 |
| 5 | Brisbane Lions | 8 | 24 | 122 | 6 | 2 | 0 | 809 | 663 |
| 6 | Geelong Cats | 9 | 20 | 127.5 | 5 | 4 | 0 | 940 | 737 |
| 7 | Western Bulldogs | 8 | 20 | 99.5 | 5 | 3 | 0 | 616 | 619 |
| 9 | Essendon | 8 | 16 | 109 | 4 | 4 | 0 | 766 | 703 |
| 10 | Adelaide Crows | 8 | 16 | 108.1 | 4 | 4 | 0 | 721 | 667 |
| 11 | Gold Coast Suns | 9 | 16 | 101.5 | 4 | 5 | 0 | 731 | 720 |
| 12 | Fremantle | 9 | 16 | 98.1 | 4 | 5 | 0 | 760 | 775 |
| 13 | Richmond | 9 | 14 | 99.6 | 3 | 5 | 1 | 709 | 712 |
| 14 | Sydney Swans | 9 | 12 | 97.7 | 3 | 6 | 0 | 775 | 793 |
| 15 | GWS Giants | 8 | 12 | 91.9 | 3 | 5 | 0 | 668 | 727 |
| 16 | North Melbourne | 9 | 8 | 62.9 | 2 | 7 | 0 | 584 | 928 |
| 17 | Hawthorn | 8 | 4 | 61.6 | 1 | 7 | 0 | 491 | 797 |
| 18 | West Coast Eagles | 9 | 4 | 60.5 | 1 | 8 | 0 | 615 | 1016 |

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
