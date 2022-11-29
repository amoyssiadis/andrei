import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <div className="text-slate-800  bg-red-200   ">
      {/* <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      /> */}
      <main className=" bg-green-200 h-full mx-auto w-screen overflow-x-hidden" >{children}</main>
    </div>
  );
};
