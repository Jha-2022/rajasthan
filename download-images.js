const fs = require('fs');
const path = require('path');
const https = require('https');

const wm = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const IMAGES = {
  hero: { file: "Hawa Mahal Sunset View Jaipur Rajasthan.jpg", width: 1800, local: "hero.jpg" },
  ghoomar: { file: "Aesthetic treat of Ghoomar-2.jpg", width: 900, local: "ghoomar.jpg" },
  kalbeliya: { file: "Kalbeliya Dance 2.jpg", width: 900, local: "kalbeliya.jpg" },
  pushkar: { file: "(A) Camel Pushkar fair.jpg", width: 900, local: "pushkar.jpg" },
  diwali: { file: "Diwali Diyas Lamps.jpg", width: 900, local: "diwali.jpg" },
  folkfest: { file: "Rajasthan folk dance.jpg", width: 900, local: "folkfest.jpg" },
  blockprint: { file: "Woman doing Block Printing at Bagru village, Jaipur, India.jpg", width: 800, local: "blockprint.jpg" },
  bluepottery: { file: "Jaipur Blue Pottery Vase with Raja-Rani Design.jpg", width: 800, local: "bluepottery.jpg" },
  pichwai: { file: "Wall Paintings at Nathdwara.jpg", width: 800, local: "pichwai.jpg" },
  attire: { file: "Women in Rajasthani dress.jpg", width: 800, local: "attire.jpg" },
  hawamahal: { file: "Hawa Mahal, Jaipur, Rajasthan.JPG", width: 1000, local: "hawamahal.jpg" },
  mehrangarh: { file: "A view of the Mehrangarh Fort, Jodhpur, Rajasthan.jpg", width: 1000, local: "mehrangarh.jpg" },
  amber: { file: "Amber Fort on the hills of Jaipur.JPG", width: 1000, local: "amber.jpg" },
  citypalace: { file: "Udaipur-Stadtpalast-04-2018-gje.jpg", width: 1000, local: "citypalace.jpg" },
  jaisalmerfort: { file: "Fort of Jaisalmer (Sonar Kella).jpg", width: 1000, local: "jaisalmerfort.jpg" },
  haveli: { file: "Patwon ki Haveli Jaisalmer.jpg", width: 1000, local: "haveli.jpg" },
  dalbaati: { file: "Rajasthani Dal-baati-churma.jpg", width: 800, local: "dalbaati.jpg" },
  laalmaas: { file: "Laal maans.jpg", width: 800, local: "laalmaas.jpg" },
  gatte: { file: "Daal baati and gatte ki sabji.jpg", width: 800, local: "gatte.jpg" },
  tiger: { file: "T-24 Tiger in the wild February 2015.jpg", width: 900, local: "tiger.jpg" },
  chital: { file: "Chital or Spotted Deer.JPG", width: 800, local: "chital.jpg" },
  chinkara: { file: "Chinkara.jpg", width: 800, local: "chinkara.jpg" },
  ranthambore: { file: "View of ranthambhore.jpg", width: 900, local: "ranthambore.jpg" },
  sariska: { file: "Aravali hills after rainy season.jpg", width: 900, local: "sariska.jpg" },
  dunes: { file: "Sam dunes (Jaisalmer).jpg", width: 900, local: "dunes.jpg" },
  camel: { file: "Sam Dunes Camel.JPG", width: 900, local: "camel.jpg" },
  lakepalace: { file: "Taj Lake Palace in Pichola Lake, Udaipur.jpg", width: 900, local: "lakepalace.jpg" },
  chandbaori: { file: "Chand Baori (Step-well) at Abhaneri.JPG", width: 900, local: "chandbaori.jpg" },
};

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(\`Failed to get '\${url}' (\${response.statusCode})\`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  const keys = Object.keys(IMAGES);
  for (const key of keys) {
    const info = IMAGES[key];
    const url = wm(info.file, info.width);
    const dest = path.join(dir, info.local);
    console.log(\`Downloading \${key}...\`);
    try {
      await download(url, dest);
      console.log(\`  -> Saved \${info.local}\`);
    } catch (err) {
      console.error(\`  -> Error downloading \${key}: \${err.message}\`);
    }
  }
  console.log("All done!");
}

run();
