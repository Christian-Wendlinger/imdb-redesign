import {Grid, makeStyles, Typography, Box} from "@material-ui/core";
import {Star} from "@material-ui/icons";

const ruleMargin = 35;

const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    starIcon: {
        fontSize: 25
    }
});

export default function UserReviewListItem({rating, author, date, title, text, lastItem}) {
    const classes = useStyle();
    return (
        [
            <Grid item>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                            <Grid item>
                                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                                    <Grid item>
                                        <Star color={"primary"} className={classes.starIcon}/>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant={"body1"}>{rating}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>|</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>{author}</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>|</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>{date}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"} color={"text"}>
                            <Box fontWeight="fontWeightBold">
                                {title}
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"}>{text}</Typography>
                    </Grid>
                </Grid>
            </Grid>,
            <Grid item style={{width: "100%", display: lastItem ? "none" : "block"}}>
                <hr className={classes.balken}/>
            </Grid>
        ]
    );
}
