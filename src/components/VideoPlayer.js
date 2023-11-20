import {useRef, useEffect} from 'react';
import video3D from '../Assets/travel1.mp4'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './VideoPlayer.css';

const VideoPlayer = () => {

    const videoRef = useRef(null);
    const containerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const video = videoRef.current;

    let ctx = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: "top top",
                end: 'bottom+=200% bottom',
                scrub: 2,
                markers: true
            }
        });

        video.onloadedmetadata = function () {
            tl.to(video, { currenTime: video.duration});
        };

        function isTouchDevice() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
        if(isTouchDevice()) {
            console.log('rodou FN');

            video.play();
            video.pause();
        }
    }, containerRef );

        return() => ctx.revert();
    }, []);


    return(
        <div ref={containerRef}>
            <video
                ref={videoRef}
                className='video'
                style={{ WebkitPlaysInline: true, playsInline: true }}
                preload='auto'
                muted
            >
                <source src={video3D} type='video/mp4' />
            </video>
        </div>
    );
};

export default VideoPlayer