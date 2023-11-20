// import  VideoContainer  from "./Page/Video_Container"
import VideoPlayer from "./components/VideoPlayer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={ <VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
