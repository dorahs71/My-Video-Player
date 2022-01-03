import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import Homepage from './components/Homepage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="trailer/:id" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}
