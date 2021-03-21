import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, NavigateNext, Star} from "@material-ui/icons";
import {SwiperSlide} from "swiper/react";

const ruleMargin = 17;

const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    headline: {
        marginBottom: 5,
        fontWeight: "bold"
    },
    addIcon: {
        fontSize: 28,
        marginLeft: 5,
        cursor: "pointer"
    },
    starIcon: {
        fontSize: 17,
        marginRight: 3
    },
    rightSide: {
        paddingRight: 40
    }
});

export default function MainSlide({image, title, rating, age, runtime, genres, year, description, creator, stars}) {
    const classes = useStyle();
    return (
            <div className={classes.rightSide}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={image} width={"100%"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} alignItems={"flex-start"} spacing={0}>
                            <Grid item>
                                <Typography variant={"body1"} className={classes.headline}>
                                    {title}
                                    <AddBox className={classes.addIcon}/>
                                </Typography>
                            </Grid>

                            <Grid container direction={"row"} alignItems={"center"}>
                                <Grid item>
                                    <Star color={"primary"} className={classes.starIcon}/>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant={"body2"}>{rating} &nbsp;|&nbsp; {age} &nbsp;|&nbsp; {runtime} &nbsp;|&nbsp; {genres} &nbsp;|&nbsp; {year}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>
                                    {description}
                                </Typography>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>Creator: &nbsp;{creator}</Typography>
                                <Grid container direction={"row"} alignItems={"center"}>
                                    <Grid item>
                                        <Typography
                                            variant={"body1"}>Stars:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{stars}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <NavigateNext color={"primary"}/>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
    );
}
