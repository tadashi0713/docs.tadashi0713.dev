import { LinkChecker } from 'linkinator'
;(async () => {
  const checker = new LinkChecker()
  const result = await checker.check({
    path: 'https://docs.tadashi0713.dev/',
  })

  const regex = /\/api\/icon\/?$/
  const brokenLinks = result.links.filter(
    (x) => x.state === 'BROKEN' && !regex.test(x.url),
  )
  console.log(brokenLinks)
})()
