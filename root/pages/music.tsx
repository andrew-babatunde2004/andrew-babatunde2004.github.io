import './music.css'
import osama from '/psykotic.png'
import pink from '/pink.png'
import ken from '/ken.png'
import charm from '/charm.png'
import sound1 from '/romeo.mp3'
import sound2 from '/function.mp3'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            audioRef.current?.pause();
        };
    }, []);

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
          <div className="music-page min-h-screen px-5 py-8 sm:px-8 md:px-10">
                <div className='mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8'>
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <h1 className='text-white text-4xl font-bold md:text-5xl'>my listening history</h1>
                        <Link to='/' className="home-link text-xl text-white underline transition-colors hover:text-gray-300">
                            <span className='text-white underline transition-colors hover:text-red-600'>home</span>
                        </Link>
                    </div>

                    <p className='max-w-2xl text-left leading-relaxed text-gray-300'>
              heres just a few of the albums i've been <br />
              listening to lately!
                    </p>

                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className="music-card cursor-pointer transition-opacity hover:opacity-80" onClick={() => playSound(sound1)}>
                        <img src={pink} alt='pink' className="h-auto w-full rounded-lg shadow-lg" />
                    </div>

                    <div className="music-card cursor-pointer transition-opacity hover:opacity-80" onClick={() => playSound(sound2)}>
                        <img src={osama} alt='osama' className="h-auto w-full rounded-lg shadow-lg" />
                    </div>

                    <div className="music-card cursor-pointer transition-opacity hover:opacity-80" onClick={() => playSound(sound2)}>
                        <img src={charm} alt='charm' className="h-auto w-full rounded-lg shadow-lg" />
                    </div>

                    <div className="music-card cursor-pointer transition-opacity hover:opacity-80" onClick={() => playSound(sound2)}>
                        <img src={ken} alt='ken' className="h-auto w-full rounded-lg shadow-lg" />
                    </div>
                </div>
          <p className="home-footer pt-2 text-sm text-gray-500">
            © 2025 Andrew Babatunde
          </p>
                </div>
            </div>
        </>

    )

}

export default Music
