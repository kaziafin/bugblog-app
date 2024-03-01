import React, { useState, useEffect } from "react";

import SplashScreen from "./components/SplashScreen";
import NavbarSimple from "./components/NavbarSimple";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { WavyBackground } from "./components/ui/wavy-background";
function App({ children }) { // Pass children props
  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden">
       {/* <BackgroundGradientAnimation /> */}
       {/* <WavyBackground/> */}
      {isLoading && isHome ? (
        //  <div className="w-full h-screen absolute top-0 left-0">
        <SplashScreen finishLoading={() => setIsLoading(false)} />
       
      // </div>
      ) : (
        <div style={{ backgroundColor: '#ffede1', minHeight: '100vh', padding: '20px' }}>
         <NavbarSimple/>
        </div>
      )}
      
    </div>
  );
}

export default App;
