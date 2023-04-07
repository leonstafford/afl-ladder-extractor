const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function parseAFLWebsiteData() {
  try {
    const { data } = await axios.get('https://www.afl.com.au/ladder');
    const $ = cheerio.load(data);
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

    const tableMarkdown = generateMarkdownTable(ladder);
    updateReadme(tableMarkdown);
    console.log('Ladder updated successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function generateMarkdownTable(ladder) {
    console.log(ladder);
    // Generate Markdown table from ladder array
    const tableHeader = '| Position | Club | Played | Points | Percentage | Won | Lost | Drawn | PF | PA |\n| -------- | ---- | ------ | ------ | ---------- | --- | ---- | ----- | -- | -- |\n';
    const tableRows = ladder.map(item => `| ${item.position} | ${item.club} | ${item.played} | ${item.points} | ${item.percentage} | ${item.won} | ${item.lost} | ${item.drawn} | ${item.pf} | ${item.pa} |`).join('\n');
    return `${tableHeader}${tableRows}`;
}

function updateReadme(tableMarkdown) {
  const readmeContents = fs.readFileSync('README.md', 'utf-8');
  const header = readmeContents.split('**Current AFL Ladder**')[0];
  const footer = readmeContents.split('**AFL Ladder Data JSON/Markdown**')[1];
  
  const updatedReadmeContents = `${header}**Current AFL Ladder**\n\n${tableMarkdown}\n\n**AFL Ladder Data JSON/Markdown**${footer}`;
  fs.writeFileSync('README.md', updatedReadmeContents);
}

parseAFLWebsiteData();