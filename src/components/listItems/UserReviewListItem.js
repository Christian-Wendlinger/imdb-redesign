import {Grid, makeStyles, Typography, Box} from "@material-ui/core";
import {Star} from "@material-ui/icons";
import ShowMore from "../ShowMore";

const ruleMargin = 25;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    starIcon: {
        fontSize: 19,
        marginBottom: -3,
        marginRight: 4
    }
}));

export default function UserReviewListItem({rating, author, date, title, text, lastItem}) {
    const classes = useStyle();
    return (
        [
            <Grid item>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                            <Grid item>
                                <Grid container direction={"row"} alignItems={"center"}>
                                    <Grid item>
                                        <Star color={"primary"} className={classes.starIcon}/>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body1"}>{rating}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>&nbsp;|&nbsp;</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>{author}</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>&nbsp;|&nbsp;</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>{date}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant={"h3"} color={"primary"}>{title}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"}>{text} <ShowMore variant={"body1"}/></Typography>
                    </Grid>

                </Grid>
            </Grid>,
            <Grid item style={{width: "100%", display: lastItem ? "none" : "block"}}>
                <hr className={classes.balken}/>
            </Grid>
        ]
    );
}
