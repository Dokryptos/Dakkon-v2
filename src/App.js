import  VideoContainer  from "./Page/Video_Container"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={ <VideoContainer />} />
      </Routes>
    </div>
  );
}

export default App;
