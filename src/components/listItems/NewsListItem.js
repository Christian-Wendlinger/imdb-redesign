import {Grid, makeStyles, Typography} from "@material-ui/core";

const ruleMargin = 15;

const useStyle = makeStyles({
    balken: {
        borderTop: "1px solid",
        borderColor: "#5B5F63",
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    subtitle: {
        marginTop: 3
    }
});

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
                            <Grid item xs>
                                <a href={link} target={"_blank"} style={{textDecoration: "none"}}>
                                    <Typography variant={"h3"} color={"primary"}>{title}</Typography>
                                </a>
                                <Typography variant={"body2"}
                                            className={classes.subtitle}>{date}&nbsp;&nbsp;|&nbsp;&nbsp;{category}{author !== "-" &&
                                <Typography variant={"body2"}
                                            style={{display: "inline"}}>&nbsp;&nbsp;|&nbsp;&nbsp;by {author}</Typography>}&nbsp;&nbsp;|&nbsp;&nbsp;{portal}</Typography>
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
