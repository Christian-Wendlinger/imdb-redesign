import Header from "./components/Header";
import Homepage from "./components/pages/Homepage";
import SoundOfMetal from "./components/pages/SoundOfMetal";
import Footer from "./components/Footer";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import TopNewsPage from "./components/pages/TopNewsPage";
import BrowsePage from "./components/pages/BrowsePage";
import BornTodayPage from "./components/pages/BornTodayPage";


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={"/"} exact>
                    <Homepage/>
                </Route>
                <Route path={"/news"} exact>
                    <TopNewsPage/>
                </Route>
                <Route path={"/browse"} exact>
                    <BrowsePage/>
                </Route>
                <Route path={"/born-today"} exact>
                    <BornTodayPage/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
