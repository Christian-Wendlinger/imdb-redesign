import {Grid, makeStyles, Typography} from "@material-ui/core";

const ruleMargin = 15;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    subtitle: {
        marginTop: 3
    }
}));

export default function NewsListItem({image, title, date, category, author, portal, link, paragraphs, lastItem}) {
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
                            <Grid item>
                                <Grid containerd direction={"column"}>
                                    <Grid item>
                                        <a href={link} target={"_blank"} style={{textDecoration: "none"}}>
                                            <Typography variant={"h3"} color={"primary"}>{title}</Typography>
                                        </a>
                                    </Grid>

                                    <Grid item>
                                        <Grid container direction={"row"} spacing={1}>
                                            <Grid item>
                                                <Typography variant={"body2"} className={classes.subtitle}>
                                                    {date}
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant={"body2"} className={classes.subtitle}>
                                                    |
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant={"body2"} className={classes.subtitle}>
                                                    {category}
                                                </Typography>
                                            </Grid>

                                            {author !== "-" && [
                                                <Grid item>
                                                    <Typography variant={"body2"} className={classes.subtitle}>
                                                        |
                                                    </Typography>
                                                </Grid>,

                                                <Grid item>
                                                    <Typography variant={"body2"} className={classes.subtitle}>
                                                        by {author}
                                                    </Typography>
                                                </Grid>
                                            ]}

                                            <Grid item>
                                                <Typography variant={"body2"} className={classes.subtitle}>
                                                    |
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant={"body2"} className={classes.subtitle}>
                                                    {portal}
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs>
                                <Grid container direction={"column"} spacing={1}>
                                    {paragraphs.map(paragraph => {
                                        return (
                                            <Grid item xs>
                                                <Typography variant={"body1"}>{paragraph}</Typography>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
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
