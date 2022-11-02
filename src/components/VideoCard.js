import React from 'react';

export default function VideoCard({ vidSource }) {
  return (
    <video loop muted>
      <source src={vidSource} type="video/mp4" />
    </video>
  );
}
