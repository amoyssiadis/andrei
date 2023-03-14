import GrainedEffect from './GrainedEffect'
import { motion } from 'framer-motion'
export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <GrainedEffect>
        <div className="text-[#090709]">
          {/* <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      /> */}
          <main className=" mx-auto h-full w-screen overflow-x-hidden ">
            {children}
          </main>
        </div>
      </GrainedEffect>
    </motion.div>
  )
}
