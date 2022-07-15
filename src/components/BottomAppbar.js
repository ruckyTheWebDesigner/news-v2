import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

function BottomAppbar(props) {
  return (
    <Stack
      direction='row'
      className='bottom-appbar my-5 py-4'
      divider={<Divider orientation='vertical' flexItem />}
      spacing={3}>
      {props.select1}
      {props.select2}
      {props.select3}
      {props.select4}
      {props.select5}
    </Stack>
  );
}

export default BottomAppbar;
