import { useState } from 'react'
import './home.css'
import georgia from '/Georgia.svg';




function home() {
  const [count, setCount] = useState(0)

  return (
<>
    <div className='name'>
      <h1>Andrew Babatunde</h1>
      <a href='./music' >
        <p className='title-links'>music</p>
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
      <img className='georgia' src={georgia} alt="georgia" />
</a>
      </div>
    </>
  );
};

export default home;