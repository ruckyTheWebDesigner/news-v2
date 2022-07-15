import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar(props) {
  // const [search, setSearch] = React.useState("");

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: "block" } }}>
              <a href='/'>MUI News</a>
            </Typography>
            {props.search}
            <div className='switch-button'>{props.button}</div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
