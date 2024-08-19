import { motion } from 'framer-motion';
import Point from './components/point';

function App() {

  return (
    <>
      <div className='h-screen bg-slate-900'>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='container mx-auto py-2 px-2'>
          {/* header */}
          <header className='flex justify-between text-white'>
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
        </motion.div>
        <body className='flex justify-between text-white'>
          <Point />
        </body>
      </div>
    </>
  )
}

export default App
