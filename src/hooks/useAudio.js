import { useEffect, useRef, useState } from "react";

const useAudio = (url) => {

  const audioRef = useRef(new Audio(url));
  // originally used state for audio.  This worked, but not totally correct.
  // If don't need setters, you should not use a state variable.
  
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    const audio = audioRef.current;
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;
