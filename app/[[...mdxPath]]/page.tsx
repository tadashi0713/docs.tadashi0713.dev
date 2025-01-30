import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const { mdxPath } = await props.params
  const { metadata } = await importPage(mdxPath)
  const title = metadata.title || 'tadashi0713 Docs'
  const description =
    metadata.description ||
    'Collections of documents created by Tadashi Nemoto(tadashi0713)'
  const images = `/api/og?title=${encodeURIComponent(title)}`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'tadashi0713 Docs',
      locale: 'ja_JP',
      type: 'article',
      images,
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
