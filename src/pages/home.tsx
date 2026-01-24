import './home.css'

function home() {

return (
<>
<div className='h-screen grid place-items-center'>
    <div className=' flex  ml-32 gap-[20vh] font-sans items-center'>
      <h1>hi, im andrew babatunde</h1>
      
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
      <div className='relative text-left mb-90 mr-80 '>
         <p>aob85593 [at] uga [dot] edu
          <br />
          <br />im currently a junior at the university of georgia studying computer science <br />
          I started coding back in highschool but I have been around computers my entire life <br />
          professional as coding is I try my best to be creative with everything to be unique <br />
          right now im learning web design and AI/ML technology as well as furthering my knowledge <br />
           of java for full-stack applications. <br />
        <br />
         

      </p>
       
      <p className='text-white underline mb-5'>currently enrolled @ <a href='https://computing.uga.edu'>UGA</a></p> 
      {/* am I fucking stupid fix the georgia image moving to the right +
      I have never wrote a comment like this before what the heck*/}    
<div>
<h1 className='mb-1'>Projects</h1>
<a href='https://github.com/andrew-babatunde2004/cs1302-api-app'>
<p className=' text-white underline mb-3 font-mono'>Internship Finder ↗ </p>
</a>
<a href='https://github.com/andrew-babatunde2004/electron-local-music-hoster'>
<p className='text-white underline font-mono'>Locally Hosted Music Player ↗</p>
</a>
<br />
</div>
<h1> Contributions </h1>
<p className='text-white underline'>DevDogs ↗</p>
<br />
<h1>LeaderShip</h1>
<p>Suwanne Youth Leaders ↗</p>
<p>ColorStack ↗</p>
<p>ACM ↗</p>
<p>DevDogs ↗</p>
      </div>
      <footer>
        <p className='text-white mt-auto min-h-screen bottom-20'>© 2025 Andrew Babatunde</p>
      </footer>
      </div>
      </>
  );
};

export default home;