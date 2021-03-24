import Header from "./components/Header";
import Homepage from "./components/pages/Homepage";
import Footer from "./components/Footer";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import TopNewsPage from "./components/pages/TopNewsPage";
import BrowsePage from "./components/pages/BrowsePage";
import BornTodayPage from "./components/pages/BornTodayPage";
import SoundOfMetal from "./components/pages/SoundOfMetal";
import CastPage from "./components/pages/detailsPages/CastPage";
import PhotosPage from "./components/pages/detailsPages/PhotosPage";
import UserReviewsPage from "./components/pages/detailsPages/UserReviewsPage";
import BrowseNdPage from "./components/pages/BrowseNdPage";


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
                <Route path={"/movies/tt5363618"} exact>
                    <SoundOfMetal/>
                </Route>
                <Route path={"/movies/tt5363618/cast"} exact>
                    <CastPage pageName={"Cast"} year={"2019"} movieTitle={"Sound Of Metal"} rating={"7.8"} pageId={"tt5363618"}/>
                </Route>
                <Route path={"/movies/tt5363618/photos"} exact>
                    <PhotosPage pageName={"Photos"} year={"2019"} movieTitle={"Sound Of Metal"} rating={"7.8"} pageId={"tt5363618"}/>
                </Route>
                <Route path={"/movies/tt5363618/user-reviews"} exact>
                    <UserReviewsPage pageName={"User Reviews"} year={"2019"} movieTitle={"Sound Of Metal"} rating={"7.8"} pageId={"tt5363618"}/>
                </Route>
                <Route path={"/browse-nd"} exact>
                    <BrowseNdPage/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
