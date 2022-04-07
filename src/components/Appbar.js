import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { format } from "date-fns";


function Appbar() {
  return (
    <>
      <AppBar sx={{ width: `calc(100% - 240px)` }} elevation={0}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is: {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Log</Typography>
        </Toolbar>
      </AppBar>

      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: `240px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Testero
          </Typography>
        </Toolbar>
      </AppBar> */}
    </>
  );
}

export default Appbar;
