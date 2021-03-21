import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Facebook, Instagram, Twitter, YouTube} from "@material-ui/icons";

const ustStyle = makeStyles({
    background: {
        backgroundColor: "#353638"
    },
    main: {
        marginTop: 50
    },
    inner: {
        paddingTop: 10
    },
    link: {
        cursor: "pointer"
    }
});

export default function Footer() {
    const classes = ustStyle();
    return (
        <footer className={classes.background}>
            <Container className={classes.main}>
                <Grid container direction={"column"} alignItems={"center"} spacing={2} className={classes.inner}>
                    <Grid item container direction={"row"} spacing={1} justify={"center"}>
                        <Grid item>
                            <Instagram fontSize={"large"}/>
                        </Grid>
                        <Grid item>
                            <Twitter fontSize={"large"}/>
                        </Grid>
                        <Grid item>
                            <YouTube fontSize={"large"}/>
                        </Grid>
                        <Grid item>
                            <Facebook fontSize={"large"}/>
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
