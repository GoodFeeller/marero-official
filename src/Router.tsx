import {FunctionComponent, lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loading from "./components/share/Loading/Loading";
import * as WebFont from "webfontloader";


const MainPage = lazy( () => import("./components/pages/main-page/MainPage"))
const WorkingPage = lazy( () => import("./components/pages/working-page/WorkingPage"))
const BrandingPage = lazy( () => import("./components/pages/branding-page/BrandingPage"))
const WebDesignPage = lazy(() => import("./components/pages/web-design-page/WebDesignPage"))
const AboutPage = lazy( () => import("./components/pages/about-page/AboutPage"))
const WaitScreen = lazy( () => import("./components/pages/wait-screen/WaitScreen"))


const Router: FunctionComponent = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 560)
    useEffect( () => {
        const checkMobile: () => void = () => {
            setIsMobile(window.innerWidth <= 560)
        }
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['Muller:n4,n3,n2'],
                urls: ['/fonts.css']
            }
        })
    },[])
    return <BrowserRouter>
        <Routes>
                <Route element={
                    <Suspense fallback={<Loading/>}>
                        <MainPage isMobile={isMobile}/>
                    </Suspense>} path={'/'}/>
                <Route element={
                    <Suspense fallback={<Loading/>}>
                        <AboutPage isMobile={isMobile}/>
                    </Suspense>}
                       path={'/about'}/>
                <Route element={
                    <Suspense fallback={<Loading/>}>
                        <WebDesignPage isMobile={isMobile}/>
                    </Suspense>}
                       path={'/design'}/>
                <Route element={
                    <Suspense fallback={<Loading/>}>
                        <WorkingPage isMobile={isMobile}/>
                    </Suspense>}
                       path={'/working'}/>
                <Route element={
                    <Suspense fallback={<Loading/>}>
                        <BrandingPage isMobile={isMobile}/>
                    </Suspense>}
                       path={'/branding'}/>
                <Route element={
                    <Suspense fallback={<Loading/>}>
                        <WaitScreen/>
                    </Suspense>}
                       path={'/thankyou'}/>
        </Routes>
    </BrowserRouter>
}

export default Router