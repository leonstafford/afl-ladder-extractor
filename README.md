**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Melbourne | 7 | 20 | 143.5 | 5 | 2 | 0 | 769 | 536 |
| 2 | St Kilda | 7 | 20 | 133.2 | 5 | 2 | 0 | 586 | 440 |
| 3 | Brisbane Lions | 7 | 20 | 120.4 | 5 | 2 | 0 | 709 | 589 |
| 4 | Collingwood | 6 | 20 | 119.7 | 5 | 1 | 0 | 566 | 473 |
| 5 | Port Adelaide | 7 | 20 | 102.5 | 5 | 2 | 0 | 604 | 589 |
| 6 | Carlton | 7 | 18 | 113.3 | 4 | 2 | 1 | 603 | 532 |
| 7 | Geelong Cats | 7 | 16 | 135.7 | 4 | 3 | 0 | 764 | 563 |
| 9 | Essendon | 7 | 16 | 111.1 | 4 | 3 | 0 | 679 | 611 |
| 10 | Western Bulldogs | 7 | 16 | 96.7 | 4 | 3 | 0 | 530 | 548 |
| 11 | Sydney Swans | 7 | 12 | 104.6 | 3 | 4 | 0 | 641 | 613 |
| 12 | GWS Giants | 7 | 12 | 93.1 | 3 | 4 | 0 | 597 | 641 |
| 13 | Gold Coast Suns | 6 | 8 | 85.5 | 2 | 4 | 0 | 461 | 539 |
| 14 | Fremantle | 7 | 8 | 84.2 | 2 | 5 | 0 | 540 | 641 |
| 15 | North Melbourne | 7 | 8 | 66.5 | 2 | 5 | 0 | 485 | 729 |
| 16 | Richmond | 6 | 6 | 90.3 | 1 | 4 | 1 | 455 | 504 |
| 17 | Hawthorn | 7 | 4 | 65.1 | 1 | 6 | 0 | 443 | 680 |
| 18 | West Coast Eagles | 7 | 4 | 64.3 | 1 | 6 | 0 | 514 | 799 |

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
