import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import BrowseMovieNdListItem from "../listItems/BrowseMovieNdListItem";
import {moviePosters} from "../../data/moviePosters";
import SidebarBrowse from "../Sidebars/SidebarBrowse";

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

    const handleP1 = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleP2 = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);


    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Browse</Typography>
            <Grid container spacing={5}>
                <Grid item container xs={3}>
                    <SidebarBrowse/>
                </Grid>
                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={2}>
                        {moviePosters.map((item, index) => {
                                return (
                                    <BrowseMovieNdListItem
                                        number={index + 1}
                                        image={item.image}
                                        title={item.title}
                                        rating={item.rating}
                                        year={item.year}
                                        votes={item.votes}
                                        gross={item.gross}
                                        lastItem={index === moviePosters.length - 1}/>
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
