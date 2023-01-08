import './App.css';
import Header from './Header';
import Bedroom from './templates/Bedroom';
import Filler from './templates/Filler';
import LandingArea from './templates/LandingArea';
import SecondArea from './templates/SecondArea';

function App() {
  //const queryParams = new URLSearchParams(window.location.search);

  // const title = queryParams.get('title');
  // console.log(title);
  
  return (
    <>
    <Header/>
    <div style={{backgroundImage: require("./public/background.png")}}>
      <LandingArea/>
      <Filler/>
      <SecondArea/>
      <Filler/>
      <Bedroom/>
    </div>
    </>
  );
}

export default App;
