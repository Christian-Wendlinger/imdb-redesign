import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, Star} from "@material-ui/icons";
import {Link} from "react-router-dom";

const ruleMargin = 3;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    addIcon: {
        fontSize: 25,
        cursor: "pointer",
        color: theme.palette.text.primary,
        marginBottom: -3
    },
    starIcon: {
        fontSize: 21,
        marginRight: 5,
    }
}));

export default function KnownFor({image, title, rating, year, link, role}) {
    const classes = useStyle();
    return (
        <Grid item xs>
            <Grid container direction={"column"} spacing={0}>
                <Grid item>
                    <Link to={link} style={{textDecoration: "none"}}>
                        <img src={image} width={"100%"}/>
                    </Link>
                </Grid>

                <Grid item>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <Grid container direction={"row"}>
                                <Grid item>
                                    <Star color={"primary"} className={classes.starIcon}/>
                                </Grid>

                                <Grid item>
                                    <Typography variant={"h3"}>{rating}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <AddBox className={classes.addIcon}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{width: "100%"}}>
                    <hr className={classes.balken}/>
                </Grid>

                <Grid item>
                    <Link to={link} style={{textDecoration: "none", color: "#F2F2F2"}}>
                        <Typography variant={"body1"}>
                            {title} ({year})
                        </Typography>
                    </Link>
                </Grid>

                <Grid item>
                    <Typography variant={"body2"} style={{color: "#8d8e8f"}}>
                        as {role}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
