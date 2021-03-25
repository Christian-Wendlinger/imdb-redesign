import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, NavigateNext, Star} from "@material-ui/icons";
import ShowMore from "../ShowMore";

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
        cursor: "pointer"
    },
    addIcon: {
        fontSize: 25,
        marginLeft: 5,
        cursor: "pointer",
        color: "#F2F2F2"
    },
    starIcon: {
        fontSize: 18,
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
                <Grid item xs={6} style={{cursor: "pointer"}}>
                    <img src={image} width={"100%"}/>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction={"column"} spacing={0}>
                        <Grid item>
                            <Typography variant={"h3"} color={"primary"} className={classes.headline}>
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
                            <Typography
                                variant={"body1"}>Stars:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{stars}&nbsp;&nbsp;<ShowMore variant={"body1"}/></Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
