import './home.css'
import georgia from '/Georgia.svg';


function home() {


  return (
<>
    <div className='relative flex left-[10vh] gap-[20vh] font-sans items-center'>
      <h1>Andrew Babatunde</h1>
      
      {/* <a href='./music' >
        <p className=' text-white text-2xl font-bold underline'>music</p>
      </a>
      */}

      <a href='https://www.linkedin.com/in/andrewbabatunde/'>
      <p className=' text-white text-2xl font-bold underline'>linkedin</p>
      </a>
      <a href='https://github.com/andrew-babatunde2004'>
      <p className=' text-white text-2xl font-bold underline'>github</p>
      </a>
      </div>
      <div className='relative text-left ml-28'>
         <p>aob85593 [at] uga [dot] edu
          <br />
          <br />im currently a junior computer Science Student at The University of Georgia <br />
          I Started coding back in highschool but I have been around computers my entire life <br />
          As professional as coding is I try my best to be creative with everything to be unique <br />
          Right now im learning Web Design and furthering my Java Proficiency for full-stack application <br />
          im interested in AI/ML technology aswell <br />
        <br />
         

      </p>
      
      <p className='underline'>currently enrolled @</p>
      
      {/* am I fucking stupid fix the georgia image moving to the right +
      I have never wrote a comment like this before what the heck*/}
      <a href='https://computing.uga.edu'>
      <img className='flex relative mr-20 transform scale-50'src={georgia} />
</a>
<div>
<h1 className='mb-1'>Projects</h1>
<a href='https://github.com/andrew-babatunde2004/cs1302-api-app'>
<p className=' text-white underline mb-3 font-mono'>Internship Finder </p>
</a>
<a href='https://github.com/andrew-babatunde2004/electron-local-music-hoster'>
<p className='text-white underline font-mono'>Locally Hosted Music Player</p>
</a>
<br />
</div>
<h1> Contributions </h1>
<p className='text-white underline'>DevDogs</p>
<br />
<h1>LeaderShip</h1>
<p>Suwanne Youth Leaders</p>
<p>ColorStack</p>
<p>ACM</p>
<p>DevDogs</p>
      </div>
      </>
  );
};

export default home;