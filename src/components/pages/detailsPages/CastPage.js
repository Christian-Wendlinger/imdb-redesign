import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {useEffect} from "react";
import {cast} from "../../../data/cast";
import ActorListItem from "../../listItems/ActorListItem";
import DetailsHeader from "./DetailsHeader";
import DetailsNavigation from "./DetailsNavigation";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function CastPage({movieTitle, year, rating, pageName, pageId}) {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    return (
        <Container className={classes.firstItem}>
            <Grid container spacing={5}>

                <Grid item container xs={3}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Grid container direction={"column"} spacing={3}>
                                <Grid item>
                                    <Typography variant={"h2"}>Navigation</Typography>
                                </Grid>

                                <Grid item>
                                    <DetailsNavigation active={1} pageId={pageId}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

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
                                {cast.map((item, index) => {
                                        return (
                                            <ActorListItem
                                                image={item.largeImage}
                                                name={item.name}
                                                age={item.age}
                                                born={item.born}
                                                description={item.description}
                                                zodiacSign={item.zodiacSign}
                                                knownFor={item.knownFor}
                                                lastItem={index === cast.length - 1}/>
                                        );
                                    }
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Container>
    );
}
