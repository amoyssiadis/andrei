import Head from 'next/head'
import GrainedEffect from './GrainedEffect'

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    // <motion.div
    // // initial={{ opacity: 0.5 }}
    // // animate={{ opacity: 1 }}
    // // exit={{ opacity: 0.5 }}
    // // transition={{
    // //   duration: 15,
    // // }}
    // >
    <>
      <Head>
        <link
          rel="icon"
          href={settings.data.favicon.url || '/favicon-32x32.png'}
          sizes="any"
        />
      </Head>
      <GrainedEffect>
        <div className="text-[#090709]">
          {/* <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      /> */}
          <main className=" mx-auto h-full min-h-screen w-screen overflow-x-hidden  ">
            {children}
          </main>
        </div>
      </GrainedEffect>
    </>
    // </motion.div>
  )
}
