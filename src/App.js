import Header from "./components/Header";
import Homepage from "./components/pages/Homepage";
import SoundOfMetal from "./components/pages/SoundOfMetal";
import Footer from "./components/Footer";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={"/"} exact>
                    <Homepage />
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
