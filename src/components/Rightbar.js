import { Box } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box className='rightbar'>
      <h4>Latest News</h4>
      <iframe
        name='NewsWidget'
        src='https://darqube.com/external-embedding/1?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ3aWRnZXQiOnsibmV3cyI6WyJDTkJDIiwiRGFpbHlmeCIsIkNOTiIsIlJldXRlcnMiLCJDcnlwdG9HbG9iZSJdLCJ0d191aWRzIjpbIjY5NjIwNzEzIiwiOTI4NzU5MjI0NTk5MDQwMDAxIiwiNjI0NDEzIiwiMTUxMTAzNTciLCIyMDI0Mzc0NCJdfSwid190eXBlIjoiTmV3c1dpZGdldCIsImZlX2NmZyI6eyJjbW9kZSI6MCwiZmNsciI6InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLCJiZyI6InJnYmEoMjEsIDI1LCAzMCwgMSkiLCJoIjo3NjUsInciOjMzMCwiYXN6Ijp0cnVlLCJoZGljbiI6ZmFsc2UsInd0bSI6ZmFsc2V9LCJleHAiOjE2NjUzMTc0MjcsInN1YiI6ImFjY2VzcyJ9.2pR6ecm1dR6PeKbeTloByTRXxYQBX--lcnQa7tziPLc'
        id='NewsWidget'
        title='NewsWidget'
        width='300 '
        height='3500'></iframe>
    </Box>
  );
}

export default Rightbar;
