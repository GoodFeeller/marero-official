import {FunctionComponent} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/main-page/MainPage";
import AboutPage from "./components/pages/about-page/AboutPage";
import WebDesignPage from "./components/pages/web-design-page/WebDesignPage";
import WorkingPage from "./components/pages/working-page/WorkingPage";
import BrandingPage from "./components/pages/branding-page/BrandingPage";



const Router: FunctionComponent = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<MainPage/>} path={'/'}/>
            <Route element={<AboutPage/>} path={'/about'}/>
            <Route element={<WebDesignPage/>} path={'/design'}/>
            <Route element={<WorkingPage/>} path={'/working'}/>
            <Route element={<BrandingPage/>} path={'/branding'}/>
            <Route element={<MainPage/>} path={'/discuss'}/>
        </Routes>
    </BrowserRouter>
}

export default Router