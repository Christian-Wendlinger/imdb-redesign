import {Container, Grid, makeStyles, Typography, Box} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Head from "../SoundOfMetal/head";
import CastSlide from "../Slides/CastSlide";
import MoreLikeThis from "../SoundOfMetal/MoreLikeThis";
import Editorial from "../SoundOfMetal/Editorial";
import Detail from "../SoundOfMetal/Detail";
import UserReviewShortItem from "../listItems/UserReviewShortItem";
import DidYouKnow from "../SoundOfMetal/DidYouKnow";
import Photos from "../SoundOfMetal/Photos";
import ShowMore from "../ShowMore";

// main css (custom swiper style)
import "../../main_style.css";
import {movies} from "../../data/movies";
import {cast} from "../../data/cast";
import {useEffect} from "react";
import {Link} from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation]);

const ruleMargin = 17;

const useStyle = makeStyles({
    headline: {
        marginBottom: 20
    },
    head: {
        background: "#25272a",
        marginBottom: 30
    },
    balken: {
        borderTop: "1px",
        borderColor: "#d89d2a",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    balkengrau: {
        borderTop: "1px",
        borderColor: "#5B5F63",
        marginTop: 7,
        marginBottom: 7
    }
});

export default function SoundOfMetal() {

    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    return (
        <div>
            <div className={classes.head}>
                <Box boxShadow={5}>
                    <Container>
                        <Grid container spacing={5}>
                            <Grid item xs>
                                {movies.map(movie => {
                                    return (
                                        <Head
                                            poster={movie.poster}
                                            trailer={movie.trailer}
                                            trailerPoster={movie.trailerPoster}
                                            title={movie.title}
                                            informations={movie.informations}
                                            description={movie.plotSummary}
                                        />
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>

            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={9}>
                        <Grid container direction={"column"} spacing={3}>

                            <Grid item xs>
                                <Link to="/movies/tt5363618/cast" style={{textDecoration: "none"}}>
                                    <Typography variant={"h2"} color={"primary"}
                                                className={classes.headline}>Cast</Typography>
                                </Link>

                                <Swiper 
                                    navigation
                                    simulateTouch={false}
                                    spaceBetween={16}
                                    slidesPerView={5}
                                    slidesPerGroup={5}>
                                    {cast.map(actor => {
                                        return (
                                            <SwiperSlide>
                                                <CastSlide
                                                    image={process.env.PUBLIC_URL + actor.image}
                                                    name={actor.name}
                                                    role={actor.role}
                                                    link={actor.link}
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
                                <Grid container direction={"row"} spacing={5} alignItems={"flex-start"}>
                                    <Grid item xs={6}>
                                        <Link to="/movies/tt5363618/photos" style={{textDecoration: "none"}}>
                                            <Typography variant={"h2"} color={"primary"}
                                                        className={classes.headline}>Photos</Typography>
                                        </Link>
                                        <Swiper
                                            navigation
                                            spaceBetween={16}
                                            slidesPerView={1}
                                            slidesPerGroup={1}>
                                            {movies[0].photos.map(photos => {
                                                return (
                                                    <SwiperSlide>
                                                        <Photos
                                                            images={photos}
                                                        />
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant={"h2"} color={"primary"}
                                                    className={classes.headline}>Videos</Typography>
                                        <Swiper
                                            navigation
                                            spaceBetween={16}
                                            slidesPerView={1}
                                            slidesPerGroup={1}>
                                            {movies[0].photos.map(photos => {
                                                return (
                                                    <SwiperSlide>
                                                        <Photos
                                                            images={photos}
                                                        />
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"}
                                            className={classes.headline}>Details</Typography>
                                <Grid container direction={"column"} spacing={1}>
                                    {movies[0].details.map((detail, index) => {
                                        return (
                                            <Detail
                                                title={detail.title}
                                                pairs={detail.content}
                                                lastItem={index === movies[0].details.length - 1}
                                            />
                                        );
                                    })}

                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Link to="/movies/tt5363618/user-reviews" style={{textDecoration: "none"}}>
                                    <Typography variant={"h2"} color={"primary"}
                                                className={classes.headline}>Reviews</Typography>
                                </Link>

                                <Grid container direction={"column"} spacing={1}>
                                    <UserReviewShortItem
                                        rating={movies[0].reviews[0].rating}
                                        title={movies[0].reviews[0].title}
                                        text={movies[0].reviews[0].text}
                                        lastItem={false}
                                    />
                                    <UserReviewShortItem
                                        rating={movies[0].reviews[1].rating}
                                        title={movies[0].reviews[1].title}
                                        text={movies[0].reviews[1].text}
                                        lastItem={false}
                                    />
                                    <UserReviewShortItem
                                        rating={movies[0].reviews[2].rating}
                                        title={movies[0].reviews[2].title}
                                        text={movies[0].reviews[2].text}
                                        lastItem={true}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Did You
                                    Know</Typography>
                                <Grid container direction={"column"} spacing={1}>
                                    {movies[0].didYouKnow.map((item, index) => {
                                        return (
                                            <DidYouKnow
                                                title={item.title}
                                                content={item.content}
                                                lastItem={index === movies[0].didYouKnow.length - 1}
                                            />
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"}
                                            className={classes.headline}>Questions</Typography>
                                <Typography variant={"body1"} color={"text"} className={classes.headline}>This FAQ is
                                    empty. Add the first question. <ShowMore variant={"body1"}/></Typography>
                            </Grid>


                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline} style={{cursor: "pointer"}}>Contribute to
                                    this Page »</Typography>
                            </Grid>

                        </Grid>
                    </Grid>


                    <Grid item xs={3}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>More Like
                                    This</Typography>
                                <Swiper
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={3}
                                    slidesPerGroup={3}>
                                    {movies[0].moreLikeThis.map(more => {
                                        return (
                                            <SwiperSlide>
                                                <MoreLikeThis
                                                    image={more.image}
                                                    image2={more.image2}
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
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Related
                                    News</Typography>
                                <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>Oscars Predictions: Best Picture –
                                            Is ‘Sound of Metal’ Peaking at the Perfect Time? <ShowMore
                                                variant={"body2"}/></Typography>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>Oscars Predictions: Best Actor –
                                            Can Anthony Hopkins Catch Up to Ahmed, Boseman and Lindo? <ShowMore
                                                variant={"body2"}/></Typography>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>Oscars Predictions: Best Supporting
                                            Actor – Will Sacha Baron Cohen Be the Only Representative from the ‘Chicago
                                            7’ Cast? <ShowMore variant={"body2"}/></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Editorial
                                    Lists</Typography>
                                <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                                    <Grid item xs>
                                        <Editorial
                                            image="https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX86_CR0,0,86,86_AL_.jpg"
                                            text="IMDbPro Top 100 Most Popular Titles 2020"
                                        />
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Editorial
                                            image="https://m.media-amazon.com/images/M/MV5BYzA1OGU1YWItOTJlZC00OWNmLTk1OTAtNTU5YTk4NDE3ZGRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY86_CR59,0,86,86_AL_.jpg"
                                            text="IMDb Picks: The Best Movies & Shows of 2020"
                                        />
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Editorial
                                            image="https://m.media-amazon.com/images/M/MV5BMzhlYTU3M2UtOTJiNy00MjQxLTljYjQtMmVjNWRiMmI0MzhkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY86_CR51,0,86,86_AL_.jpg"
                                            text="December Picks: The Movies and TV Shows You Can't Miss"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

