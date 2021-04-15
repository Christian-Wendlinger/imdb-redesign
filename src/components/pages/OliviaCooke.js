import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import HeadStar from "../OliviaCooke/HeadStar";
import Editorial from "../SoundOfMetal/Editorial";
import DidYouKnow from "../SoundOfMetal/DidYouKnow";
import Photos from "../SoundOfMetal/Photos";
import KnownFor from "../OliviaCooke/KnowFor";
import KnownForTabs from "../OliviaCooke/KnownForTabs";
import FilmographySlide from "../Slides/FilmographySlide";
import ShowMore from "../ShowMore";

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

export default function OliviaCooke() {

    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    const [explore, setExplore] = useState([...oliviaCooke[0].filmography])

    return (

        <div>
            <div className={classes.head}>
                <Box boxShadow={5}>
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
                </Box>
            </div>

            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={9}>
                        <Grid container direction={"column"} spacing={3}>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}>Known
                                    For</Typography>

                                <Grid container direction={"row"} spacing={2}>
                                    {oliviaCooke[0].knownFor.map(title => {
                                        return (
                                            <KnownFor
                                                image={title.image}
                                                title={title.title}
                                                rating={title.rating}
                                                year={title.year}
                                                link={title.link}
                                                role={title.role}
                                            />
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Grid container direction={"row"} spacing={5} alignItems={"flex-start"}>
                                    <Grid item xs={6}>
                                        <Typography variant={"h2"} color={"primary"} style={{cursor: "pointer"}}
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
                                        <Typography variant={"h2"} color={"primary"} style={{cursor: "pointer"}}
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
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}
                                            style={{cursor: "pointer"}}>Personal
                                    Details</Typography>

                                <Grid container direction={"row"} spacing={2}>
                                    <Grid item>
                                        <Grid container direction={"column"} spacing={0}>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[0].key}: </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[1].key}: </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[2].key}: </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[3].key}: </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <Grid container direction={"column"} spacing={0}>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[0].value}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[1].value}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[2].value}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"body1"}
                                                            color={"text"}>{oliviaCooke[0].personalDetails[3].value}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>


                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}
                                            style={{cursor: "pointer"}}>Did You
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
                                <Typography variant={"h2"} className={classes.headline} style={{cursor: "pointer"}}
                                            color={"primary"}>Filmography</Typography>
                                <KnownForTabs
                                    shuffle={() => setExplore([...oliviaCooke[0].filmography].sort(() => Math.random() - 0.5))}/>
                                <Swiper
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={6}
                                    slidesPerGroup={6}
                                    className={"moviePosterSlider"}>
                                    {explore.map(movie => {
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
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}
                                            style={{cursor: "pointer"}}>Contribute to
                                    this Page »</Typography>
                            </Grid>

                        </Grid>
                    </Grid>


                    <Grid item xs={3}>
                        <Grid container direction={"column"} spacing={2}>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}
                                            style={{cursor: "pointer"}}>Related
                                    News</Typography>
                                <Grid container direction={"column"} spacing={0} alignItems={"flex-start"}>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>John Boyega’s ‘Naked Singularity’
                                            to Open San Francisco Film Fest <ShowMore variant={"body2"}/>
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>Three More ‘Game of Thrones’
                                            Spinoffs in the Works at HBO <ShowMore variant={"body2"}/></Typography>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <hr className={classes.balkengrau}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant={"body2"} color={"text"}>Oscars Predictions: Best Actor –
                                            Chadwick Boseman Remains the Academy Favorite for ‘Ma Rainey’s Black
                                            Bottom’ <ShowMore variant={"body2"}/></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"h2"} color={"primary"} className={classes.headline}
                                            style={{cursor: "pointer"}}>Editorial
                                    Lists</Typography>
                                <Grid container direction={"column"} spacing={0} alignItems={"flex-start"}>
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

