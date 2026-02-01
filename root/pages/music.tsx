import './music.css'
import osama from '/psykotic.png'
import pink from '/pink.png'
import ken from '/ken.png'
import charm from '/charm.png'
import sound1 from '/romeo.mp3'
import sound2 from '/function.mp3'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Music() {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // 
    const [playingSrc, setPlayingSrc] = useState<string | null>(null);

    const playSound = (soundFile: string) => {
        // If clicking the currently playing song
        if (playingSrc === soundFile) {
            if (audioRef.current) {
                if (!audioRef.current.paused) {
                    audioRef.current.pause();
                    setPlayingSrc(null); // Update state to show not playing
                } else {
                    audioRef.current.play().catch(e => console.error("Error playing audio:", e));
                    setPlayingSrc(soundFile);
                }
            }
        } else {
            // New song or first song
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Optional: reset previous
            }

            const newAudio = new Audio(soundFile);
            newAudio.volume = 0.05;
            newAudio.onended = () => setPlayingSrc(null); // Reset state when song ends

            newAudio.play().catch(e => console.error("Error playing audio:", e));

            audioRef.current = newAudio;
            setPlayingSrc(soundFile);
        }
    };

    return (
      <>
          {/* css for the entire container */}
          <div className="min-h-screen p-8 max-w-6xl mx-auto">
                <div className='mb-12'>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h1 className='text-white text-4xl font-bold mb-4 md:mb-0'>my listening history</h1>
                        <Link to='/' className="home-link text-white underline text-xl hover:text-gray-300 transition-colors">
                            <p className='text-white underline hover:text-red-600 transition-colors '>home</p>
                        </Link>
                    </div>

                    <p className='text-left text-gray-300 max-w-2xl leading-relaxed'>
              please interact with the album covers < br />
              to get an idea of the music I listen to!
                        
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => playSound(sound1)}>
                        <img src={pink} alt='pink' className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => playSound(sound2)}>
                        <img src={osama} alt='osama' className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => playSound(sound2)}>
                        <img src={charm} alt='charm' className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => playSound(sound2)}>
                        <img src={ken} alt='ken' className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
          </div>
          <p className="home-footer text-gray-500 mt-20 text-sm">
            © 2025 Andrew Babatunde
          </p>

            </div>
        </>

    )

}

export default Music