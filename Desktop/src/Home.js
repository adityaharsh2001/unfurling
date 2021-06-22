import { useEffect, useState } from "react";

import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";
import AppHeader from "./components/AppHeader/AppHeader";
import Options from "./components/options/Options";
import Footer from "./components/Footer/Footer";

const Home = () => {
  const [theme, setTheme] = useState(false);
  const [filter,setFilter]= useState('none');

  const themeHandler = (checked) => {
    setTheme(checked);
    // console.log(`switch to ${checked}`);
  };
  const filterHandler=(e)=>{
    setFilter(e.item.props.value);


  }

  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
  return (
    <VideoState>
      <div className="App" style={{ height: "100%", width: "100%" }}>
        <AppHeader themeHandler={themeHandler} themeValue={theme} filterHandler={filterHandler}/>
        <Video filter={filter} />
        <Options themeValue={theme} />
        {/* <Footer /> */}
      </div>
    </VideoState>
  );
};

export default Home;
