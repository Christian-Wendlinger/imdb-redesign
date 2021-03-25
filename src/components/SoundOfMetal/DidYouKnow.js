import {Grid, Typography, Box, makeStyles} from "@material-ui/core";
import ShowMore from "../ShowMore";

const useStyle = makeStyles({
    balkengrau: {
        borderTop: "1px solid",
        borderColor: "#5B5F63"
    }
});

export default function DidYouKnow({title, content, lastItem}) {
    const classes = useStyle();
    return (
        [
        <Grid item>
            <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                <Grid item xs>
                    <Typography variant={"h3"} color={"text"}><Box fontWeight="fontWeightBold">{title}</Box></Typography>
                </Grid>
                <Grid item xs>
                    <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                        {content.map(line => {
                            return (
                                <Grid item>
                                    <Typography variant={"body1"} color={"text"} fontWeight="fontWeightBold">
                                        {line.line} 
                                    </Typography>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction={"row"}>
                <Grid item xs={11}></Grid>
                <Grid item xs={1}><ShowMore variant={"body1"}/></Grid>
             </Grid>
        </Grid>,
        <Grid item style={{width: "100%", display: lastItem ? "none" : "block"}}>
            <hr className={classes.balkengrau}/>
        </Grid>
        ]
    );
}