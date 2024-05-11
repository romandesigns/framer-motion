import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function App() {
  return (
    <section className="flex flex-col gap-10 overflow-x-hidden w-full h-full">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10 border h-full"
      >
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-sqare rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-slate-700 rounded-lg"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.div
            className="w-20 h-20 bg-slate-700 rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-sqare rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-sqare rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-sqare rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-sqare rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-sqare rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </section>
  );
}

export default App;
