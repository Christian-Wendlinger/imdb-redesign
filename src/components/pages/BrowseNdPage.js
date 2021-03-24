import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {useEffect} from "react";
import BrowseMovieNdListItem from "../listItems/BrowseMovieNdListItem";
import {notDetailedMovies} from "../../data/notDetailedMovies";

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
    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Browse</Typography>
            <Grid container spacing={6}>
                <Grid item container xs={3}>
                    <Paper style={{width: "100%"}}>test</Paper>
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
