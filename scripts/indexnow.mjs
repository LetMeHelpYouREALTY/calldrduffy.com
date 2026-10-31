// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver...).
// Usage: node scripts/indexnow.mjs   (run after a production deploy)
const HOST = 'www.calldrduffy.com'
const KEY = '6993f28e81b2dd43b5074fa6a5644580' // key file: public/<KEY>.txt
const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text())
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
})
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status}`)
