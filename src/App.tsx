import { motion } from 'framer-motion';
import Point from './components/Point';
import CardList from './components/CardList';

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
            <CardList />
          </div>
        </body>
      </div>
    </>
  )
}

export default App
