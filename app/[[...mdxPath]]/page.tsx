import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const { mdxPath } = await props.params
  const { metadata } = await importPage(mdxPath)
  const title = metadata.title
  const description = metadata.description
  return {
    metadataBase: new URL('https://docs.tadashi0713.dev'),
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'tadashi0713 Docs',
      locale: 'ja_JP',
      type: 'article',
      images: `/api/og?title=${encodeURIComponent(title)}`,
      url: './',
    },
  }
}

const Wrapper = useMDXComponents({}).wrapper

export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
