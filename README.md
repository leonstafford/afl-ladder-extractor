**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | St Kilda | 7 | 20 | 133.2 | 5 | 2 | 0 | 586 | 440 |
| 2 | Brisbane Lions | 7 | 20 | 120.4 | 5 | 2 | 0 | 709 | 589 |
| 3 | Collingwood | 6 | 20 | 119.7 | 5 | 1 | 0 | 566 | 473 |
| 4 | Port Adelaide | 7 | 20 | 102.5 | 5 | 2 | 0 | 604 | 589 |
| 5 | Melbourne | 6 | 16 | 129.4 | 4 | 2 | 0 | 630 | 487 |
| 6 | Essendon | 6 | 16 | 120 | 4 | 2 | 0 | 575 | 479 |
| 7 | Adelaide Crows | 6 | 16 | 115.9 | 4 | 2 | 0 | 591 | 510 |
| 9 | Carlton | 6 | 14 | 92.4 | 3 | 2 | 1 | 451 | 488 |
| 10 | Geelong Cats | 6 | 12 | 137.7 | 3 | 3 | 0 | 632 | 459 |
| 11 | Sydney Swans | 7 | 12 | 104.6 | 3 | 4 | 0 | 641 | 613 |
| 12 | GWS Giants | 7 | 12 | 93.1 | 3 | 4 | 0 | 597 | 641 |
| 13 | Gold Coast Suns | 6 | 8 | 85.5 | 2 | 4 | 0 | 461 | 539 |
| 14 | Fremantle | 7 | 8 | 84.2 | 2 | 5 | 0 | 540 | 641 |
| 15 | North Melbourne | 6 | 8 | 73.9 | 2 | 4 | 0 | 436 | 590 |
| 16 | Richmond | 6 | 6 | 90.3 | 1 | 4 | 1 | 455 | 504 |
| 17 | West Coast Eagles | 6 | 4 | 72.6 | 1 | 5 | 0 | 470 | 647 |
| 18 | Hawthorn | 7 | 4 | 65.1 | 1 | 6 | 0 | 443 | 680 |

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
