import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, NavigateNext, Star} from "@material-ui/icons";

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

export default function Head({poster, trailer, title, informations, description}) {
    const classes = useStyle();
    return (
            <div className={classes.rightSide}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <img src={poster} width={"100%"}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container direction={"column"} spacing={0}>
                            <Grid item>
                                <Typography variant={"h1"} color={"primary"} className={classes.headline}>
                                    {title}
                                    <AddBox className={classes.addIcon}/>
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body2"} color={"text"} className={classes.headline}>
                                    {informations}
                                </Typography>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>
                                    {description}
                                </Typography>
                            </Grid>

                        
                        </Grid>
                    </Grid>
                </Grid>
            </div>
    );
}
