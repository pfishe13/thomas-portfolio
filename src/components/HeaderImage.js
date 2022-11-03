import React, { useState, useEffect } from 'react';
import thomasImage from '../images/thomas-copy.jpg';
import Typist from 'react-typist';
import {
  Animator,
  MoveOut,
  ZoomIn,
  Zoom,
  ZoomOut,
  Fade,
  FadeOut,
  Move,
  batch,
} from 'react-scroll-motion';

// const HeaderAnimation = batch(StickyIn(), FadeIn(), ZoomIn());

const HeaderImage = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('Count: ' + count);
    setCount(1);
  }, [count]);

  return (
    <section className="w-full h-screen">
      <img
        src={thomasImage}
        className="object-cover w-full h-full"
        alt="Thomas background"
      ></img>
      <div className="absolute grid place-items-center top-0 w-full h-screen z-20 bg-white">
        <Animator animation={batch(MoveOut(0, -700), FadeOut(1, 0))}>
          <div className="text-5xl font-body text-primary-50 text-opacity-90">
            {count ? (
              <Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
                <span> Tommy Eitniear</span>
                <Typist.Backspace count={20} delay={1000} />
                <span> highlight.tommy</span>
                <Typist.Backspace count={20} delay={1000} />
              </Typist>
            ) : (
              ''
            )}
          </div>
        </Animator>
      </div>
    </section>
  );
};

export default HeaderImage;
