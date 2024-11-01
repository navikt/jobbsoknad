import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {Nav, Header, Footer} from "./components/theme"
import {ScrollToTop} from "./components/theme/index"
import Home from "./pages/Home";
import Privacy from './pages/Privacy';
import Accessibility from "./pages/Accessibility";

const routes = [
    { path: "/tilgjengelighet", component: <Accessibility /> },
    { path: "/personvern", component: <Privacy /> },
    { path: "*", component: <Home /> },
];
export default function App() {
    return (
        <div>
            <Nav/>
            <main style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}>
                <div>
                    <Header/>
                    <Router>
                        <Routes>
                            {routes.map(({ path, component }) => (
                                <Route key={path} path={path} element={component} />
                            ))}
                        </Routes>
                    </Router>
                </div>
                <ScrollToTop/>
            </main>
            <Footer/>
        </div>
    )
}