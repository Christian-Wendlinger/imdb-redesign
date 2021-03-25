import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, Star, StarBorder} from "@material-ui/icons";
import {Link} from "react-router-dom";

const ruleMargin = 15;

const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    subtitle: {
        marginTop: 3
    },
    starIcon: {
        fontSize: 19
    },
    addIcon: {
        fontSize: 24,
        cursor: "pointer",
        color: "#F2F2F2"
    }
});

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
                <Grid container spacing={2}>
                    <Grid item xs={3} container direction={"column"} spacing={3}>
                        <Grid item xs>
                            <Link to={link}>
                                <img src={image} width={"100%"}/>
                            </Link>
                        </Grid>

                        <Grid item xs container justify={"space-between"} direction={"row"}>
                            <Grid item>
                                <Grid container alignItems={"center"} direction={"row"}>
                                    <Grid item>
                                        <Star color={"primary"} className={classes.starIcon}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"body1"}>&nbsp;{rating}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid container alignItems={"center"} direction={"row"}>
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


                    <Grid item xs={9}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item xs>
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

                                <Typography variant={"body2"} className={classes.subtitle}>
                                    {age}&nbsp;&nbsp;|&nbsp;&nbsp;{runtime}&nbsp;&nbsp;|&nbsp;&nbsp;{genres}&nbsp;&nbsp;|&nbsp;&nbsp;{year}
                                </Typography>
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
                                {gross !== undefined && <Typography variant={"body2"}>Gross : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gross}</Typography>}
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
