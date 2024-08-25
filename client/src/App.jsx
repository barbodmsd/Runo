import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import { Box, createTheme, ThemeProvider } from "@mui/material";


const theme=createTheme({
  palette: {
    mainBg:'#0b1d26',
    mainTxt:'#FBD784',
    secondaryTxt:'#d1d1d1'
  }
})
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box minHeight={"80vh"}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/article' element={<Article />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
