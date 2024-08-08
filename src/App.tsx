import { motion } from 'framer-motion';

function App() {

  return (
    <>
      <div className='h-screen bg-slate-900'>
        {/* header */}
        <header className='flex text-white'>
          <span>Website Model Animation</span>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
            </ul>
          </nav>
        </header>
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
