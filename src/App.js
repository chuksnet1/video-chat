import './App.css';
import { Typography, AppBar } from "@mui/material";

import VideoPlayer from "./component/VideoPlayer";
import Options from "./component/Options"
import Notification from './component/Notifications';




function App() {
  return (
    <div className="App">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center' color="black">Video Chat</Typography>
        
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
      
      {/* Video player */}
      {/* Notification options */}
    </div>
  );
}

export default App;
