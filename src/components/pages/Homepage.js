import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import {detailedMovieData} from "../../data/detailedMovies";
import MainSlide from "../Slides/MainSlide";

// main css (custom swiper style)
import "../../main_style.css";
import {moviesPosters} from "../../data/moviePosters";
import MoviePosterSlide from "../Slides/MoviePosterSlide";
import HomeTabs from "../Homepage/HomeTabs";
import {news} from "../../data/news";
import NewsSlide from "../Slides/NewsSlide";
import {bornToday} from "../../data/bornToday";
import BornTodaySlide from "../Slides/BornTodaySlide";
import {Link} from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation]);

const useStyle = makeStyles({
    headline: {
        marginBottom: 15
    },
    firstItem: {
        marginTop: 20
    }
});

export default function Homepage() {
    const classes = useStyle();
    return (
        <Container>
            <Grid container direction={"column"} spacing={5} className={classes.firstItem}>
                <Grid item xs>
                    <Typography variant={"h2"} className={classes.headline}>Featured</Typography>
                    <Swiper navigation loop>
                        {detailedMovieData.map(movie => {
                            return (
                                <SwiperSlide>
                                    <MainSlide
                                        image={movie.image}
                                        title={movie.title}
                                        rating={movie.rating}
                                        age={movie.age}
                                        runtime={movie.runtime}
                                        genres={movie.genres}
                                        year={movie.year}
                                        description={movie.description}
                                        creator={movie.creator}
                                        stars={movie.stars}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Grid>

                <Grid item xs>
                    <Typography variant={"h2"} color={"primary"} className={classes.headline}>Recommended</Typography>
                    <Swiper
                        navigation
                        spaceBetween={16}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        className={"moviePosterSlider"}>
                        {moviesPosters.map(movie => {
                            return (
                                <SwiperSlide>
                                    <MoviePosterSlide
                                        image={movie.image}
                                        rating={movie.rating}
                                        title={movie.title}
                                        year={movie.year}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Grid>

                <Grid item xs>
                    <Typography variant={"h2"} color={"primary"} className={classes.headline}>
                        Explore what's streaming
                    </Typography>
                    <HomeTabs/>
                    <Swiper
                        navigation
                        spaceBetween={16}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        className={"moviePosterSlider"}>
                        {moviesPosters.sort(() => Math.random() - 0.5).map(movie => {
                            return (
                                <SwiperSlide>
                                    <MoviePosterSlide
                                        image={movie.image}
                                        rating={movie.rating}
                                        title={movie.title}
                                        year={movie.year}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Grid>

                <Grid item xs>
                    <Link to={"/news"} style={{textDecoration: "none"}}>
                        <Typography variant={"h2"} color={"primary"} className={classes.headline}>Top News</Typography>
                    </Link>
                    <Swiper
                        navigation
                        spaceBetween={16}
                        slidesPerView={2}
                        slidesPerGroup={2}>
                        {news.map(article => {
                            return (
                                <SwiperSlide>
                                    <NewsSlide
                                        image={article.image}
                                        date={article.date}
                                        title={article.title}
                                        description={article.descriptionShort}
                                        category={article.category}
                                        link={article.link}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Grid>

                <Grid item xs>
                    <Typography variant={"h2"} color={"primary"} className={classes.headline}>Born Today</Typography>
                    <Swiper
                        navigation
                        spaceBetween={16}
                        slidesPerView={6}
                        slidesPerGroup={6}>
                        {bornToday.map(celeb => {
                            return (
                                <SwiperSlide>
                                    <BornTodaySlide
                                        image={process.env.PUBLIC_URL + celeb.image}
                                        name={celeb.name}
                                        age={celeb.age}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Grid>
            </Grid>
        </Container>
    );
}

