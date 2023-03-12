// import { useState } from 'react';
// import { GrSun, GrMoon} from "react-icons/gr";
import './App.css';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Layout/Main/Main';
import Menu from './Components/Layout/Menu/Menu';

function App() {
  // const [theme, setTheme] = useState<string>('dark');
  // const changeTheme = () => {
  //   if (theme === 'light'){
  //     setTheme('dark');
  //   }
  //   else{
  //     setTheme('light')
  //   }
  // }
  return (
    // <div className={`App ${theme}`}></div>
    <div className="App">
      {/* <button onClick={changeTheme}>{(theme === 'dark')? <GrSun/>:<GrMoon/>}</button> */}
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
