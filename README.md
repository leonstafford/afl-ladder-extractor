**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Carlton | 4 | 14 | 114.2 | 3 | 0 | 1 | 329 | 288 |
| 2 | St Kilda | 3 | 12 | 150.3 | 3 | 0 | 0 | 251 | 167 |
| 3 | Collingwood | 4 | 12 | 122.3 | 3 | 1 | 0 | 406 | 332 |
| 4 | Melbourne | 3 | 8 | 136.8 | 2 | 1 | 0 | 331 | 242 |
| 5 | Sydney Swans | 3 | 8 | 134.5 | 2 | 1 | 0 | 312 | 232 |
| 6 | Essendon | 3 | 8 | 129.1 | 2 | 1 | 0 | 306 | 237 |
| 7 | Adelaide Crows | 4 | 8 | 105.9 | 2 | 2 | 0 | 394 | 372 |
| 9 | North Melbourne | 4 | 8 | 89.4 | 2 | 2 | 0 | 305 | 341 |
| 10 | Richmond | 3 | 6 | 109.1 | 1 | 1 | 1 | 215 | 197 |
| 11 | Fremantle | 4 | 4 | 95.6 | 1 | 3 | 0 | 304 | 318 |
| 12 | GWS Giants | 3 | 4 | 95.1 | 1 | 2 | 0 | 251 | 264 |
| 13 | West Coast Eagles | 3 | 4 | 90.2 | 1 | 2 | 0 | 249 | 276 |
| 14 | Port Adelaide | 3 | 4 | 85.2 | 1 | 2 | 0 | 276 | 324 |
| 15 | Gold Coast Suns | 3 | 4 | 78.7 | 1 | 2 | 0 | 214 | 272 |
| 16 | Western Bulldogs | 3 | 4 | 66.5 | 1 | 2 | 0 | 173 | 260 |
| 17 | Hawthorn | 3 | 4 | 60.1 | 1 | 2 | 0 | 182 | 303 |
| 18 | Geelong Cats | 3 | 0 | 83 | 0 | 3 | 0 | 239 | 288 |

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
