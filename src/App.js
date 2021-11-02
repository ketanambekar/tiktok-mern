import './App.css';
import Video from './components/videos/Video';
import axios from './services/Axios';
import React, { useEffect, useState } from 'react'
function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('v2/videos')
      setVideos(req.data)
    }
    fetchData();
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            key={video._id}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            share={video.share ? video.share: 0}
            messages={video.messages}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
