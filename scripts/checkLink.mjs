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
    console.log(sites)
    const result = await checker.check({
      path: sites[9],
    })
    const brokeLinks = result.links.filter((x) => x.state === 'BROKEN')
    allBrokeLinks.push(brokeLinks)
  } catch (error) {
    console.log(error)
  }

  console.log(allBrokeLinks)

  // // To see if all the links passed, you can check `passed`
  // console.log(`Passed: ${results.passed}`);

  // // Show the list of scanned links and their results
  // console.log(results);

  // Example output:
  // {
  //   passed: true,
  //   links: [
  //     {
  //       url: 'http://example.com',
  //       status: 200,
  //       state: 'OK'
  //     },
  //     {
  //       url: 'http://www.iana.org/domains/example',
  //       status: 200,
  //       state: 'OK'
  //     }
  //   ]
  // }
})()
