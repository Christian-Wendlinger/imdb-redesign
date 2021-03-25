import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {useEffect} from "react";
import DetailsHeader from "./DetailsHeader";
import DetailsNavigation from "./DetailsNavigation";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function PhotosPage({movieTitle, year, rating, pageName, pageId}) {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    return (
        <Container>
            <Grid container spacing={6} className={classes.firstItem}>
                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={3}>
                        <DetailsHeader
                            movieTitle={movieTitle}
                            year={year}
                            rating={rating}
                            pageName={pageName}
                            pageId={pageId}/>

                        <Grid item>
                            Hier Photos Komponente
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
                                    <DetailsNavigation active={2} pageId={pageId}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
