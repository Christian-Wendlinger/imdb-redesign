import {Container, Grid, makeStyles, Paper, Typography, Checkbox} from "@material-ui/core";
import {useEffect} from "react";
import BrowseMovieNdListItem from "../listItems/BrowseMovieNdListItem";
import {notDetailedMovies} from "../../data/notDetailedMovies";
import Popper from "@material-ui/core/Popper";
import React from "react";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function BrowseNdPage() {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Browse</Typography>
            <Grid container spacing={6}>
                <Grid item container direction={"column"} spacing={6} xs={3}>
                    <Grid item>
                        <button aria-describedby={"id"} type="button" onClick={handleClick}>
                            Popper 1
                        </button>
                        <Popper id={"id"} open={open} anchorEl={anchorEl} placement="bottom-start">

                            <Grid container spacing={0} xs={4} style={{backgroundColor:"skyBlue"}}>
                                <Grid container spacing={5} alignItems={"center"}>
                                    <Grid item xs={1}>
                                            <Checkbox/>
                                    </Grid>
                                    <Grid item >
                                            <Typography variant={"body1"}> All </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                            <Checkbox/>
                                    </Grid>
                                    <Grid item>
                                            <Typography variant={"body1"}> Sci-Fi </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={5} alignItems={"center"}>
                                    <Grid item xs={1}>
                                            <Checkbox/>
                                    </Grid>
                                    <Grid item>
                                            <Typography variant={"body1"}> All </Typography>
                                    </Grid>
                                                                        <Grid item xs={1}>
                                            <Checkbox/>
                                    </Grid>
                                    <Grid item>
                                            <Typography variant={"body1"}> Sci-Fi </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={5} alignItems={"center"}>
                                    <Grid item xs={1}>
                                            <Checkbox/>
                                    </Grid>
                                    <Grid item>
                                            <Typography variant={"body1"}> All </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Popper>                       
                    </Grid>                   
                    <Grid item>
                        <button aria-describedby={"id"} type="button" onClick={handleClick}>
                            Popper 1
                        </button>
                    </Grid>
                </Grid>

























                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={2}>
                        {notDetailedMovies.map((item, index) => {
                                return (
                                    <BrowseMovieNdListItem
                                        number={index + 1}
                                        image={item.image}
                                        title={item.title}
                                        rating={item.rating}
                                        year={item.year}
                                        votes={item.votes}
                                        gross={item.gross}
                                        lastItem={index === notDetailedMovies.length - 1}/>
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
