import { BrowserRouter, Route, Routes } from "react-router-dom";
//import HeroSection from "./components/Home/HomePage";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import { useSelector } from "react-redux";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
//import { Canvas } from "@react-three/fiber";
//import { Suspense } from "react";
import LandingPage from "./components/Landing/LandingPage";
import Search from "./components/Search/Search";
import Explore from "./components/Explore/Explore";
import Home2 from "./components/Globe/Home2";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import HomeNew from "./components/newHome/HomeNew";
import Stats from "./components/stats/Stats";
import Login from "./components/login/Login";
import Practice from "./components/practice/Practice";

function App() {
  const user = useSelector((state) => state?.auth?.user);

  return (
    <BrowserRouter>
      {/* Navbar */}
      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element ={
          <LandingPage/>
        }/>
        <Route path="/home" element={
            <HomeNew/>
        } />
        <Route path="/search/tulsi" element={
          <Explore/>
        }/>
        <Route path="/search" element={
          <Search/>
        }/>
        
        <Route path="/explore" element={
          <Home2/>
        }/>

        <Route path="/private-help" element={
          <Practice/>
        }/>
        <Route path="/search/tulsi/stats" element={
          <Stats/>
        }/>
        <Route path="/login" element={
          <Login/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;