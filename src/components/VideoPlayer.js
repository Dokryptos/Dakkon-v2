import video3D from '../Assets/travel_1.mp4'
import  "./VideoPlayer.css";

const VideoPlayer = () => {



    return (
        <div >
            <video className="video"  controls>
                <source src={video3D} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayer