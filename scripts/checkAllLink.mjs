import { LinkChecker } from 'linkinator'
import Sitemapper from 'sitemapper'
;(async () => {
  const checker = new LinkChecker()
  const Google = new Sitemapper({
    url: 'https://docs.tadashi0713.dev/sitemap.xml',
    timeout: 15000, // 15 seconds
  })
  const allBrokeLinks = []

  try {
    const { sites } = await Google.fetch()
    console.log(sites.length)
    const result = await checker.check({
      path: sites[11],
    })
    const regex = /\/api\/icon\/?$/
    const brokeLinks = result.links.filter(
      (x) => x.state === 'BROKEN' && !regex.test(x.url),
    )
    allBrokeLinks.push(brokeLinks)
  } catch (error) {
    console.log(error)
  }

  console.log(allBrokeLinks)
})()
