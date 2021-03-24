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
                                          title,
                                          rating,
                                          year,
                                          votes,
                                          gross,
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
                        <Grid container direction={"column"} spacing={4}>
                            <Grid item xs={10}>                                
                                    <Typography variant={"h2"}
                                                color={"primary"}>{number !== undefined && number + "."} {title} </Typography>                                    
                            </Grid>
                            <Grid item xs={10}>
                                <Grid container spacing={0}>
                                    <Grid item>
                                                <Star color={"primary"} className={classes.starIcon}/>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant={"body1"} classtitle={classes.subtitle}>
                                                {rating} votes: {votes !== undefined && votes} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gross: {gross !== undefined && gross}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>,
            <Grid item style={{width: "100%", display: lastItem ? "none" : "block"}}>
                <hr classtitle={classes.balken}/>
            </Grid>
        ]
    );
}
