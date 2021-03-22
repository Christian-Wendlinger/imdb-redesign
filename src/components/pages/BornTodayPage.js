import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {useEffect} from "react";
import ActorListItem from "../listItems/ActorListItem";
import {bornToday} from "../../data/bornToday";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function BornTodayPage() {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyle();
    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Born Today</Typography>
            <Grid container spacing={6}>
                <Grid item container xs={3}>
                    <Paper style={{width: "100%"}}>test</Paper>
                </Grid>
                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={2}>
                        {bornToday.map((item, index) => {
                                return (
                                    <ActorListItem
                                        number={index + 1}
                                        image={item.largeImage}
                                        name={item.name}
                                        age={item.age}
                                        born={item.born}
                                        description={item.description}
                                        zodiacSign={item.zodiacSign}
                                        knownFor={item.knownFor}
                                        lastItem={index === bornToday.length - 1}/>
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
