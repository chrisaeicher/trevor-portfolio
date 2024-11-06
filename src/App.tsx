import './App.css'
import TREVOR from './images/trevor.jpg';

function App() {
  const certs = [
    {
      name: 'CompTIA PenTest+',
      date: '5/22/24'
    },
    {
      name: 'CompTIA Network+',
      date: '6/30/22'
    },
    {
      name: 'CompTIA CySA+',
      date: '12/14/23'
    },
    {
      name: 'CompTIA A+',
      date: '11/30/21'
    },
    {
      name: 'CompTIA Security+',
      date: '10/27/22'
    },
    {
      name: 'CompTIA Project+',
      date: '5/18/22'
    },
    {
      name: 'Associate of ISC2',
      date: '9/5/23'
    },
    {
      name: 'CompTIA Network Vulnerability Assessment Professional',
      date: '5/22/24'
    },
    {
      name: 'CompTIA IT Operations Specialist',
      date: '6/30/22'
    },
    {
      name: 'CompTIA Security Analytics Professional',
      date: '12/14/23'
    },
    {
      name: 'CompTIA Network Security Professional',
      date: '5/22/24'
    },
  ];
  return (
    <div className='App flex justify-center'>
      <main className='flex flex-col py-24 items-center h-screen w-5/6 sm:w-3/4 md:w-2/3 max-w-[2556px] bg-zinc-900 shadow-black shadow-2xl'>
        <div className='flex flex-col md:flex-row w-1/2'>
          <div className='flex flex-col'>
            <span className='text-green-tn text-3xl'>Hi, I'm</span>
            <h1 className='text-4xl text-white'>Trevor Nuckles</h1>
            <p className='mt-8'>I'm a skilled IT professional with a Bachelor of Science in Information Technology and experience in programming, systems management, and team leadership.</p>
            <a className='Download w-fit px-4 py-2 rounded-lg mt-4 font-semibold transition hover:-translate-y-1' href='resume_nuckles_trevor.pdf' download={true}>Download my resume</a>
          </div>
          <img className='w-64 h-64 rounded-full' src={TREVOR} alt='Trevor Nuckles' />
        </div>
        <div className='flex flex-col w-1/2 gap-6'>
          <h2 className="text-3xl border-b border-green-tn mt-12">Certifications</h2>
          <div className='flex flex-col flex-wrap gap-4'>
            {certs.map(({name, date}) => (
              <div key={name+date} className='flex flex-col'>
                <h3 className='text-white font-medium'>{name}</h3>
                <p className='text-green-tn text-xs'>{date}</p>
              </div>
            ))}
          </div>
          
        </div>
      </main>
    </div>
  )
}

  

export default App
