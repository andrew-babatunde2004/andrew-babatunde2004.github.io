import './home.css'

function home() {

return (
<div className='home-container min-h-screen grid place-items-center py-20'>
    <div className='home-header relative left-6 flex gap-24 font-sans items-center mb-20'>
      <h1 className='home-title font-bold text-left '>hi, im andrew babatunde!</h1>
      
      {/* <a href='./music' >
        <p className=' text-white text-2xl font-bold underline'>music</p>
      </a>
      */}

      <a href='https://www.linkedin.com/in/andrewbabatunde/'>
      <p className='home-link text-white text-2xl font-bold underline'>linkedin</p>
      </a>
      <a href='https://github.com/andrew-babatunde2004'>
      <p className='home-link text-white text-2xl font-bold underline'>github</p>
      </a>
      </div>

      <div className='home-content text-left mr-90 mb-20'>
         <p>aob85593 [at] uga [dot] edu
          <br />
          <br />im currently a junior at the university of georgia studying computer science <br />
          I started coding back in highschool but I have been around computers my entire life <br />
          professional as coding is I try my best to be creative with everything to be unique <br />
          right now im learning web design and AI/ML technology as well as furthering my knowledge <br />
           of java for full-stack applications. <br />
        <br />
         

      </p>
       
      <p className='text-white  mb-5'>currently enrolled at <a href='https://computing.uga.edu'><span className='text-red-600'>the university of georgia</span></a></p> 
      {/* am I fucking stupid fix the georgia image moving to the right +
      I have never wrote a comment like this before what the heck*/}    
<div className='flex-col'>
<h1 className='mb-5'>projects</h1>
<a href='https://github.com/andrew-babatunde2004/cs1302-api-app'>
<p className=' text-white  mb-3 '>Internship Finder ↗ </p>
</a>
<a href='https://github.com/andrew-babatunde2004/electron-local-music-hoster'>
<p className='text-white'>Locally Hosted Music Player ↗</p>
</a>
<br />
</div>
<div>
<h1 className='mb-5'> contributions </h1>
<a href='https://github.com/DevDogs-UGA'>
<p className='text-white'>DevDogs ↗</p>
</a>
</div>
<br />
<h1 className='mb-5'>leadership</h1>

<a href='https://www.suwanee.com/engage/suwanee-youth-leaders'>
<p className='text-white'>Suwanne Youth Leaders ↗</p>
</a>

<a href='https://www.colorstack.org'>
<p className='text-white'>ColorStack ↗</p>
</a>
<a href='https://acm-uga.github.io'>
<p className='text-white'>ACM ↗</p>
</a>
<a href='https://github.com/DevDogs-UGA'>
<p className='text-white'>DevDogs ↗</p>
</a>

   </div>
        <p className='home-footer text-gray-500 mb-20'>© 2025 Andrew Babatunde</p>
</div>
  );
};

export default home;