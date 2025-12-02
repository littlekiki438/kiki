import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { AiFillSmile } from 'react-icons/ai'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { GiButterfly, GiJumpAcross, GiLifeSupport } from 'react-icons/gi';
import { FaArrowDown, FaClock, FaPlay } from 'react-icons/fa';
import { BiSolidMehBlank } from 'react-icons/bi';
import { ImSad2 } from 'react-icons/im';
import { IoSparklesSharp } from 'react-icons/io5';
import { BsBalloonHeartFill, BsEmojiSmileUpsideDownFill, BsFillCake2Fill, BsMoonStarsFill } from 'react-icons/bs';
import { FaFaceLaugh } from 'react-icons/fa6';
import { RiBrushAiFill, RiLeafFill } from 'react-icons/ri';
import { MdLightMode } from 'react-icons/md';
import { TbGhostFilled } from 'react-icons/tb';
import musicFile from "./assets/The First Time AETrim1764660686741.mp3";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
    const timelineRef = useRef(null);
    const scrollRef = useRef(null);
    const btnRef = useRef(null);
    const musicRef = useRef(null);
    const [start, setStart] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playBtn, setplayBtn] = useState(false);


    useGSAP(()=> {
        gsap.fromTo('.para', {
            opacity: 0,
            y:50,
        }, {
            opacity: 1,
            y:0,
            duration: 0.6,
            stagger: 0.2,
        })
    }, [])
    //*Chat boxes from left
    useGSAP(()=> {
        const boxes = gsap.utils.toArray(scrollRef.current.children);
        boxes.forEach((box)=> {
            gsap.to(box, {
                x:0,
                y:0,
                opacity: 1,
                duration: 1,
                scale: 1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: box,
                    start: "bottom bottom",
                    end: "top 40%",
                }
            })
        })
    }, {scope: scrollRef})
    //* BTn

    useGSAP(()=> {
        const timeline = gsap.timeline({
        repeat:-1, yoyo:true, repeatDelay: 0.01
    })
    timelineRef.current = timeline;
        timeline.from('#readyBtn',{
            x:-250,
            y:0,
            borderRadius: "50%",
            opacity: 0,
        })
        timeline.to('#readyBtn', {
            x:-250,
            opacity: 1,
            rotate: 360,
            y:250,
        })
        timeline.to('#readyBtn', {
            x:250,
            borderRadius: "8px",
            rotate: 360,
            y:0,
            opacity:1
        })
        timeline.to('#readyBtn', {
            x:0,
            borderRadius: "100%",
            rotate: 360,
            y:250
        })
        timeline.to('#readyBtn', {
            x:0,
            borderRadius: "8px",
            rotate: 360,
            y:0,
            opacity: 0
        })
    }, [])
    const handlePlayBtn =()=> {
        timelineRef.current?.pause();
        gsap.to('#readyBtn', {
            delay: 1,
            x:0,
            y:0,
            opacity: 1,
            onComplete: ()=> {
                btnRef.current.innerText = "Good job!"
                document.body.classList.add("overflow-y-auto!");
                setStart(true);
                musicRef.current.play()
                setIsPlaying(true);
                setplayBtn(true)
            }
        })
    }
    useEffect(() => {
      musicRef.current.volume = 0.3;
    }, [])
    const handlePause = () => {
    const audio = musicRef.current;
    if (!audio) return;
    if (audio.paused) {
        audio.play().then(()=> {
            setIsPlaying(true)
        })
    } else {
        audio.pause();
        setIsPlaying(false)
    }
};

  return (
    <div className=' min-h-[400vh]  text-white py-10 px-4 space-y-[700px] overflow-x-hidden z-20'>
        <button onClick={handlePause} id='playbtn' className={`${playBtn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300 fixed bottom-5 right-10 p-4 my-3 rounded-full bg-linear-to-br from-rose-500 to-pink-400`}>
            {isPlaying ? "Pause" : "Play"}
        </button>
        <audio ref={musicRef} src={musicFile} preload='auto' loop></audio>
        <h1 id='header' className='text-center flex flex-col justify-center header mb-0'>
            <span className='para'>Hey little Hazelnut</span>
            <span className='para'>Got you a little thing, i hope that you like it </span>
            <AiFillSmile className='mx-auto text-amber-400 para animate-bounce mt-3'/>
        </h1>
        <div className='mt-10 text-center flex flex-col justify-center items-center'>
            <span >Are you Ready???</span>
            <button
            onClick={handlePlayBtn} ref={btnRef}
            id='readyBtn' type="button" className='p-4 my-3 rounded-full bg-linear-to-br from-rose-500 to-pink-400'><FaPlay className='text-xl'/></button>
            <span className={`${start ? 'opacity-100' : 'opacity-0'}`}>Now Scroll Smothly to the bottom </span>
            <FaArrowDown className='mt-2 animate-bounce'/>
        </div>
        <div ref={scrollRef} className='space-y-[700px] flex flex-col'>
            <p className='opacity-0 scale-0 self-center -translate-y-14'>It all started 10 years ago!</p>
            <p className='opacity-0 scale-0 -translate-x-96'>I didn't see a girl, I saw an angel <GiButterfly className='text-purple-500'/> </p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>Time was everything to me. <FaClock className='text-blue-500'/></p>
            <p className='opacity-0 scale-0 -translate-x-96'>Day after day I waited, <br /> couldn't stop thinking about you. <BiSolidMehBlank className='text-amber-400'/></p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>It was sad .<ImSad2 className='text-amber-400'/></p>
            <p className='opacity-0 scale-0 -translate-x-96'>Having you became my dream. <IoSparklesSharp className='text-yellow-300' /></p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>It was enjoyable for me to watch you, even from a distance. <BsEmojiSmileUpsideDownFill className='text-amber-400' /></p>
            <p className='opacity-0 scale-0 -translate-x-96'>Like the moon among millions of stars <BsMoonStarsFill className='text-yellow-100' /></p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>You were the most beautiful. <FaFaceLaugh className='text-amber-400'/></p>
            <p className='opacity-0 scale-0 self-center -translate-y-14 animate-pulse'>Time Passed...</p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>And one day my dream came true.</p>
            <p className='opacity-0 scale-0 -translate-x-96'>It was like I, who was already dead, came back to life. <GiLifeSupport className='text-red-500' /></p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>You added color to my life. <RiBrushAiFill className='text-amber-700' /></p>
            <p className='opacity-0 scale-0 -translate-x-96'>You have become the light of my life. <MdLightMode className='text-yellow-300' /></p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>You have become my new hope for life. <RiLeafFill className='text-green-500' /></p>
            <p className='opacity-0 scale-0 -translate-x-96'>Your soul entered my body. <TbGhostFilled className='text-gray-400'/></p>
            <p className='opacity-0 scale-0 self-end translate-x-96'>You stayed by my side through the problems. <GiJumpAcross className='text-emerald-400' /></p>
            <p className='p-4 border-2 border-rose-500 rounded-2xl opacity-0 scale-0 self-center -translate-y-14'>I just wanted to say that I love you very much. <BsBalloonHeartFill className='text-rose-500'/></p>
        </div>
        <div className='my-5 flex justify-center flex-col items-center'>
            <p>I just Wanted to you know that i'm really proud of ya, keep going "Kooshouloo" <br /> and never give up!</p>
            <h1 className='text-center mb-10 flex flex-col gap-2 items-center justify-center'>Happy birthday my little hazelnut <BsFillCake2Fill className='text-yellow-100'/></h1>
        </div>
        <small>From someone who loves you very much.(Zoozoo)</small>
            <div className="starfall overflow-x-hidden">
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
</div>
    </div>
  )
}

export default App
