import {Grid, makeStyles, Typography} from "@material-ui/core";


const ruleMargin = 17;

const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    headline: {
        marginTop: 5,
        fontWeight: "bold"
    },
    rightSide: {
        paddingRight: 40
    }
});

export default function NewsSlide({image, title, description, date}) {
    const classes = useStyle();
    return (
        <div className={classes.rightSide}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={image} width={"100%"}/>
                </Grid>
                <Grid item xs={8}>
                    <Grid container direction={"column"} alignItems={"flex-start"} spacing={0}>
                        <Grid item>
                            <Typography variant={"body2"}>{date}</Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant={"body1"} className={classes.headline}>{title}</Typography>
                        </Grid>

                        <Grid item style={{width: "100%"}}>
                            <hr className={classes.balken}/>
                        </Grid>

                        <Grid item>
                            <Typography variant={"body1"}>{description}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
