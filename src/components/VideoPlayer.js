import {useRef, useEffect} from 'react';
import 3D_Video from './Assets/travel_1.mp4';
import { gsap } from 'gsap/gsap-core';
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
        })
    })

    return(
        <>

        </>
    )
};

export default VideoPlayer