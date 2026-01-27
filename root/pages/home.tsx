import './home.css'
import { Link } from 'react-router-dom'

function home() {

  return (
    <div className='home-container min-h-screen grid place-items-center py-10 px-10 md:py-2'>
      <div className='home-header px-26 flex flex-col md:flex-row gap-10 md:gap-10 font-sans items-center mb-10 md:mb-20 w-full max-w-4xl mx-auto'>
        <h1 className='home-title font-bold text-center md:text-left text-4xl md:text-6xl'>hi, im andrew!</h1>

        <div className="flex gap-8">
          <a href='https://www.linkedin.com/in/andrewbabatunde/' target="_blank" rel="noreferrer">
            <p className='home-link text-white text-xl md:text-2xl font-bold underline hover:text-gray-300 transition-colors'>linkedin</p>
          </a>
          <a href='https://github.com/andrew-babatunde2004' target="_blank" rel="noreferrer">
            <p className='home-link text-white text-xl md:text-2xl font-bold underline hover:text-gray-300 transition-colors'>github</p>
          </a>
          <Link to='/music'>
            <p className='home-link text-white text-xl md:text-2xl font-bold underline hover:text-gray-300 transition-colors'>music</p>
          </Link>
        </div>
      </div>

      <div className='home-content text-left w-full max-w-2xl mx-auto mb-20 md:mb-20'>
        <p className="text-lg md:text-xl leading-relaxed">aob85593 [at] uga [dot] edu
          <br />
          <br />im currently a junior at the university of georgia studying computer science <br />
          I started coding back in highschool but I have been around computers my entire life
          professional as coding is I try my best to be creative with everything to be unique
          right now im learning web design and AI/ML technology as well as furthering my knowledge
          of java for full-stack applications <br />
          the mobile development of this site is still in progress.
          <br />


        </p>

        <p className='text-white mb-8 text-lg'>currently enrolled at <a href='https://computing.uga.edu' target="_blank" rel="noreferrer"><span className='text-red-600 font-bold hover:underline'>the university of georgia</span></a></p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <h1 className='mb-5 text-2xl font-bold'>projects</h1>
            <a href='https://github.com/andrew-babatunde2004/cs1302-api-app' target="_blank" rel="noreferrer">
              <p className='text-white mb-3 hover:text-gray-300 transition-colors'>Internship Finder ↗ </p>
            </a>
            <a href='https://github.com/andrew-babatunde2004/electron-local-music-hoster' target="_blank" rel="noreferrer">
              <p className='text-white hover:text-gray-300 transition-colors'>Locally Hosted Music Player ↗</p>
            </a>
          </div>

          <div>
            <h1 className='mb-5 text-2xl font-bold'> contributions </h1>
            <a href='https://github.com/DevDogs-UGA' target="_blank" rel="noreferrer">
              <p className='text-white hover:text-gray-300 transition-colors'>DevDogs ↗</p>
            </a>
          </div>

          <div className="md:col-span-2">
            <h1 className='mb-5 text-2xl font-bold'>leadership</h1>
            <div className="grid grid-cols-1 sm:grid-cols- gap-4">
              <a href='https://www.suwanee.com/engage/suwanee-youth-leaders' target="_blank" rel="noreferrer">
                <p className='text-white hover:text-gray-300 transition-colors'>Suwanne Youth Leaders ↗</p>
              </a>

              <a href='https://www.colorstack.org' target="_blank" rel="noreferrer">
                <p className='text-white hover:text-gray-300 transition-colors'>ColorStack ↗</p>
              </a>
              <a href='https://acm-uga.github.io' target="_blank" rel="noreferrer">
                <p className='text-white hover:text-gray-300 transition-colors'>ACM ↗</p>
              </a>
              <a href='https://github.com/DevDogs-UGA' target="_blank" rel="noreferrer">
                <p className='text-white hover:text-gray-300 transition-colors'>DevDogs ↗</p>
              </a>
            </div>
          </div>
        </div>

      </div>
      <p className='home-footer text-gray-500 mb-10 text-sm'>© 2025 Andrew Babatunde</p>
    </div>
  );
};

export default home;