import './home.css'
import georgia from '/Georgia.svg';

function home() {

  return (
<>
    <div className='relative flex left-[14vh] gap-[20vh] font-sans items-center  '>
      <h1>Andrew Babatunde</h1>
      <a href='./music' >
        <p className=' text-white text-2xl font-bold underline'>music</p>
      </a>
      <a href='https://www.linkedin.com/in/andrewbabatunde/'>
      <p className=' text-white text-2xl font-bold underline'>linkedin</p>
      </a>
      <a href='https://github.com/andrew-babatunde2004'>
      <p className=' text-white text-2xl font-bold underline'>github</p>
      </a>
      </div>
      <div className='relative text-left left-[6.8vw]'>
         <p>aob85593 [at] uga [dot] edu
          <br />
          <br />im currently a Computer Science Student at The University of Georgia <br />
        Im interested in AI/ML technology aswell as building full-stack interactive applications<br />
        <br />
         

      </p>
      
      <p className='underline'>currently enrolled @</p>
      <a href='https://computing.uga.edu'>
      <img className='absolute top-[10vh] right-[82vw] transform scale-50'src={georgia} />
</a>
      </div>
    </>
  );
};

export default home;