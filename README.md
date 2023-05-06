**Current AFL Ladder**

| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |
| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |
| 1 | Melbourne | 8 | 24 | 138.3 | 6 | 2 | 0 | 859 | 621 |
| 2 | Brisbane Lions | 8 | 24 | 122 | 6 | 2 | 0 | 809 | 663 |
| 3 | Collingwood | 7 | 24 | 117.7 | 6 | 1 | 0 | 625 | 531 |
| 4 | Geelong Cats | 8 | 20 | 135.7 | 5 | 3 | 0 | 862 | 635 |
| 5 | St Kilda | 7 | 20 | 133.2 | 5 | 2 | 0 | 586 | 440 |
| 6 | Port Adelaide | 7 | 20 | 102.5 | 5 | 2 | 0 | 604 | 589 |
| 7 | Western Bulldogs | 8 | 20 | 99.5 | 5 | 3 | 0 | 616 | 619 |
| 9 | Essendon | 7 | 16 | 111.1 | 4 | 3 | 0 | 679 | 611 |
| 10 | Adelaide Crows | 8 | 16 | 108.1 | 4 | 4 | 0 | 721 | 667 |
| 11 | Sydney Swans | 7 | 12 | 104.6 | 3 | 4 | 0 | 641 | 613 |
| 12 | Fremantle | 8 | 12 | 95.4 | 3 | 5 | 0 | 657 | 689 |
| 13 | GWS Giants | 8 | 12 | 91.9 | 3 | 5 | 0 | 668 | 727 |
| 14 | Gold Coast Suns | 8 | 12 | 91.3 | 3 | 5 | 0 | 618 | 677 |
| 15 | Richmond | 8 | 10 | 95.7 | 2 | 5 | 1 | 607 | 634 |
| 16 | North Melbourne | 7 | 8 | 66.5 | 2 | 5 | 0 | 485 | 729 |
| 17 | West Coast Eagles | 8 | 4 | 63.3 | 1 | 7 | 0 | 572 | 903 |
| 18 | Hawthorn | 8 | 4 | 61.6 | 1 | 7 | 0 | 491 | 797 |

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
