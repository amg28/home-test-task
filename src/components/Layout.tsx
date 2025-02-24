import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Config
          </Button>
          <Button color="inherit" component={Link} to="/result">
            Result
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: "20px" }}>{children}</Box>
    </div>
  );
};

export default Layout;
