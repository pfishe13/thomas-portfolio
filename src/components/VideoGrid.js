import React from 'react';
import vid from '../videos/keem.mp4';
import VideoCard from './VideoCard';

export default function VideoGrid() {
  return (
    <section id="work" className="h-screen">
      <div className="grid grid-cols-4">
        <VideoCard vidSource={vid} />
        <VideoCard vidSource={vid} />
        <VideoCard vidSource={vid} />
        <VideoCard vidSource={vid} />
        {/* <VideoCard vidSource={vid} />
        <VideoCard vidSource={vid} />
        <VideoCard vidSource={vid} />
        <VideoCard vidSource={vid} /> */}
      </div>
    </section>
  );
}
