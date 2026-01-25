import './music.css'
import osama from '/psykotic.png'
import pink from '/pink.png'
import ken from '/ken.png'
import charm from '/charm.png'
import sound1 from '/romeo.mp3'
import sound2 from '/function.mp3'
function music() {

    let audio = new Audio();
    const playSound = (soundFile: string | undefined) => {
        audio = new Audio(soundFile)
        if(!audio.paused){
            audio.pause();
        }
        audio.volume = 0.05;
        audio.play();
    };

    return(
    <>
    <div>
        <div className='nav'>
            <h1 className='relative flex text-white '>my music</h1>
            <a href='./' >
            <p className='relative underline right-[50vh] bottom-[3vh] text-white'> home </p>
            </a>
            <p className='relative top-[3vh] text-left'>music has been a such a influential part of my life <br />
            im pretty much always listening to music if your reading this im probably listening to music right now</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto ml-25 mt-10'>     
                <img onClick={() => playSound(sound1)} src={pink} alt='pink' />
             
                <img onClick={() => playSound(sound2)} src={osama} alt='osama' />

                <img onClick={() => playSound(sound2)} src={charm} alt='charm' />

                <img onClick={() => playSound(sound2)} src={ken} alt='ken' />
            </div>
            
            
         
        </div>
        </>
        
    )

}

export default music