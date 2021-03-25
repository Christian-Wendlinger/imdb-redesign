import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, Star, StarBorder} from "@material-ui/icons";
import {Link} from "react-router-dom";

const ruleMargin = 10;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    starIcon: {
        fontSize: 20,
        marginBottom: -8
    },
    addIcon: {
        fontSize: 24,
        cursor: "pointer",
        color: theme.palette.text.primary,
        marginBottom: -3
    },
    secondRow: {
        marginTop: -7
    }
}));

export default function BrowseMovieListItem({
                                                image,
                                                number,
                                                title,
                                                description,
                                                rating,
                                                year,
                                                age,
                                                runtime,
                                                genres,
                                                director,
                                                stars,
                                                votes,
                                                gross,
                                                link,
                                                lastItem
                                            }) {
    const classes = useStyle();
    return (
        [
            <Grid item>
                <Grid container direction={"row"} spacing={2}>
                    <Grid item>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Link to={link}>
                                    <img src={image} width={"100%"}/>
                                </Link>
                            </Grid>

                            <Grid item>
                                <Grid container direction={"row"} alignItems={"center"} justify={"space-between"}>
                                    <Grid item>
                                        <Grid container direction={"row"}>
                                            <Grid item>
                                                <Star color={"primary"} className={classes.starIcon}/>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant={"body1"}>&nbsp;{rating}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <Grid container direction={"row"}>
                                            <Grid item>
                                                <StarBorder color={"primary"} className={classes.starIcon}/>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant={"body1"}>&nbsp;Rate this</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Grid container spacing={1} alignItems={"center"}>
                                    <Grid item>
                                        <Link to={link} style={{textDecoration: "none"}}>
                                            <Typography variant={"h3"}
                                                        color={"primary"}>{number}. {title}</Typography>
                                        </Link>
                                    </Grid>

                                    <Grid item>
                                        <AddBox className={classes.addIcon}/>
                                    </Grid>
                                </Grid>

                                <Grid container direction={"row"} spacing={1} className={classes.secondRow}>
                                    <Grid item>
                                        <Typography variant={"body2"}>{age}</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body2"}>|</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body2"}>{runtime}</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body2"}>|</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body2"}>{genres}</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body2"}>|</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body2"}>{year}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"body1"}>{description}</Typography>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"body2"}>Director : &nbsp;{director}</Typography>
                                <Typography variant={"body2"}>Stars
                                    : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{stars}</Typography>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"body2"}>Votes : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{votes}</Typography>
                                {gross !== undefined && <Typography variant={"body2"}>Gross
                                    : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gross}</Typography>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>,
            <Grid item style={{width: "100%", display: lastItem ? "none" : "block"}}>
                <hr className={classes.balken}/>
            </Grid>
        ]
    );
}
