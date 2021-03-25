import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {useEffect} from "react";
import DetailsHeader from "./DetailsHeader";
import DetailsNavigation from "./DetailsNavigation";
import {movies} from "../../../data/movies";
import UserReviewListItem from "../../listItems/UserReviewListItem";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function UserReviewsPage({movieTitle, year, rating, pageName, pageId}) {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    return (
        <Container className={classes.firstItem}>
            <Grid container spacing={5}>
                <Grid item xs={9}>
                    <Grid container direction={"column"} spacing={3}>
                        <DetailsHeader
                            movieTitle={movieTitle}
                            year={year}
                            rating={rating}
                            pageName={pageName}
                            pageId={pageId}/>

                        <Grid item>
                            <Grid container direction={"column"} spacing={1}>
                                {movies[0].reviews.map((review, index) =>
                                    <UserReviewListItem
                                        rating={review.rating}
                                        author={review.author}
                                        date={review.date}
                                        title={review.title}
                                        text={review.text}
                                        lastItem={index === movies[0].reviews.length - 1}/>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container xs={3}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Grid container direction={"column"} spacing={3}>
                                <Grid item>
                                    <Typography variant={"h2"}>Navigation</Typography>
                                </Grid>

                                <Grid item>
                                    <DetailsNavigation active={5} pageId={pageId}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
