import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    balkengrau: {
        borderTop: "1px solid",
        borderColor: "#5B5F63"
    }
});

export default function StarDetail({key, value}) {
    const classes = useStyle();
    return (
        <Grid item>
                    <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                        <Grid item>
                             <Typography variant={"body1"} color={"text"}>{key}: <Typography variant={"body1"} color={"text"} display={"inline"}>{value}</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
        </Grid>
    )
}
