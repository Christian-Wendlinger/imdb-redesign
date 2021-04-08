import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import {useEffect} from "react";
import DetailsHeader from "./DetailsHeader";
import DetailsNavigation from "./DetailsNavigation";

// import Swiper core and required modules
import Photos from "../../SoundOfMetal/Photos";
import SidebarPhotos from "../../Sidebars/SidebarPhotos"
// main css (custom swiper style)
import "../../../main_style.css";
import {movies} from "../../../data/movies";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    },
    balken: {
        borderTop: "1px",
        borderColor: "#d89d2a"
    }
});

export default function PhotosPage({movieTitle, year, rating, pageName, pageId}) {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    return (
        <Container className={classes.firstItem}>
            <Grid container spacing={5}>

                <Grid item container xs={3}>
                    <Grid container direction={"column"} spacing={4}>
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
                        <Grid item>
                            <SidebarPhotos/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={9}>
                    <Grid container direction={"column"} spacing={4}>
                        <DetailsHeader
                            movieTitle={movieTitle}
                            year={year}
                            rating={rating}
                            pageName={pageName}
                            pageId={pageId}/>

                        <Grid item xs>
                            <Grid container direction={"row"} spacing={1}>
                                <Grid item xs>
                                    {movies[0].photos.map(photos => {
                                        return (
                                            <Photos
                                                images={photos}
                                            />
                                        );
                                    })}
                                </Grid>
                                <Grid item xs>
                                    {movies[0].photos2.map(photos => {
                                        return (
                                            <Photos
                                                images={photos}
                                            />
                                        );
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="center" justify="center">
                            <Pagination count={5} color="primary" size="large"/>
                        </Grid>
                    </Grid>
                </Grid>

                
            </Grid>
        </Container>
    );
}
