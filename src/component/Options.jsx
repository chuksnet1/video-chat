import React, { useContext , useState} from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   gridContainer: {
//     width: "100%",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   container: {
//     width: "600px",
//     margin: "35px 0",
//     padding: 0,
//     [theme.breakpoints.down("xs")]: {
//       width: "80%",
//     },
//   },
//   margin: {
//     marginTop: 20,
//   },
//   padding: {
//     padding: 20,
//   },
//   paper: {
//     padding: "10px 20px",
//     border: "2px solid black",
//   },
// }));

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container className="" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Paper elevation={10} className="" >
        <form className="" noValidate autoComplete="off">
          <Grid item xs={12} md={6} className="" >
            <Typography gutterBottom variant="h6"> Account Info</Typography>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
            {console.log(me + "this is it")}
            <CopyToClipboard text={me} className="">
              <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />} >
                Copy Your ID
              </Button>
            </CopyToClipboard>
          </Grid>
          {/* //the other user option button grid */}
          <Grid item xs={12} md={6} className="" >
            <Typography gutterBottom variant="h6">
              Make A Call
            </Typography>
            <TextField label="ID to Call" value={idToCall}   // idToCall Put  {me} here and you get the id of the person you want to call 
            onChange={(e) => setIdToCall(e.target.value)} fullWidth
            />
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall}>
                Hang Up
              </Button>
            ) : (
              <Button variant="contained"color="primary"startIcon={<Phone fontSize="large" />} fullWidth onClick={()=> callUser(idToCall)}>
                Call
              </Button>
            )}
          </Grid>
        </form>
        {children}
      </Paper>    
    </Container>
  );
};

export default Options;
