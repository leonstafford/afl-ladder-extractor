**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | St Kilda | 4 | 16 | 160.4 | 4 | 0 | 0 | 364 | 227 |
| 2 | Carlton | 4 | 14 | 114.2 | 3 | 0 | 1 | 329 | 288 |
| 3 | Melbourne | 4 | 12 | 149.8 | 3 | 1 | 0 | 457 | 305 |
| 4 | Essendon | 4 | 12 | 126.3 | 3 | 1 | 0 | 394 | 312 |
| 5 | Collingwood | 4 | 12 | 122.3 | 3 | 1 | 0 | 406 | 332 |
| 6 | Sydney Swans | 4 | 8 | 126.2 | 2 | 2 | 0 | 376 | 298 |
| 7 | Adelaide Crows | 4 | 8 | 105.9 | 2 | 2 | 0 | 394 | 372 |
| 9 | North Melbourne | 4 | 8 | 89.4 | 2 | 2 | 0 | 305 | 341 |
| 10 | Port Adelaide | 4 | 8 | 88.1 | 2 | 2 | 0 | 342 | 388 |
| 11 | Western Bulldogs | 4 | 8 | 76.2 | 2 | 2 | 0 | 262 | 344 |
| 12 | Richmond | 4 | 6 | 104.5 | 1 | 2 | 1 | 299 | 286 |
| 13 | Geelong Cats | 4 | 4 | 109.9 | 1 | 3 | 0 | 366 | 333 |
| 14 | Fremantle | 4 | 4 | 95.6 | 1 | 3 | 0 | 304 | 318 |
| 15 | GWS Giants | 4 | 4 | 92.6 | 1 | 3 | 0 | 326 | 352 |
| 16 | West Coast Eagles | 4 | 4 | 77.6 | 1 | 3 | 0 | 312 | 402 |
| 17 | Gold Coast Suns | 4 | 4 | 71.2 | 1 | 3 | 0 | 274 | 385 |
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
