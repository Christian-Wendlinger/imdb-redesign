import {Grid, Typography} from "@material-ui/core";

export default function BornTodaySlide({image, name, age}) {
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <img src={image} width={"100%"} style={{cursor: "pointer"}}/>
            </Grid>
            <Grid item>
                <Typography variant={"body1"}>{name} ({age})</Typography>
            </Grid>
        </Grid>
    );
}
