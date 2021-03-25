import {Grid, makeStyles, Typography} from "@material-ui/core"

const useStyle = makeStyles({
    tabItem: {
        cursor: "pointer"
    }
});

export default function HomepageTabItem({name, active, onClick}) {
    const classes = useStyle();
    return (
        <Grid item className={classes.tabItem} onClick={onClick}>
            <Typography variant={"h3"} color={active ? "primary" : ""}>{name}</Typography>
        </Grid>
    );
}
