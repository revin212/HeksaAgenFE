import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar";
import { Box } from "@mui/material";


const Layout = () => {
    return(
        <div style={{minHeight:'100vh'}}>
            <Navbar />
            <Box sx={{mx: {xs:'1rem', md:"auto"}, py:"3rem", maxWidth:{md:"1000px", xl:"1200px"}}}>
                <Outlet />
            </Box>
        </div>
    )
}

export default Layout;