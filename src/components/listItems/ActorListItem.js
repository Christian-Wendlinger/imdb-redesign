import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox, Star, StarBorder} from "@material-ui/icons";

const ruleMargin = 15;

const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    subtitle: {
        marginTop: 2
    }
});

export default function ActorListItem({
                                              number,
                                              image,
                                              name,
                                              age,
                                              born,
                                              description,
                                              zodiacSign,
                                              knownFor,
                                              lastItem
                                          }) {
    const classes = useStyle();
    return (
        [
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <img src={image} width={"100%"}/>
                    </Grid>


                    <Grid item xs={10}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item xs>
                                <Grid container spacing={1} alignItems={"center"}>
                                    <Grid item>
                                        <Typography variant={"body1"} color={"primary"}>{number !== undefined && number + "."} {name} ({age})</Typography>
                                    </Grid>
                                </Grid>

                                <Typography variant={"body2"} className={classes.subtitle}>
                                    {born}
                                </Typography>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"body1"}>{description}</Typography>
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"body2"}>Zodiac Sign : &nbsp;{zodiacSign}</Typography>
                                <Typography variant={"body2"}>Known For : &nbsp;&nbsp;&nbsp;{knownFor}</Typography>
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
