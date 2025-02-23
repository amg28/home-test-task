import { AppBar, Toolbar, Button } from "@mui/material";
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
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};

export default Layout;
