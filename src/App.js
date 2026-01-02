import { useRef, useEffect } from 'react';
import Navbar from "./Components/Navbar.js"; 
import Home from "./Components/Home.js"; 
import About from "./Components/About.js"; 
import People from "./Components/People.js"; 
import Gallery from "./Components/Gallery.js"; 
import Footer from "./Components/Footer.js"; 
import audioTrack from "./Audio/soundEffect.mp3";

function App() {
  const audioRef = useRef(null);
  const SESSION_KEY = 'backgroundAudioPlayed';  // Key for sessionStorage

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem(SESSION_KEY) === 'true';

    const unlockAndPlayOnce = (e) => {
      // Qualifying gestures: click, tap (touchstart), keypress
      if (audioRef.current && !hasPlayed) {
        audioRef.current.muted = false;  // Unmute
        audioRef.current.play().catch(err => {
          console.warn('Play failed even after gesture:', err);
          // Fallback: stay muted
          audioRef.current.muted = true;
        });
        sessionStorage.setItem(SESSION_KEY, 'true');  // Mark as played this session
      }

      // Clean up: Remove listeners after first success (optional, saves resources)
      document.removeEventListener('click', unlockAndPlayOnce);
      document.removeEventListener('touchstart', unlockAndPlayOnce);
      document.removeEventListener('keydown', unlockAndPlayOnce);
    };

    if (!hasPlayed) {
      // Add listeners for real gestures
      document.addEventListener('click', unlockAndPlayOnce);
      document.addEventListener('touchstart', unlockAndPlayOnce);  // Mobile taps
      document.addEventListener('keydown', unlockAndPlayOnce);     // Keyboard
    }

    return () => {
      document.removeEventListener('click', unlockAndPlayOnce);
      document.removeEventListener('touchstart', unlockAndPlayOnce);
      document.removeEventListener('keydown', unlockAndPlayOnce);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <People />
      <Gallery />
      <Footer />

      {/* Global background audio - starts muted + autoplay (always allowed) */}
      <audio
        ref={audioRef}
        src={audioTrack}  // Put file in public/ folder
        autoPlay                       // Starts muted silently
        muted                          // Initial muted state
        loop                           // Optional: loops forever
        preload="auto"                 // Loads early
      />
    </div>
  );
}

export default App;