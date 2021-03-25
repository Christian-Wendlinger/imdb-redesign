import {Grid, Typography, Box, makeStyles} from "@material-ui/core";
import ShowMore from "../ShowMore";

const useStyle = makeStyles({
    balkengrau: {
        borderTop: "1px solid",
        borderColor: "#5B5F63"
    }
});

export default function Detail({title, pairs, lastItem}) {
    const classes = useStyle();
    return (
        [
        <Grid item>
            <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                <Grid item xs>
                    <Typography variant={"h3"} color={"text"}>
                        <Box fontWeight="fontWeightBold">
                        {title}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Grid container direction={"column"} spacing={0} alignItems={"flex-start"}>
                        {pairs.map(pair => {
                            return(
                                <Grid item>
                                    <Typography variant={"body1"} color={"text"}>{pair.key}: <Typography variant={"body1"} color={"text"} display={"inline"}>{pair.value} <Typography variant={"body1"} color={"primary"} style={{display: pair.more ? "inline" : "none"}}>More »</Typography></Typography></Typography>
                                </Grid>
                            );
                        }
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>,
        <Grid item style={{width: "100%", display: lastItem ? "none" : "block"}}>
            <hr className={classes.balkengrau}/>
        </Grid>
        ]
    );
}
