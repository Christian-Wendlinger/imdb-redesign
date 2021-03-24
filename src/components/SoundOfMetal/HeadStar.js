import {Grid, makeStyles, Typography} from "@material-ui/core";


const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: 17,
        marginBottom: 17
    },
    headline: {
        marginBottom: 5,
    },
    content: {
        paddingTop: 60,
        marginBottom: 30
    }
});

export default function Head({poster, name, jobs, born, description}) {
    const classes = useStyle();
    return (
            <div className={classes.content}>

                <Grid container spacing={5}>

                    <Grid item xs={3}>
                        <img src={poster} width={"100%"}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Typography variant={"h1"} color={"text"} className={classes.headline}>
                                    {name}
                                </Typography>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body2"} color={"text"}>
                                    {jobs}
                                </Typography>
                                <Typography variant={"body2"} color={"text"}>
                                    {born}
                                </Typography>
                            </Grid>

                            <Grid item style={{width: "100%"}}>
                                <hr className={classes.balken}/>
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>
                                    {description} <Typography variant={"body1"} color={"primary"} style={{display:"inline"}}>More »</Typography>
                                </Typography>
                            </Grid>
                        
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            
    );
}
