import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar";
import { Box } from "@mui/material";


const Layout = () => {
    return(
        <div style={{minHeight:'100vh'}}>
            <Navbar />
            <Box sx={{mx: "auto", pt:"8rem",pb:"3rem", px:{xs:"1rem", sm:"2rem"}, maxWidth:{md:"1000px", xl:"1200px"}}}>
                <Outlet />
            </Box>
        </div>
    )
}

export default Layout;