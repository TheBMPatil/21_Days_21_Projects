import { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Chasing',
    songArtist: 'NEFFEX',
    songSrc: './src/Assets/songs/Chasing - NEFFEX.mp3',
    songAvatar: './src/Assets/Images/image1.jpg',
  });

  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0);

  const currentAudio = useRef();

  const avatarClass = ['objectFitCover', 'objectFitContain', 'none'];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);

  const musicAPI = [
    { songName: 'Chasing', songArtist: 'NEFFEX', songSrc: './src/Assets/songs/Chasing - NEFFEX.mp3', songAvatar: './src/Assets/Images/image1.jpg' },
    { songName: 'AURORA - Runaway', songArtist: 'Aurora Aksnes', songSrc: './src/Assets/songs/AURORA - Runaway (Lyrics).mp3', songAvatar: './src/Assets/Images/image4.jpg' },
    { songName: 'Catch Me If I Fall', songArtist: 'TEGNENT', songSrc: './src/Assets/songs/Catch Me If I Fall - NEFFEX.mp3', songAvatar: './src/Assets/Images/image2.jpg' },
    { songName: 'Inspired (Clean)', songArtist: 'NEFFEX', songSrc: './src/Assets/songs/Inspired (Clean) - NEFFEX.mp3', songAvatar: './src/Assets/Images/image3.jpg' },
    { songName: 'Baby doll [ slowed + reverb ]', songArtist: 'Kanika Kapoor', songSrc: './src/Assets/songs/Baby doll [ slowed + reverb ] __ meet bros ,Kanika Kapoor __ jr santu.mp3', songAvatar: './src/Assets/Images/image5.jpg' },
    { songName: 'Soch (Slowed+Reverbed)', songArtist: 'Hardy Sandhu', songSrc: './src/Assets/songs/SOCH(Slowed+Reverbed) __ Hardy Sandhu.webm', songAvatar: './src/Assets/Images/image6.jpg' },
    { songName: 'Apna Bana Le', songArtist: 'Arijit Singh', songSrc: './src/Assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm', songAvatar: './src/Assets/Images/image7.jpg' },
  ];
  const vidArray = [
    './src/Assets/Videos/video1.mp4',
    './src/Assets/Videos/video2.mp4',
    './src/Assets/Videos/video3.mp4',
    './src/Assets/Videos/video4.mp4',
    './src/Assets/Videos/video5.mp4',
    './src/Assets/Videos/video6.mp4',
    './src/Assets/Videos/video7.mp4',
    './src/Assets/Videos/video8.mp4',
    './src/Assets/Videos/video9.mp4',
    './src/Assets/Videos/video10.mp4',
    './src/Assets/Videos/video11.mp4',
    './src/Assets/Videos/video12.mp4',
    './src/Assets/Videos/video13.mp4',
    './src/Assets/Videos/video14.mp4',
    './src/Assets/Videos/video15.mp4',
    './src/Assets/Videos/video16.mp4'
  ];



  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = (e.target.value * currentAudio.current.duration) / 100;
  };

  const handleAvatar = () => {
    setAvatarClassIndex((prevIndex) => (prevIndex >= avatarClass.length - 1 ? 0 : prevIndex + 1));
  };

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const handleNextSong = () => {
    const nextIndex = musicIndex >= musicAPI.length - 1 ? 0 : musicIndex + 1;
    setMusicIndex(nextIndex);
    updateCurrentMusicDetails(nextIndex);
  };

  const handlePrevSong = () => {
    const prevIndex = musicIndex === 0 ? musicAPI.length - 1 : musicIndex - 1;
    setMusicIndex(prevIndex);
    updateCurrentMusicDetails(prevIndex);
  };

  const updateCurrentMusicDetails = (index) => {
    const musicObject = musicAPI[index];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails(musicObject);
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    const duration = currentAudio.current.duration;
    const currentTime = currentAudio.current.currentTime;

    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    setMusicTotalLength(`${totalMinutes.toString().padStart(2, '0')} : ${totalSeconds.toString().padStart(2, '0')}`);

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    setMusicCurrentTime(`${currentMinutes.toString().padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`);

    setAudioProgress((currentTime / duration) * 100 || 0);
  };

  const handleChangeBackground = () => {
    setVideoIndex((prevIndex) => (prevIndex >= vidArray.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="container">
        <audio ref={currentAudio} src="./src/Assets/songs/Chasing - NEFFEX.mp3" onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
        <video src={vidArray[videoIndex]} loop muted autoPlay className="backgroundVideo"></video>
        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className="musicPlayer">Music Player</p>
          <p className="music-Head-Name">{currentMusicDetails.songName}</p>
          <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
          <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id="songAvatar" />
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicTotalLenght">{musicTotalLength}</p>
          </div>
          <input type="range" name="musicProgressBar" className="musicProgressBar" value={audioProgress} onChange={handleMusicProgressBar} />
          <div className="musicControlers">
            <i className="fa-solid fa-backward musicControler" onClick={handlePrevSong}></i>
            <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
            <i className="fa-solid fa-forward musicControler" onClick={handleNextSong}></i>
          </div>
        </div>
        <div className="changeBackBtn" onClick={handleChangeBackground}>
          Change Background
        </div>
      </div>
    </>
  );
};

export default App;
