
import './Components/style.css';
import CreateAccountPage from './Components/CreateAccountPage/CreateAccountPage';
import Intro1 from './Components/Intro1/Intro1';
import LoginPage from './Components/LoginPage/LoginPage';
import Intro2 from './Components/Intro2/Intro2';
import Intro3 from './Components/Intro3/Intro3';
import Intro13 from './Components/Intro1-3/Intro13';
import Intro16 from './Components/Intro1-6/Intro16';
import IntroPage2 from './Components/IntroPage2/IntroPage2';


function App() {
  return (
    <div>
      <Intro1 />
      <CreateAccountPage />
      <LoginPage />
      <Intro2 />
      <Intro3 />
      <Intro13 />
      <Intro16 />
      <IntroPage2 />
    </div>
  );
}

export default App;
