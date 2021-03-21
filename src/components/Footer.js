import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Facebook, Instagram, Launch, Twitter, YouTube} from "@material-ui/icons";

const ustStyle = makeStyles({
    background: {
        backgroundColor: "#232427"
    },
    main: {
        marginTop: 50
    },
    inner: {
        paddingTop: 10
    },
    link: {
        cursor: "pointer",
        color: "white"
    }
});

export default function Footer() {
    const classes = ustStyle();
    return (
        <footer className={classes.background}>
            <Container className={classes.main}>
                <Grid container direction={"column"} alignItems={"center"} spacing={3} className={classes.inner}>
                    <Grid item container direction={"row"} spacing={2} justify={"center"}>
                        <Grid item>
                            <a href={"https://www.instagram.com/imdb"} target={"_blank"}>
                                <Instagram fontSize={"large"} className={classes.link}/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href={"https://twitter.com/imdb"} target={"_blank"}>
                                <Twitter fontSize={"large"} className={classes.link}/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href={"https://www.youtube.com/imdb"} target={"_blank"}>
                                <YouTube fontSize={"large"} className={classes.link}/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href={"https://www.facebook.com/imdb"} target={"_blank"}>
                                <Facebook fontSize={"large"} className={classes.link}/>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid item container direction={"row"} spacing={3} justify={"center"}>
                        <Grid item>
                            <Typography className={classes.link}>Site Index</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.link}>Conditions of Use</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.link}>IMDb Pro</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.link}>Privacy Policy</Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"}>&copy; 1990-2021 by IMDb.com, Inc.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}
