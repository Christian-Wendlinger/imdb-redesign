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
        marginBottom: 15,
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
    content: {
        paddingTop: 60,
        marginBottom: 30
    }
});

export default function Head({poster, trailer, title, informations, description}) {
    const classes = useStyle();
    return (
            <div className={classes.content}>

                <Grid container spacing={5}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <img src={poster} width={"100%"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={0}>
                            <Grid item>
                                <Typography variant={"h1"} color={"text"} className={classes.headline}>
                                    {title}
                                    <AddBox className={classes.addIcon}/>
                                </Typography>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body2"} color={"text"}>
                                    {informations}
                                </Typography>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>
                                    {description} <Typography variant={"body1"} color={"primary"}>»</Typography>
                                </Typography>
                            </Grid>

                        
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            
    );
}
