const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function parseAFLWebsiteData() {
  const url = "http://www.afl.com.au/ladder";

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const ladder = [];

    const rows = $('.ladder__table tbody tr'); // Select table with class 'ladder' and its rows

    rows.each((index, row) => {
      if ($(row).attr('class') === '') { // Only process rows with class=""
        const position = $(row).find('.ladder__cell--pos').text().trim();
        const club = $(row).find('.ladder__cell--club').text().trim();
        const played = $(row).find('.ladder__cell:nth-child(4)').text().trim();
        const points = $(row).find('.ladder__cell--points').text().trim();
        const percentage = $(row).find('.ladder__cell--percentage').text().trim();
        const won = $(row).find('.ladder__cell:nth-child(7)').text().trim();
        const lost = $(row).find('.ladder__cell:nth-child(8)').text().trim();
        const drawn = $(row).find('.ladder__cell:nth-child(9)').text().trim();
        const pf = $(row).find('.ladder__cell:nth-child(10)').text().trim();
        const pa = $(row).find('.ladder__cell:nth-child(11)').text().trim();

        const ladderItem = {
          position: position,
          club: club,
          played: played,
          points: points,
          percentage: percentage,
          won: won,
          lost: lost,
          drawn: drawn,
          pf: pf,
          pa: pa,
        };

        ladder.push(ladderItem);
      }
    });

    fs.writeFileSync('afl-ladder.json', JSON.stringify(ladder, null, 2));

  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

parseAFLWebsiteData();
