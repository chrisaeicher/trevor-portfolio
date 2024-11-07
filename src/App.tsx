import './App.css';
import TREVOR from './images/trevor.jpg';
import Github from './icons/Github';
import Gitlab from './icons/Gitlab';
import LinkedIn from './icons/LinkedIn';

function App() {
	const certs = [
		{
			name: 'Associate of ISC2',
			date: 'September 2023',
		},
		{
			name: 'CompTIA Network+',
			date: 'June 2022',
		},
		{
			name: 'CompTIA CySA+',
			date: 'December 2023',
		},
		{
			name: 'CompTIA Security+',
			date: 'October 2022',
		},
		{
			name: 'CompTIA PenTest+',
			date: 'May 2024',
		},
		{
			name: 'CompTIA Project+',
			date: 'May 2022',
		},
	];
	return (
		<div className='App flex justify-center'>
			<main className='flex flex-col py-12 items-center min-h-screen w-5/6 max-w-[2556px] bg-zinc-900 shadow-black shadow-2xl'>
				<div className='flex flex-col-reverse md:flex-row gap-4 w-5/6'>
					<div className='flex flex-col'>
						<span className='text-orange-light-tn text-3xl'>Hi, I'm</span>
						<h1 className='text-4xl text-white'>Trevor Nuckles</h1>
						<p className='mt-8'>
							Skilled IT professional with a Bachelor of Science in Information
							Technology with an emphasis in cybersecurity and information
							assurance. Experience in programming, scripting, and automation,
							as well as systems management and team leadership. Proficient in
							Python and learning Go. Effective at enhancing operational
							efficiency through automation, reducing processing times, and
							optimizing resource utilization.
						</p>
						<div className='flex mt-8 items-center gap-4'>
							<a
								className='w-fit px-4 py-2 rounded-lg font-semibold transition bg-orange-light-tn hover:bg-orange-dark-tn'
								href='resume_nuckles_trevor.pdf'
								download={true}
							>
								Download my resume
							</a>
							<a href='https://github.com/tnuckles' target='_blank'>
								<Github />
							</a>
							<a href='https://gitlab.com/trevor_nuckles' target='_blank'>
								<Gitlab />
							</a>
							<a href='https://www.linkedin.com/in/tnuckles/' target='_blank'>
								<LinkedIn />
							</a>
						</div>
					</div>
					<img
						className='w-64 h-64 rounded-full'
						src={TREVOR}
						alt='Trevor Nuckles'
					/>
				</div>
				<div className='flex flex-col w-5/6 gap-4'>
					<h2 className='text-3xl border-b border-orange-light-tn mt-12'>
						Professional Experience
					</h2>
					<div className='flex flex-wrap gap-8'>
						<div className='flex flex-col'>
							<h3 className='text-white font-medium'>Python Developer</h3>
							<p className='text-xs text-gray-300'>
								<a href='basicinvite.com'>basicinvite.com</a>
							</p>
							<p className='text-orange-light-tn text-xs font-bold'>
								February 2021 - Present
							</p>
						</div>
						<div className='flex flex-col'>
							<h3 className='text-white font-medium'>General Manager</h3>
							<p className='text-xs text-gray-300'>
								<a href='basicinvite.com'>basicinvite.com</a>
							</p>
							<p className='text-orange-light-tn text-xs font-bold'>
								September 2016 - Present
							</p>
						</div>
						<div className='flex flex-col'>
							<h3 className='text-white font-medium'>
								Customer Service / Help Desk
							</h3>
							<p className='text-xs text-gray-300'>
								<a href='basicinvite.com'>Steton Technology (now RizePoint)</a>
							</p>
							<p className='text-orange-light-tn text-xs font-bold'>
								January 2015 - September 2016
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col w-5/6 gap-4'>
					<h2 className='text-3xl border-b border-orange-light-tn mt-12'>
						Education
					</h2>
					<div className='flex flex-wrap gap-6'>
						<div className='flex flex-col'>
							<h3 className='text-white font-medium'>
								Bachelor of Science in Information Technology
							</h3>
							<p className='text-xs text-gray-300'>
								Emphasis in Cybersecurity and Information Assurance
							</p>
							<p className='text-xs text-gray-300'>
								Western Governors University
							</p>
							<p className='text-orange-light-tn text-xs font-bold'>
								June 2024
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col w-5/6 gap-4'>
					<h2 className='text-3xl border-b border-orange-light-tn mt-12'>
						Certifications
					</h2>
					<div className='flex flex-wrap gap-6'>
						{certs.map(({ name, date }) => (
							<div key={name + date} className='flex flex-col'>
								<h3 className='text-white font-medium'>{name}</h3>
								<p className='text-orange-light-tn text-xs font-bold'>{date}</p>
							</div>
						))}
					</div>
					<a
						className='w-fit px-4 py-2 rounded-lg mt-4 font-semibold transition bg-orange-light-tn hover:bg-orange-dark-tn'
						href='https://www.credly.com/users/trevor-nuckles'
						target='_blank'
					>
						View all certifications
					</a>
				</div>
			</main>
		</div>
	);
}

export default App;
