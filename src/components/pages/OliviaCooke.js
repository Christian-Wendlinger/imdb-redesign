import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import HeadStar from "../SoundOfMetal/HeadStar";
import Editorial from "../SoundOfMetal/Editorial";
import DidYouKnow from "../SoundOfMetal/DidYouKnow";
import Photos from "../SoundOfMetal/Photos";
import MoviePosterSlide from "../Slides/MoviePosterSlide"
import StarDetail from "../SoundOfMetal/StarDetails";
import KnownForTabs from "../SoundOfMetal/KnownForTabs";
import FilmographySlide from "../Slides/FilmographySlide";

// main css (custom swiper style)
import "../../main_style.css";
import {useEffect, useState} from "react";
import {oliviaCooke} from "../../data/oliviaCooke"

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
        borderTop: "1px solid",
        borderColor: "#d89d2a",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    balkengrau: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: 7,
        marginBottom: 7
    }
});

export default function OliviaCooke() {

    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    const [explore, setExplore] = useState([...oliviaCooke[0].knownFor].sort(() => Math.random() - 0.5))

    return (

        <div>

            <div className={classes.head}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs>
                            {oliviaCooke.map(star => {
                                return (
                                    <HeadStar
                                        poster={star.poster}
                                        name={star.name}
                                        jobs={star.jobs}
                                        born={star.born}
                                        description={star.description}
                                    />
                                );
                            })}
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={9}>
                        <Grid container direction={"column"} spacing={4}>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Known
                                    For</Typography>

                                <Swiper
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={4}
                                    slidesPerGroup={4}>
                                    {oliviaCooke[0].knownFor.map(title => {
                                        return (
                                            <SwiperSlide>
                                                <MoviePosterSlide
                                                    image={title.image}
                                                    title={title.title}
                                                    rating={title.rating}
                                                    year={title.year}
                                                    link=""
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
                                        <Typography variant={"h2"} color={"primary"}
                                                    className={classes.headline}>Photos</Typography>
                                        <Swiper
                                            navigation
                                            spaceBetween={16}
                                            slidesPerView={1}
                                            slidesPerGroup={1}>
                                            {oliviaCooke[0].photos.map(photos => {
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
                                            {oliviaCooke[0].videos.map(video => {
                                                return (
                                                    <SwiperSlide>
                                                        <Photos
                                                            images={video}
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
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Personal
                                    Details</Typography>
                                <Grid container direction={"column"} spacing={0}>
                                    {oliviaCooke[0].personalDetails.map(detail => {
                                        return (
                                            <StarDetail
                                                pair={detail}
                                            />
                                        );
                                    })}

                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>


                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Did You
                                    Know</Typography>
                                <Grid container direction={"column"} spacing={0}>
                                    {oliviaCooke[0].didYouKnow.map((item, index) => {
                                        return (
                                            <DidYouKnow
                                                title={item.title}
                                                content={item.content}
                                                lastItem={index === oliviaCooke[0].didYouKnow.length - 1}
                                            />
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} className={classes.headline}
                                            color={"primary"}>Filmography</Typography>
                                <KnownForTabs
                                    shuffle={() => setExplore([...oliviaCooke[0].knownFor].sort(() => Math.random() - 0.5))}/>
                                <Swiper
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={6}
                                    slidesPerGroup={6}
                                    className={"moviePosterSlider"}>
                                    {oliviaCooke[0].filmography[0].titles.map(movie => {
                                        return (
                                            <SwiperSlide>
                                                <FilmographySlide
                                                    image={movie.image}
                                                    rating={movie.rating}
                                                    title={movie.title}
                                                    year={movie.year}
                                                    role={movie.role}
                                                    link={movie.link}/>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Contribute to
                                    this Page »</Typography>
                            </Grid>

                        </Grid>
                    </Grid>


                    <Grid item xs={3}>
                        <Grid container direction={"column"} spacing={2}>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Related
                                    News</Typography>
                                <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>John Boyega’s ‘Naked Singularity’
                                            to Open San Francisco Film Fest <Typography variant={"body2"}
                                                                                        color={"primary"}
                                                                                        display={"inline"}>More
                                                »</Typography></Typography>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>Three More ‘Game of Thrones’
                                            Spinoffs in the Works at HBO <Typography variant={"body2"} color={"primary"}
                                                                                     display={"inline"}>More
                                                »</Typography></Typography>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>Oscars Predictions: Best Actor –
                                            Chadwick Boseman Remains the Academy Favorite for ‘Ma Rainey’s Black
                                            Bottom’ <Typography variant={"body2"} color={"primary"} display={"inline"}>More
                                                »</Typography></Typography>
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
                                            image="https://m.media-amazon.com/images/M/MV5BNzllMDdiZTctZmE2OC00NjFhLThkM2MtMjI1ZjEzYWZhY2MyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX86_CR0,0,86,86_AL_.jpg"
                                            text="IMDb STARmeter Award Recipients "
                                        />
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Editorial
                                            image="https://m.media-amazon.com/images/M/MV5BMTUyMTU3MjUwMF5BMl5BanBnXkFtZTgwNTgwNDE2MzI@._V1_UY86_CR14,0,86,86_AL_.jpg"
                                            text="Visions of the Future in Movies and TV"
                                        />
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Editorial
                                            image="https://m.media-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UX86_CR0,0,86,86_AL_.jpg"
                                            text="Top 100 Stars of 2018"
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

