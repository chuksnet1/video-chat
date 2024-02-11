import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { SocketContext } from "../SocketContext";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="grid-container">
      {/* my video here */}
      <Grid container style={{display: "grid", gridTemplateColumns:"1fr 1fr", gap: "20px", padding: "30px"}}>
        {stream && (
          <Paper >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{name || "Name"}</Typography>
              <video playsInline ref={myVideo} muted autoPlay className="my-video" ></video>
            </Grid>
          </Paper>
        )}

        {/* users video here */}
        {callAccepted && !callEnded && (
          <Paper >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || "Name"}</Typography>
            <video playsInline ref={userVideo} muted autoPlay className="my-video" ></video>
          </Grid>
        </Paper>
          )}
      </Grid>
    </div>
  );
};

export default VideoPlayer;
