import Head from 'next/head'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../prismicio'
import { components } from '../slices'
import { Layout } from '../components/Layout'
import { useEffect, useRef } from 'react'

const Index = ({ page, navigation, settings }) => {
  const videoRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 5000)
  }, [])
  const backgroundVideo =
    'https://andrei-portfolio.cdn.prismic.io/andrei-portfolio/ce1c0eb0-544a-4999-b90b-036ed15337fe_BJORK++DIGITAL-+MAKING+OF+FILTROS+DE+INSTAGRAM.webm'
  return (
    <Layout title={'Home'}>
      <video
        ref={videoRef}
        controls
        width="250"
        loop
        muted
        style={{
          position: 'relative',
          width: '100%',
          height: '15rem',
          left: 0,
          top: 0,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </Layout>
  )
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <div className="m-auto w-52 rounded bg-red-200 p-4 text-center">
        Testing
      </div>
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
