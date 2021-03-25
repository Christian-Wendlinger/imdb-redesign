import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, Star} from "@material-ui/icons";
import {Link} from "react-router-dom";

const useStyle = makeStyles({
    addIcon: {
        fontSize: 28,
        cursor: "pointer"
    },
    starIcon: {
        fontSize: 25
    }
});

export default function DetailsHeader({movieTitle, year, rating, pageName, pageId}) {
    const classes = useStyle();
    return (
        [
            <Grid item>
                <Grid container direction={"row"} justify={"space-between"}>
                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                            <Grid item>
                                <Link to={pageId ? `/movies/${pageId}` : undefined} style={{textDecoration: "none", color: "#F2F2F2"}}>
                                    <Typography variant={"h2"}>{movieTitle} ({year})</Typography>
                                </Link>
                            </Grid>

                            <Grid item>
                                <AddBox className={classes.addIcon}/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                            <Grid item>
                                <Star color={"primary"} className={classes.starIcon}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"h2"}>{rating}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>,
            <Grid item>
                <Typography variant={"h1"} color={"primary"}>{pageName}</Typography>
            </Grid>
        ]
    );
}
