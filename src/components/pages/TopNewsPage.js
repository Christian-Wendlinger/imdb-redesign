import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {news} from "../../data/news";
import NewsListItem from "../listItems/NewsListItem";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function TopNewsPage() {
    const classes = useStyle();
    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Top News</Typography>
            <Grid container spacing={6}>
                <Grid item container xs={3}>
                    <Paper style={{width: "100%"}}>test</Paper>
                </Grid>
                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={2}>
                        {news.map((item, index) => {
                                return (
                                    <NewsListItem
                                        image={item.image}
                                        title={item.title}
                                        date={item.date}
                                        paragraphs={item.paragraphs}
                                        category={item.category}
                                        author={item.author}
                                        portal={item.portal}
                                        link={item.link}
                                        lastItem={index === news.length - 1}
                                    />
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
