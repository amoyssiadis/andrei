import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <div className=" text-[#090709]   ">
      {/* <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      /> */}
      <main className=" mx-auto h-full w-screen overflow-x-hidden ">
        {children}
      </main>
    </div>
  )
}
