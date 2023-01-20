import GrainedEffect from './GrainedEffect'

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <GrainedEffect>
      <div className="  text-[#090709]">
        {/* <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      /> */}
        <main className=" mx-auto h-full w-screen overflow-x-hidden  ">
          {children}
        </main>
      </div>
    </GrainedEffect>
  )
}
