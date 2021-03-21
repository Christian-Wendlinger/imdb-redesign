import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, Star} from "@material-ui/icons";

const ruleMargin = 3;

const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    addIcon: {
        fontSize: 28,
        cursor: "pointer",
        color: "#F2F2F2"
    },
    starIcon: {
        fontSize: 21,
        marginRight: 3
    },
    firstRow: {
        marginTop: 17,
    }
});

export default function MoviePosterSlide({image, title, rating, year}) {
    const classes = useStyle();
    return (
        <Grid container direction={"column"} spacing={1}>
            <Grid item>
                <img src={image} width={"100%"}/>
            </Grid>

            <Grid item container direction={"row"} justify={"space-between"} alignItems={"center"} xs className={classes.firstRow}>
                <Grid container xs={6}>
                    <Grid item>
                        <Star color={"primary"} className={classes.starIcon}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"}>{rating}</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <AddBox className={classes.addIcon}/>
                </Grid>
            </Grid>

            <Grid item style={{width: "100%"}}>
                <hr className={classes.balken}/>
            </Grid>

            <Grid item>
                <Typography variant={"body1"}>
                    {title} ({year})
                </Typography>
            </Grid>
        </Grid>
    );
}
