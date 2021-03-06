import {Grid, makeStyles, Typography} from "@material-ui/core";

const ruleMargin = 17;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    headline: {
        marginTop: 5,
    },
    rightSide: {
        paddingRight: 40
    }
}));

export default function NewsSlide({image, title, description, date, category, link}) {
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
                            <Typography variant={"body2"}>{date} - {category}</Typography>
                        </Grid>

                        <Grid item>
                            <a href={link} style={{textDecoration: "none"}} target={"_blank"}>
                                <Typography variant={"h3"} color={"primary"} className={classes.headline}>
                                    {title}
                                </Typography>
                            </a>
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
