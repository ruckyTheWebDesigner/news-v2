import { Box } from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <Box className='sidebar'>
      <h4>Market Analytics</h4>
      <iframe
        name='CalendarWidget'
        src='https://darqube.com/external-embedding/4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ3aWRnZXQiOnsiZXZlbnRzX2xpc3QiOlsiZm9yZXgiLCJjcnlwdG8iLCJzdG9ja3MiXX0sIndfdHlwZSI6IkNhbGVuZGFyV2lkZ2V0IiwiZmVfY2ZnIjp7ImNtb2RlIjowLCJmY2xyIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAxKSIsImJnIjoicmdiYSgyMSwgMjUsIDMwLCAxKSIsImgiOjc2NSwidyI6MzMwLCJhc3oiOnRydWUsImhkaWNuIjpmYWxzZSwid3RtIjpmYWxzZX0sImV4cCI6MTY2NTMxNzcxMCwic3ViIjoiYWNjZXNzIn0.He1YSlLb2Zt36_pZ2_vX3TvUToRmyyjRCQFXDpxciuA'
        id='CalendarWidget'
        title='Calendar'
        width='300'
        height='3500'></iframe>
    </Box>
  );
}

export default Sidebar;
