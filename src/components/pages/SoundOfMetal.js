import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Head from "../SoundOfMetal/Head";
import CastSlide from "../Slides/CastSlide";
import MoreLikeThis from "../SoundOfMetal/MoreLikeThis";

// main css (custom swiper style)
import "../../main_style.css";
import {movies} from "../../data/movies";
import {cast} from "../../data/cast";

// install Swiper modules
SwiperCore.use([Navigation]);

const ruleMargin = 17;

const useStyle = makeStyles({
    headline: {
        marginBottom: 15
    },
    head: {
        background: "#1d1e20",
        marginBottom: 30
    },
    balken: {
        borderTop: "1px solid",
        borderColor: "#d89d2a",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    }
});

export default function Homepage() {
    const classes = useStyle();
    return (

        <div>

        <div className={classes.head}>
        <Container>
            <Grid container direction={"column"} spacing={5}>
                <div className={classes.head}>
                    <Grid item xs>
                            {movies.map(movie => {
                                return (
                                    <Head
                                        poster={movie.poster}
                                        trailer={movie.poster}
                                        title={movie.title}
                                        informations={movie.informations}
                                        description={movie.plotSummary}
                                    />
                                );
                            })}
                    </Grid>
                </div>
            </Grid>
        </Container>
        </div>
                
        <Container>
            <Grid container direction={"column"} spacing={5}>
                <Grid item xs></Grid>
            
                <Grid container spacing={5}>
                    <Grid item xs={8}>

                        <Grid container direction={"column"} spacing={5}>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Cast</Typography>
                                <Swiper
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={4}
                                    slidesPerGroup={4}>
                                    {cast.map(actor => {
                                        return (
                                            <SwiperSlide>
                                                <CastSlide
                                                    image={process.env.PUBLIC_URL + actor.image}
                                                    name={actor.name}
                                                    role={actor.role}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Cast</Typography>
                                <Swiper
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={4}
                                    slidesPerGroup={4}>
                                    {cast.map(actor => {
                                        return (
                                            <SwiperSlide>
                                                <CastSlide
                                                    image={process.env.PUBLIC_URL + actor.image}
                                                    name={actor.name}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={1}></Grid>
                    
                    <Grid item xs={3}>
                        <Grid container direction={"column"} spacing={5}>
                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>More Like This</Typography>
                                <Swiper
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={3}
                                    slidesPerGroup={3}>
                                    {movies.map(movie => {
                                        movie.moreLikeThis.map(title => {
                                            return (
                                                <SwiperSlide>
                                                    <MoreLikeThis
                                                        image={title.image}
                                                        image2={title.image2}
                                                    />
                                                </SwiperSlide>
                                            );
                                        })
                                    })}
                                </Swiper>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Related News</Typography>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Editorial Lists</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </Container>

        </div>
    );
}
