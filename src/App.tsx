import { motion } from 'framer-motion';
import Point from './components/point';
import Card from './components/card';

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
                  <Card id={1}/>
                </li>
                <li className='my-2'>
                  <Card id={2}/>
                </li>
                <li className='my-2'>
                  <Card id={3}/>
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
