import Top from './components/Top';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Video from './components/Video';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        {/* <Route path="/videos" element={<Video />} /> */}  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
