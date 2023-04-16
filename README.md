**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | St Kilda | 4 | 16 | 160.4 | 4 | 0 | 0 | 364 | 227 |
| 2 | Essendon | 5 | 16 | 128 | 4 | 1 | 0 | 498 | 389 |
| 3 | Carlton | 5 | 14 | 96.3 | 3 | 1 | 1 | 391 | 406 |
| 4 | Sydney Swans | 5 | 12 | 132.4 | 3 | 2 | 0 | 498 | 376 |
| 5 | Melbourne | 5 | 12 | 130.6 | 3 | 2 | 0 | 534 | 409 |
| 6 | Collingwood | 4 | 12 | 122.3 | 3 | 1 | 0 | 406 | 332 |
| 7 | Adelaide Crows | 5 | 12 | 118 | 3 | 2 | 0 | 512 | 434 |
| 9 | Port Adelaide | 5 | 12 | 92.8 | 3 | 2 | 0 | 412 | 444 |
| 10 | Geelong Cats | 5 | 8 | 119 | 2 | 3 | 0 | 502 | 422 |
| 11 | Fremantle | 5 | 8 | 99 | 2 | 3 | 0 | 404 | 408 |
| 12 | North Melbourne | 5 | 8 | 77.5 | 2 | 3 | 0 | 382 | 493 |
| 13 | Western Bulldogs | 5 | 8 | 76.8 | 2 | 3 | 0 | 318 | 414 |
| 14 | Richmond | 5 | 6 | 92.4 | 1 | 3 | 1 | 377 | 408 |
| 15 | GWS Giants | 4 | 4 | 92.6 | 1 | 3 | 0 | 326 | 352 |
| 16 | Gold Coast Suns | 5 | 4 | 75.1 | 1 | 4 | 0 | 364 | 485 |
| 17 | West Coast Eagles | 5 | 4 | 74.5 | 1 | 4 | 0 | 401 | 538 |
| 18 | Hawthorn | 4 | 4 | 52.8 | 1 | 3 | 0 | 227 | 430 |

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
