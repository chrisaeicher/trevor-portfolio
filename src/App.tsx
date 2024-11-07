import './App.css'
import TREVOR from './images/trevor.jpg';

function App() {
  const certs = [
    {
      name: 'Associate of ISC2',
      date: '9/5/23'
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
      name: 'CompTIA Security+',
      date: '10/27/22'
    },
     {
      name: 'CompTIA PenTest+',
      date: '5/22/24'
    },
    {
      name: 'CompTIA Project+',
      date: '5/18/22'
    }
  ];
  return (
    <div className='App flex justify-center'>
      <main className='flex flex-col py-12 items-center min-h-screen w-5/6 max-w-[2556px] bg-zinc-900 shadow-black shadow-2xl'>
        <div className='flex flex-col-reverse md:flex-row gap-4 w-5/6'>
          <div className='flex flex-col'>
            <span className='text-orange-light-tn text-3xl'>Hi, I'm</span>
            <h1 className='text-4xl text-white'>Trevor Nuckles</h1>
            <p className='mt-8'>I'm a skilled IT professional with a Bachelor of Science in Information Technology and experience in programming, systems management, and team leadership.</p>
            <a className='w-fit px-4 py-2 rounded-lg mt-4 font-semibold transition bg-orange-light-tn hover:bg-orange-dark-tn' href='resume_nuckles_trevor.pdf' download={true}>Download my resume</a>
          </div>
          <img className='w-64 h-64 rounded-full' src={TREVOR} alt='Trevor Nuckles' />
        </div>
        <div className='flex flex-col w-5/6 gap-4'>
          <h2 className="text-3xl border-b border-orange-light-tn mt-12">Certifications</h2>
          <div className='flex flex-wrap gap-6'>
            {certs.map(({name, date}) => (
              <div key={name+date} className='flex flex-col'>
                <h3 className='text-white font-medium'>{name}</h3>
                <p className='text-orange-light-tn text-xs font-bold'>{date}</p>
              </div>
            ))}
          </div>
          <a className='w-fit px-4 py-2 rounded-lg mt-4 font-semibold transition bg-orange-light-tn hover:bg-orange-dark-tn' href='https://www.credly.com/users/trevor-nuckles' target='_blank'>View all certifications</a>
        </div>
      </main>
    </div>
  )
}

  

export default App
