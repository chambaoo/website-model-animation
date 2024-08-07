import { motion } from 'framer-motion';

function App() {

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='w-28 h-28 bg-red-600'>
        </motion.div>
      </div>
    </>
  )
}

export default App
