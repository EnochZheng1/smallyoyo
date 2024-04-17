import logo from './logo.svg';
import './App.css';
import BackgroundColorChanger from './BackgroundColorChanger';
import Title from './Title';
import RandomImagePop from './RandomImagePop';
import Countdown from './Countdown';
import BackgroundMusic from './BackgroundMusic';

const App = () => {
  const targetDate = new Date("April 25, 2024 23:59:59");
  const handleCountdownEnd = () => {
    console.log('Countdown finished!');
    // Additional logic for when the countdown ends
  };

  return (
    <div>
      <BackgroundColorChanger />
      <Title />
      <Countdown targetDate={targetDate} onCountdownEnd={handleCountdownEnd} />
      <RandomImagePop imageCount={65}/>
      <BackgroundMusic src="${process.env.PUBLIC_URL}/music/BackgroundMusic.mp3" autoplay={true} loop={true} />
    </div>
  );
};

export default App;


// add to div
{/* <Countdown targetDate={new Date('YYYY-MM-DD')} onCountdownEnd={handleCountdownEnd} />
<RandomImagePop images={images} />
<BackgroundMusic src="/path/to/music.mp3" /> */}