import {useRef, useEffect} from 'react';
import video3D from '../Assets/travel1.mp4'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './VideoPlayer.css';

const VideoPlayer = () => {

    const videoRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const video = videoRef.current;

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
    }, []);


    return(
        <video
            ref={videoRef}
            className='video'
            playsInline={true}
            webkit-playsInline='true'
            preload='auto'
            muted
        >
            <source src={video3D} type='video/mp4' />
        </video>
    );
};

export default VideoPlayer