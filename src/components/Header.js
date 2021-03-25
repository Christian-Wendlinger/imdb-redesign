import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {AccountCircle, Search} from "@material-ui/icons";
import NavPopover from "./NavPopover";
import {Link} from "react-router-dom";
import React from "react";

const navPadding = 10;

const useStyle = makeStyles((theme) => ({
    nav: {
        backgroundColor: theme.palette.secondary.main,
        paddingTop: navPadding,
        paddingBottom: navPadding
    },
    imdbTitle: {
        fontSize: 35,
        fontWeight: 600
    }
}));

const watch = [
    {link: "/browse", text: "Browse"},
    {text: "What's coming"}
];

const awardsEvents1 = [
    {text: "Oscars"},
    {text: "Golden Globes"},
    {text: "Emmys"},
    {text: "Best Picture Winner"},
    {text: "STARmeter Awards"},
    {text: "San Diego Comic-Con"}
];

const awardsEvents2 = [
    {text: "New York Comic-Con"},
    {text: "Sundance Film Festival"},
    {text: "Toronto Int'l Film Festival"},
    {text: "Awards Central"},
    {text: "Festival Central"},
    {text: "All Events"}
];

const community = [
    {text: "Help Center"},
    {text: "Contributor Zone"},
    {text: "Polls"}
];

export default function Header() {
    const classes = useStyle();
    return (
        <Box boxShadow={10}>
            <nav className={classes.nav}>
                <Container>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <Grid container direction={"row"} spacing={4} alignItems={"center"}>
                                <Grid item>
                                    <Link to={"/"} style={{textDecoration: "none"}}>
                                        <Typography color={"primary"} className={classes.imdbTitle}>IMDb</Typography>
                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Grid container direction={"row"} spacing={3} alignItems={"center"}>
                                        <Grid item>
                                            <NavPopover title={"Watch"} itemsRow1={watch}/>
                                        </Grid>

                                        <Grid item>
                                            <Link to={"/celebs"} style={{textDecoration: "none", color: "#F2F2F2"}}>
                                                <Typography>Celebs</Typography>
                                            </Link>
                                        </Grid>

                                        <Grid item>
                                            <Link to={"/news"} style={{textDecoration: "none", color: "#F2F2F2"}}>
                                                <Typography>News</Typography>
                                            </Link>
                                        </Grid>

                                        <Grid item>
                                            <NavPopover
                                                title={"Awards & Events"}
                                                itemsRow1={awardsEvents1}
                                                itemsRow2={awardsEvents2}/>
                                        </Grid>

                                        <Grid item>
                                            <NavPopover
                                                title={"Community"}
                                                itemsRow1={community}/>
                                        </Grid>

                                        <Grid item>
                                            <Search style={{cursor: "pointer", marginBottom: -3}}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container direction={"row"} alignItems={"center"} spacing={3}>
                                <Grid item>
                                    <Link to={undefined} style={{textDecoration: "none", color: "#F2F2F2"}}>
                                        <Typography>Watchlists</Typography>
                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Link to={undefined} style={{textDecoration: "none", color: "#F2F2F2"}}>
                                        <AccountCircle fontSize={"large"} style={{marginBottom: -3}}/>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </nav>
        </Box>
    )
        ;
}
