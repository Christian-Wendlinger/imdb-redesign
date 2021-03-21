import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Head from "../SoundOfMetal/head";
import CastSlide from "../Slides/CastSlide";

// main css (custom swiper style)
import "../../main_style.css";
import {movies} from "../../data/movies";
import {cast} from "../../data/cast";

// install Swiper modules
SwiperCore.use([Navigation]);

const useStyle = makeStyles({
    headline: {
        marginBottom: 15
    },
    firstItem: {
        marginTop: 15
    }
});

export default function Homepage() {
    const classes = useStyle();
    return (
        <Container>
            <Grid container direction={"column"} spacing={5} className={classes.firstItem}>

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

                <Grid item xs={8}>
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
        </Container>
    );
}

