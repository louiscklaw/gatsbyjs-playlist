const puppeteer = require( 'puppeteer' );

const theme_name = [
  'style',
  'cerulean',
  'cosmo',
  'cyborg',
  'darkly',
  'flatly',
  'journal',
  'litera',
  'lumen',
  'lux',
  'materia',
  'minty',
  'nuclear',
  'pulse',
  'sandstone',
  'simplex',
  'slate',
  'solar',
  'spacelab',
  'superhero',
  'united',
  'yeti',
]

const TEST_HOME=__dirname
const PROJ_HOME=TEST_HOME+'/..'
const DOCUMENTATION_DIR=PROJ_HOME+'/documentation'
const SCREEN_CAPTURE_STORE=DOCUMENTATION_DIR

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

( async () => {
  const browser = await puppeteer.launch({
    defaultViewport:{
        width: 1920,
        height: 1080
    },
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();
  await page.goto( 'http://localhost:8000' );


  for (var i = 0; i< theme_name.length; i++){
    console.log(`capturing ${i} screen capture... `)
    await page.screenshot( {
      path: `${SCREEN_CAPTURE_STORE}/screencapture_${theme_name[i]}.png`
    } );

    await page.$('#theme-change');
    await page.click('#theme-change');
    await timeout(500);

  }



  await browser.close();
} )();
