import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    balkengrau: {
        borderTop: "1px solid",
        borderColor: "#5B5F63"
    }
});

export default function StarDetail({pair}) {
    const classes = useStyle();
    return (
        <Grid item>
            <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
                 <Grid item>
                     <Grid container direction={"row"} spacing={3} alignItems={"flex-start"}>
                         <Grid item>
                            <Typography variant={"body1"} color={"text"}>{pair.key}: </Typography>
                         </Grid>
                         <Grid item>
                            <Typography variant={"body1"} color={"text"}>{pair.value}</Typography>
                         </Grid>
                     </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}
