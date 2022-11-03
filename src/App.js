import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import HeaderImage from './components/HeaderImage';
import VideoGrid from './components/VideoGrid';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  StickyIn,
  FadeIn,
  Fade,
  FadeOut,
  ZoomIn,
  Sticky,
  MoveIn,
  Zoom,
  Move,
} from 'react-scroll-motion';

const HeaderAnimation = batch(Move(0, 100, 0, 600));
const AboutAnimation = batch(FadeIn());

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <ScrollContainer snap="proximity">
        <ScrollPage page={0}>
          <Animator animation={HeaderAnimation}>
            <HeaderImage />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={AboutAnimation}>
            <About />
          </Animator>
        </ScrollPage>
        <VideoGrid />
      </ScrollContainer>
      {/* <Projects />
      <Skills />
      <Testimonials />
      <Contact />  */}
    </main>
  );
}
