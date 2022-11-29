import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <div className="bg-red-200  text-slate-800   ">
      {/* <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      /> */}
      <main className=" mx-auto h-full w-screen overflow-x-hidden bg-green-200">
        {children}
      </main>
    </div>
  )
}
