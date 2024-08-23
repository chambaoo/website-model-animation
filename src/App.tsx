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
        <body className='container mx-auto text-white'>
          <div className='flex justify-between'>
            <Point />
          </div>
          <div>
            <section>
              <h2 className='my-4 text-4xl'>1日目</h2>
              <p className='mx-8'>よく食べて、しっかり眠ること</p>
            </section>
            <section>
              <h2 className='my-4 text-4xl'>2日目</h2> 
              <p className='mx-8'>能力覚醒！</p>
            </section>
            <section>
              <h2 className='my-4 text-4xl'>3日目</h2>
              <p className='mx-8'>Happy Hacking</p>
            </section>
            <section>
              <h2 className='my-4 text-4xl'>バインダー</h2>
              <ul>
                <li className='my-2'>
                  <a href="#card1" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No. 001</h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">Description: here is a sample card.</p>
                  </a>
                </li>
                <li className='my-2'>
                  <a href="#card2" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No. 002</h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">Description: here is a sample card.</p>
                  </a>
                </li>
                <li className='my-2'>
                  <a href="#card3" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No. 003</h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">Description: here is a sample card.</p>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </body>
      </div>
    </>
  )
}

export default App
