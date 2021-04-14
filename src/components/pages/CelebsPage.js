import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import ActorListItem from "../listItems/ActorListItem";
import {bornToday} from "../../data/bornToday";
import SidebarBornToday from "../Sidebars/SidebarBornToday";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function CelebsPage() {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [celebs, setCelebs] = useState([...bornToday]);

    const shuffle = () => {
        let newCelebs = [...celebs].sort(() => Math.random() - 0.5);
        setCelebs(newCelebs);
    }

    const classes = useStyle();
    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Celebs</Typography>
            <Grid container spacing={5}>
                <Grid item container xs={3}>
                    <SidebarBornToday shuffle={shuffle}/>
                </Grid>
                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={2}>
                        {celebs.map((item, index) => {
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
