import fs from 'fs';

async function download(url, dest) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  if (res.ok) {
    const text = await res.text();
    fs.writeFileSync(dest, text);
    console.log('Downloaded', dest);
  } else {
    console.error('Failed', url, res.status);
  }
}

await download('https://api.iconify.design/logos:canva.svg', 'public/canva.svg');
await download('https://api.iconify.design/logos:coreldraw.svg', 'public/coreldraw.svg');
