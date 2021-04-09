import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {news} from "../../data/news";
import NewsListItem from "../listItems/NewsListItem";
import {useEffect, useState} from "react";
import SidebarTopNews from "../Sidebars/SidebarTopNews";
import {moviePosters} from "../../data/moviePosters";

const useStyle = makeStyles({
    firstItem: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default function TopNewsPage() {
    // IMPORTANT! : Jump to top of the page when loading page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [topNews, setNews] = useState([...news]);

    const shuffle = () => {
        let newMovies = [...topNews].sort(() => Math.random() - 0.5);
        setNews(newMovies);
    }

    const classes = useStyle();
    return (
        <Container>
            <Typography variant={"h1"} color={"primary"} className={classes.firstItem}>Top News</Typography>
            <Grid container spacing={5}>
                <Grid item container xs={3}>
                    <SidebarTopNews shuffle={shuffle}/>
                </Grid>
                <Grid item container xs={9}>
                    <Grid container direction={"column"} spacing={1}>
                        {topNews.map((item, index) => {
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
