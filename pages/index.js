import Head from 'next/head'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../prismicio'
import { components } from '../slices/'
import { Layout } from '../components/Layout'
import { NextSeo } from 'next-seo'

const Index = ({ page, navigation, settings }) => {
  //console.log({ page })

  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <NextSeo
        title={
          page.data.seo[0].title ||
          page.data.title ||
          'Andrei Moyssiadis - Filmmaker'
        }
        description={
          page.data.seo[0].description ||
          'Official website of Andrei Moyssiadis - Filmmaker'
        }
        openGraph={{
          // url: 'https://www.url.ie/a',
          title:
            page.data.seo[0].title ||
            page.data.title ||
            'Andrei Moyssiadis - Filmmaker',
          description:
            page.data.seo[0].description ||
            'Official website of Andrei Moyssiadis - Filmmaker',
          images: [
            {
              url: page.data.seo[0].image.url || '',
              width: page.data.seo[0].image.width || 800,
              height: page.data.seo[0].image.height || 600,
              alt: 'Andrei Moyssiadis - Filmmaker',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Andrei Moyssiadis',
        }}
      />
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export default Index

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'home', { lang: locale })
  const navigation = await client.getSingle('navigation', { lang: locale })
  const settings = await client.getSingle('settings', { lang: locale })

  return {
    props: {
      page,
      navigation,
      settings,
    },
  }
}
