import './home.css'
import georgia from '/Georgia.svg';




function home() {

  return (
<>
    <div className='name'>
      <h1>Andrew Babatunde</h1>
      <a href='./music' >
        <p className=' text-white text-2xl font-bold underline'>music</p>
      </a>
      <a href='https://www.linkedin.com/in/andrewbabatunde/'>
      <p className='title-links'>linkedin</p>
      </a>
      <a href='https://github.com/andrew-babatunde2004'>
      <p className='title-links'>github</p>
      </a>
      </div>
      <div className='subtitle'>
         <p>aob85593 [at] uga [dot] edu
          <br />
          <br />im currently a Computer Science Student at The University of Georgia <br />
        Im interested in AI/ML technology aswell as building full-stack interactive applications<br />
        <br />
         

      </p>
      
      <p className='subtitle-enrolled'>currently enrolled @</p>
      <a href='https://computing.uga.edu'>
      <img className='absolute mr-32 transform scale-50'src={georgia} />
</a>
      </div>
    </>
  );
};

export default home;