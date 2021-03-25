import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {useEffect} from "react";
import BrowseMovieListItem from "../listItems/BrowseMovieListItem";
import {moviePosters} from "../../data/moviePosters";
import SiderBrowse from "../Sidebars/SidebarBrowse";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function BrowsePage() {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Browse</Typography>
            <Grid container spacing={5}>
                <Grid item container xs={3}>
                    <SiderBrowse/>
                </Grid>
                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={2}>
                        {moviePosters.map((item, index) => {
                                return (
                                    <BrowseMovieListItem
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        number={index + 1}
                                        rating={item.rating}
                                        year={item.year}
                                        age={item.age}
                                        runtime={item.runtime}
                                        genres={item.genres}
                                        director={item.director}
                                        stars={item.stars}
                                        votes={item.votes}
                                        gross={item.gross}
                                        link={item.link}
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
