import { Route, Routes,useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from "../view/About";
import Contact from "../view/Contact";
import Gallery from "../view/Gallery";
import Art from "../view/artCollection";
import Home from "../view/Home";
import Team from "../view/team";
import Project from "../view/project";
import SLUGS from "../utilities/slug";
import Error from "../view/error";
import { AnimatePresence } from "framer-motion";

function Routers() {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <AnimatePresence>
            <Routes location={pathname} key={pathname.key}>
                <Route path={SLUGS.home} element={<Home />} />
                <Route path={SLUGS.about} element={<About />} />
                <Route path={SLUGS.contact} element={<Contact />} />
                <Route path={SLUGS.team} element={<Team />} />
                <Route path={SLUGS.project} element={<Project />} />
                <Route path={SLUGS.gallery} element={<Gallery />} />
                <Route path={SLUGS.art} element={<Art />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Routers;
