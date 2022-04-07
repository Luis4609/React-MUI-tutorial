import { Container } from "@mui/material";
import SideDrawer from "./SideDrawer";

//Get the children that Layout has in App.js
function Layout({ children }) {
  return (
    <div>
      <SideDrawer></SideDrawer>

      <Container sx={{ marginTop: "100px", marginLeft: "240px"}}> {children}</Container>
    </div>
  );
}

export default Layout;
