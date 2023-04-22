**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | St Kilda | 5 | 16 | 144.1 | 4 | 1 | 0 | 428 | 297 |
| 2 | Essendon | 5 | 16 | 128 | 4 | 1 | 0 | 498 | 389 |
| 3 | Collingwood | 5 | 16 | 120.2 | 4 | 1 | 0 | 476 | 396 |
| 4 | Brisbane Lions | 6 | 16 | 113.8 | 4 | 2 | 0 | 594 | 522 |
| 5 | Port Adelaide | 6 | 16 | 101.6 | 4 | 2 | 0 | 521 | 513 |
| 6 | Carlton | 5 | 14 | 96.3 | 3 | 1 | 1 | 391 | 406 |
| 7 | Sydney Swans | 5 | 12 | 132.4 | 3 | 2 | 0 | 498 | 376 |
| 9 | Adelaide Crows | 5 | 12 | 118 | 3 | 2 | 0 | 512 | 434 |
| 10 | Western Bulldogs | 6 | 12 | 90.3 | 3 | 3 | 0 | 436 | 483 |
| 11 | Geelong Cats | 5 | 8 | 119 | 2 | 3 | 0 | 502 | 422 |
| 12 | GWS Giants | 6 | 8 | 91.6 | 2 | 4 | 0 | 490 | 535 |
| 13 | Fremantle | 6 | 8 | 89.9 | 2 | 4 | 0 | 473 | 526 |
| 14 | North Melbourne | 5 | 8 | 77.5 | 2 | 3 | 0 | 382 | 493 |
| 15 | Richmond | 5 | 6 | 92.4 | 1 | 3 | 1 | 377 | 408 |
| 16 | Gold Coast Suns | 5 | 4 | 75.1 | 1 | 4 | 0 | 364 | 485 |
| 17 | West Coast Eagles | 6 | 4 | 72.6 | 1 | 5 | 0 | 470 | 647 |
| 18 | Hawthorn | 5 | 4 | 59.6 | 1 | 4 | 0 | 302 | 507 |

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
