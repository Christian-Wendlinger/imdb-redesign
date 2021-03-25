import {Box, Grid, makeStyles, Typography} from "@material-ui/core";
import {Star} from "@material-ui/icons";

const ruleMargin = 35;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
    },
    starIcon: {
        fontSize: 25
    }
}));

export default function UserReviewListItem({rating, title, text, lastItem}) {
    const classes = useStyle();
    return (
        [
            <Grid item>
                <Grid container direction={"column"} spacing={2}>

                    <Grid item>
                        <Grid container direction={"row"} alignItems={"center"} spacing={4}>
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
                                <Typography variant={"body1"} color={"text"}>
                                    <Box fontWeight="fontWeightBold">
                                        {title}
                                    </Box>
                                </Typography>
                            </Grid>

                        </Grid>
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
