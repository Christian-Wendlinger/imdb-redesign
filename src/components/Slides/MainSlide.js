import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, Star} from "@material-ui/icons";
import ShowMore from "../ShowMore";

const ruleMargin = 17;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    headline: {
        cursor: "pointer"
    },
    addIcon: {
        fontSize: 25,
        cursor: "pointer",
        color: theme.palette.text.primary,
        marginBottom: -3
    },
    starIcon: {
        fontSize: 15,
        marginRight: 3,
        marginBottom: -3
    },
    rightSide: {
        paddingRight: 40
    },
    headlineRow: {
        marginBottom: -1
    }
}));

export default function MainSlide({image, title, rating, age, runtime, genres, year, description, creator, stars}) {
    const classes = useStyle();
    return (
        <div className={classes.rightSide}>
            <Grid container spacing={2}>
                <Grid item xs={6} style={{cursor: "pointer"}}>
                    <img src={image} width={"100%"}/>
                </Grid>

                <Grid item xs={6}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Grid container direction={"row"} spacing={1} alignItems={"center"}
                                  className={classes.headlineRow}>
                                <Grid item>
                                    <Typography variant={"h3"} color={"primary"} className={classes.headline}>
                                        {title}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <AddBox className={classes.addIcon}/>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container direction={"row"} spacing={1}>
                                <Grid item>
                                    <Grid container direction={"row"}>
                                        <Grid item>
                                            <Star color={"primary"} className={classes.starIcon}/>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant={"body2"}>{rating}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Typography variant={"body2"}>|</Typography>
                                </Grid>

                                <Grid item>
                                    <Typography
                                        variant={"body2"}>{age}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant={"body2"}>|</Typography>
                                </Grid>

                                <Grid item>
                                    <Typography
                                        variant={"body2"}>{runtime}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant={"body2"}>|</Typography>
                                </Grid>

                                <Grid item>
                                    <Typography
                                        variant={"body2"}>{genres}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant={"body2"}>|</Typography>
                                </Grid>

                                <Grid item>
                                    <Typography
                                        variant={"body2"}>{year}
                                    </Typography>
                                </Grid>
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
                                variant={"body1"}>Stars:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{stars}&nbsp;&nbsp;<ShowMore
                                variant={"body1"}/></Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
