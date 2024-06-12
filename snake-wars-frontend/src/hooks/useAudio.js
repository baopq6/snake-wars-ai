import { useEffect, useRef } from 'react';

const useAudio = (url) => {
  const audio = useRef(new Audio(url));

  useEffect(() => {
    return () => {
      audio.current.pause();
      audio.current.src = '';
    };
  }, []);

  const play = () => {
    audio.current.currentTime = 0;
    audio.current.play().catch(error => {
      console.error('Audio play failed:', error);
    });
  };

  return play;
};

export default useAudio;
