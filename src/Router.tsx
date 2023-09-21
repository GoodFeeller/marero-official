import {FunctionComponent, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/main-page/MainPage";
import AboutPage from "./components/pages/about-page/AboutPage";
import WebDesignPage from "./components/pages/web-design-page/WebDesignPage";
import WorkingPage from "./components/pages/working-page/WorkingPage";
import BrandingPage from "./components/pages/branding-page/BrandingPage";



const Router: FunctionComponent = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 560)
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 560))
    return <BrowserRouter>
        <Routes>
            <Route element={<MainPage isMobile={isMobile}/>} path={'/'}/>
            <Route element={<AboutPage isMobile={isMobile}/>} path={'/about'}/>
            <Route element={<WebDesignPage isMobile={isMobile}/>} path={'/design'}/>
            <Route element={<WorkingPage isMobile={isMobile}/>} path={'/working'}/>
            <Route element={<BrandingPage isMobile={isMobile}/>} path={'/branding'}/>
        </Routes>
    </BrowserRouter>
}

export default Router