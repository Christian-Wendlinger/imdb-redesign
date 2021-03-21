import {Grid, makeStyles, Typography} from "@material-ui/core";

export default function BornTodaySlide({image, name}) {
    return (
        <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
            <Grid item>
                <img src={image} width={"100%"}/>
            </Grid>
            <Grid item>
                <Typography variant={"body2"}>{name}</Typography>
            </Grid>
        </Grid>
    );
}
